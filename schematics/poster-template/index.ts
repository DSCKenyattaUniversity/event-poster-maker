import * as path from 'path';
import {
    Rule, Tree, SchematicContext,
    apply, url,
    applyTemplates,
    move, chain, mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export default function posterTemplate(options: Schema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const { templatesRoot, name, orientation } = options;

        const template = {
            root: path.join(templatesRoot, name),
            metadata: {
                id: strings.dasherize(name),
                name,
                authors: [],
                orientation,
                thumbnail: 'poster.png'
            }
        };

        const templateSource = apply(url('./files'), [
            applyTemplates({
                ...template.metadata
            }),
            move(templatesRoot)
        ]);

        return chain([
            mergeWith(templateSource)
        ])(tree, context);
    }
}