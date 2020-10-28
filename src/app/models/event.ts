import { Moment } from 'moment';
import Speaker from './speaker';

export default class Event {
    constructor(
        public title: string,
        public date: Moment,
        public venue: string,
        public speakers: Speaker[]
    ) { }
}
