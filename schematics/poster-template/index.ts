import * as path from 'path';
import {
    Rule, Tree,
    apply, url,
    applyTemplates,
    move, chain, mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export default function posterTemplate(options: Schema) : Rule {
    return (tree: Tree) => {
        const { templatesRoot, name, orientation } = options;

        const template = {
            root: path.join(templatesRoot, name),
            metadata: {
                id: strings.dasherize(name),
                name,
                authors: [],
                orientation
            }
        };

        const metaFilePath = path.join(options.templatesRoot, 'meta.json');
        const content = tree.read(metaFilePath)?.toString('utf-8') || '[]';
        const metadata = JSON.parse(content);

        const output = JSON.stringify([
            ...metadata,
            {
                id: template.metadata.id,
                name: template.metadata.name,
                thumbnail: "poster.png",
                orientation: template.metadata.orientation
            }
        ], null, 4);

        tree.overwrite(metaFilePath, output);

        const templateSource = apply(url('./files'), [
            applyTemplates({
                ...template.metadata
            }),
            move(templatesRoot)
        ]);

        return chain([
            mergeWith(templateSource)
        ]);
    }
}