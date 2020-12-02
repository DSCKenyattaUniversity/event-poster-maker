import * as moment from 'moment';
import Speaker from './speaker';

export default class Event {
    communityName: String;
    subtitle: string;
    startTime: moment.Moment;
    endTime: moment.Moment;

    constructor(
        public title: string,
        public date: moment.Moment,
        public venue: string,
        public speakers: Speaker[]
    ) {
        this.subtitle = '';
        this.startTime = moment();
        this.endTime = moment();
    }
}
