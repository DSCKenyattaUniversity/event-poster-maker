import { JsonObject } from '@angular-devkit/core';

export interface Schema extends JsonObject {
    browserTarget: string;

    port: number;
}
