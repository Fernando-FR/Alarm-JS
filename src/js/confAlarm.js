import Alarm from './alarm';
import toggleOptions from './toggleOptions';

//Set Clock on load
Alarm.setClockTime(new Date());
//Set Calendar on load
Alarm.setCalendarTime(new Date());
//Update Clock and Calendar every 1 second
setInterval(()=>{
    Alarm.setClockTime(new Date());
    Alarm.setCalendarTime(new Date());
},1000);
//Buttons to toggle Options Menu
let blackscreen = document.getElementById('blackscreen');
let startButton = document.getElementById('startButton');
let closeOptions = document.getElementById('closeOptions');

blackscreen.addEventListener('click',toggleOptions);
startButton.addEventListener('click',toggleOptions);
closeOptions.addEventListener('click',toggleOptions);
//Open Alarm Preview
let test = document.getElementById('test');
test.addEventListener('click',()=>{
    Alarm.openAlarmPreview();
});
//Close Preview
let previewHeaderClose = document.getElementById('preview-header-close');
let previewClose = document.getElementById('preview-close');

previewHeaderClose.addEventListener('click',()=>{
    Alarm.closeAlarmPreview();
})
previewClose.addEventListener('click',()=>{
    Alarm.closeAlarmPreview();
});

//Start Alarm
let start = document.getElementById('start');
start.addEventListener('click',()=>{
    Alarm.setAlarm();
})
//Check Alarm every 5 seconds
setInterval(() => {
    console.log(Alarm.checkAlarm());
}, 1000);

//Stop Alarm
let stopButton = document.getElementById('stopButton');
let alarmClose = document.getElementById('alarm-close');
let alarmHeaderClose = document.getElementById('alarm-header-close');

stopButton.addEventListener('click',()=>{
    Alarm.stopAlarm();
})
alarmClose.addEventListener('click',()=>{
    Alarm.stopAlarm();
    Alarm.toggleAlarm();
})
alarmHeaderClose.addEventListener('click',()=>{
    Alarm.stopAlarm();
    Alarm.toggleAlarm();
})

