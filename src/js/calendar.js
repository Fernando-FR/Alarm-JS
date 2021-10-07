export default new class Calendar
{
    constructor()
    {
        this.date = new Date();
    }
    getWeakDay()
    {
        switch (this.date.getDay()) {
            case 0:
                this.weakDay = 'Domingo';
                break;
            case 1:
                this.weakDay = 'Segunda-Feira';
                break;
            case 2:
                this.weakDay = 'Terça-Feira';
                break;
            case 3:
                this.weakDay = 'Quarta-Feira';
                break;
            case 4:
                this.weakDay = 'Quinta-Feira';
                break;
            case 5:
                this.weakDay = 'Sexta-Feira';
                break;
            case 6:
                this.weakDay = 'Sábado'
                break;
            }
        return this.weakDay;
    }
    getMonthDay()
    {
        this.monthDay = this.date.getDate();
        return this.monthDay;
    }
    getMonth()
    {
        switch (this.date.getMonth()) {
            case 0:
                this.month = 'Janeiro';
                break;
            case 1:
                this.month = 'Fevereiro';
                break;
            case 2:
                this.month = 'Março';
                break;
            case 3:
                this.month = 'Abril';
                break;
            case 4:
                this.month = 'Maio';
                break;
            case 5:
                this.month = 'Junho';
                break;
            case 6:
                this.month = 'Julho';
                break;
            case 7:
                this.month = 'Agosto';
                break;
            case 8:
                this.month = 'Setembro';
                break;
            case 9:
                this.month = 'Outubro';
                break;
            case 10:
                this.month = 'Novembro';
                break;
            case 11:
                this.month = 'Dezembro';
                break;
        }
        return this.month;
    }
    getYear()
    {
        this.year = this.date.getFullYear();
        return this.year;
    }
    getFullCalendar()
    {
        return `${this.getWeakDay()},${this.getMonthDay()} de ${this.getMonth()},${this.getYear()}`;
    }
}