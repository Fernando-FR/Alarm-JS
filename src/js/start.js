import clock from './clock';
import calendar from './calendar';

const clockTimer = document.getElementById('clock');
const dateTimer = document.getElementById('date');
const blackscreen = document.getElementById('blackscreen');
const buttonOpenOptions = document.getElementById('startButton');
const buttonCloseOptions = document.getElementById('closeOptions');
const optionsMenu = document.getElementById('options');
const hoursSelect = document.getElementById('hoursSelect');
const minutesSelect = document.getElementById('minutesSelect');
const secondsSelect = document.getElementById('secondsSelect');

let timeNow = new Date();
let clockClass = new clock(timeNow);
let calendarClass = new calendar(timeNow);
clockTimer.innerText = clockClass.getFullTime();
dateTimer.innerText = calendarClass.getFullCalendar();

setInterval(() => {
    let timeNow = new Date();
    let clockClass = new clock(timeNow);
    let calendarClass = new calendar(timeNow);
    clockTimer.innerText = clockClass.getFullTime();
    dateTimer.innerText = calendarClass.getFullCalendar();
}, 1000);

const toggleOptions = ()=>{
    optionsMenu.classList.toggle('active');
    blackscreen.classList.toggle('active');
}

blackscreen.addEventListener('click',toggleOptions);
buttonOpenOptions.addEventListener('click',toggleOptions);
buttonCloseOptions.addEventListener('click',toggleOptions);

const createOption = (loop,el)=>{
    for(let i=0;i<=loop;i++){
        if (i<10){
            i = `0${i}`;
        }
        let option = document.createElement('option');
        option.innerText = i;
        el.appendChild(option);
    }
}
createOption(23,hoursSelect);
createOption(59,minutesSelect);
createOption(59,secondsSelect);