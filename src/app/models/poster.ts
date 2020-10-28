export const enum Orientation {
    PORTRAIT = 1,
    LANDSCAPE = 2
}

export class Template {
    id: string;
    name: string;
    thumbnail: string;
    orientation: Orientation;
}
