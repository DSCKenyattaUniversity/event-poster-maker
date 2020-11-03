import { BuilderContext, BuilderOutput, createBuilder, targetFromTargetString } from '@angular-devkit/architect';
import { Schema as BuilderOptions } from './schema';

import * as childProcess from 'child_process';

import { Writable as WritableStream } from 'stream';

async function builder(
    options: BuilderOptions,
    context: BuilderContext
): Promise<BuilderOutput> {
    const targetSpec = targetFromTargetString(options.browserTarget);
    const buildOptions = await context.getTargetOptions(targetSpec);

    const build = await context.scheduleTarget(targetSpec);

    const buildresult: any = await build.result;

    // Assert that it was successful
    if (!buildresult.success) {
        return buildresult;
    }

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

    const npx = childProcess.spawnSync('npx', [
        'light-server',
        '-s',
        buildresult.outputPath,
        '-p',
        options.port,
        '-w',
        `src/**, ${buildOptions.templatesRoot}/** # npm run build`
    ], {
        cwd: context.workspaceRoot,
        stdio: [ process.stdin, process.stdout, process.stderr ]
    });

    if (npx.status !== 0) {
        console.log(npx.error?.message);

        process.exit(1);
    }

    return { ...buildresult };
}

export default createBuilder<BuilderOptions, BuilderOutput>(builder);