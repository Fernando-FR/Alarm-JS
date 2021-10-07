export default class Clock
{
    constructor(date)
    {
        this.date = date;
    }
    getSeconds()
    {
        this.seconds = this.date.getSeconds();
        if (this.seconds < 10) {
            this.seconds = `0${this.seconds}`;
        }
        return this.seconds;
    }
    getMinutes()
    {
        this.minutes = this.date.getMinutes();
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`;
        }
        return this.minutes;
    }
    getHours()
    {
        this.hours = this.date.getHours();
        if (this.hours < 10) {
            this.hours = `0${this.hours}`;
        }
        return this.hours;
    }
    getFullTime()
    {
        return `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
    }
}