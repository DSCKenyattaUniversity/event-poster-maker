import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { Schema as BuilderOptions } from './schema';

import * as fs from 'fs';
import * as path from 'path';
import * as childProcess from 'child_process';
import * as rimraf from 'rimraf';

import { Writable as WritableStream } from 'stream';

async function builder(
    { templatesRoot, ...options }: BuilderOptions,
    context: BuilderContext
): Promise<BuilderOutput> {
    const finalOpts: any = await context.validateOptions(options, '@angular-devkit/build-angular:browser');

    const build = await context.scheduleBuilder('@angular-devkit/build-angular:browser', finalOpts, {
        target: context.target
    });
    const buildresult: any = await build.result;

    // Assert that it was successful
    if (!buildresult.success) {
        return { success: false };
    }

    
    // After running the build, compile the poster templates to the templates folder in the outputDir

    const finalTemplatesRoot = path.join(context.workspaceRoot, templatesRoot);

    // Assert that templatesRoot exists
    if (!fs.existsSync(finalTemplatesRoot)) {
        context.logger.error("The templates root path provided doesn't exist.");
        return { success: false };
    }

    // Assert that templatesRoot is a Directory
    if (!fs.statSync(finalTemplatesRoot).isDirectory) {
        context.logger.error("The templates root path provided is not a directory.");
        return { success: false };
    }

    const templates: { id: string, name: string, orientation: number, thumbnail: string }[] = [];

    const templatesOutputDir = path.join(buildresult.outputPath, 'templates');

    if (fs.existsSync(templatesOutputDir)) {
        rimraf.sync(templatesOutputDir);
    }

    fs.mkdirSync(templatesOutputDir);

    const stderr = new WritableStream();
    const stdout = new WritableStream();

    stderr._write = function (chunk, _, done) {
        context.logger.error(chunk.toString());
        done();
    };
    stdout._write = function (chunk, _, done) {
        context.logger.info(chunk.toString());
        done();
    };

    fs.readdirSync(finalTemplatesRoot).forEach(file => {
        const current = path.join(finalTemplatesRoot, file);

        const stat = fs.statSync(current);

        if (!stat.isDirectory || !fs.existsSync(path.join(current, 'meta.json'))) {
            return;
        }

        const jsonString = fs.readFileSync(path.join(current, 'meta.json'), 'utf-8');
        const template = JSON.parse(jsonString);
        const { id, name, orientation, thumbnail } = template;

        templates.push({ id, name, orientation, thumbnail });

        const templateOutputDir = path.join(templatesOutputDir, id);

        fs.mkdirSync(templateOutputDir);

        fs.writeFileSync(path.join(templateOutputDir, 'meta.json'), JSON.stringify(template));

        // Compile poster.svg to templateOutputDir/poster.svg
        // --do-not-minimize

        const buffer = fs.readFileSync(path.join(current, thumbnail));
        fs.writeFileSync(path.join(templateOutputDir, thumbnail), buffer);


        const npx = childProcess.spawnSync('npx', [
            'svg-compiler',
            '-i',
            path.join(current, 'poster.svg'),
            '-o',
            path.join(templateOutputDir, 'poster.svg')
        ], {
            cwd: context.workspaceRoot,
            stdio: [ process.stdin, process.stdout, process.stderr ]
        });

        if (npx.status !== 0) {
            console.log(npx.error?.message);

            process.exit(1);
        }
    });

    // Write the meta.json to the templatesDir
    fs.writeFileSync(path.join(templatesOutputDir, 'meta.json'), JSON.stringify(templates));

    return { ...buildresult };
}

export default createBuilder<BuilderOptions, BuilderOutput>(builder);