export default class Speaker {
    constructor(
        public id: number,
        public name: string,
        public role: string,
        public company: string,
        public thumbnailUrl?: string
    ) { }
}
