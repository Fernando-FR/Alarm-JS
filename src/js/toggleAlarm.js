let alarm = document.getElementById('alarm');
let alarmBlackscreen = document.getElementById('alarm-blackscreen');
export default function() {
    alarm.classList.toggle('active');
    alarmBlackscreen.classList.toggle('active');
}