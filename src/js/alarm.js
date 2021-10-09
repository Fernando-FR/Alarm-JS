import clock from './clock';
import calendar from './calendar';
import toggleAlarm from './toggleAlarm';
import toggleOptions from './toggleOptions';
import addAlarmClose from './addAlarmClose';
import addPreviewClose from './addPreviewClose';
export default new class Alarm
{
    constructor()
    {
        this.clock = document.getElementById('clock');
        this.date = document.getElementById('date');
        this.options = document.getElementById('options');
        this.blackscreen = document.getElementById('blackscreen');
        this.startButton = document.getElementById('startButton');
        this.closeOptions = document.getElementById('closeOptions');
        this.audio = document.getElementById('audio');
        this.hoursSelect = document.getElementById('hoursSelect');
        this.minutesSelect = document.getElementById('minutesSelect');
        this.secondsSelect = document.getElementById('secondsSelect');
        this.inputTitle = document.getElementById('inputTitle');
        this.alarm = document.getElementById('alarm');
        this.alarmBlackscreen = document.getElementById('alarm-blackscreen');
        this.alarmTitle = document.getElementById('alarm-title');
        this.alarmTime = document.getElementById('alarmTime');
        this.alarmPreview = document.getElementById('alarmPreview');
        this.stopButton = document.getElementById('stopButton');
        this.alarmClose = document.getElementById('alarm-close');
        this.alarmHeaderClose = document.getElementById('alarm-header-close');
    }
    setClockTime(timer)
    {
        let Clock = new clock(timer);
        this.clock.innerText = Clock.getFullTime();
    }
    setCalendarTime(date)
    {
        let Calendar = new calendar(date);
        this.date.innerText = Calendar.getFullCalendar();
    }
    playAudio()
    {
        this.audio.currentTime = 0;
        this.audio.loop = true;
        this.audio.play();
    }
    stopAudio()
    {
        this.audio.pause();
    }
    getAlarmData()
    {
        return {
            title:this.inputTitle.value,
            time:`${this.hoursSelect.value}:${this.minutesSelect.value}:${this.secondsSelect.value}`,
        };
    }
    resetAlarmData()
    {
        this.inputTitle.value = '';
        this.hoursSelect.selectedIndex = 0;
        this.minutesSelect.selectedIndex = 0;
        this.secondsSelect.selectedIndex = 0;
    }
    toggleAlarm()
    {
        toggleAlarm();
    }
    setAlarmData(preview = true)
    {
        let data = this.alarmData;
        if (preview){
            data = this.getAlarmData();
        }
        this.alarmTitle.innerText = data.title;
        this.alarmTime.innerText = data.time;
    }
    resetAlarm()
    {
        this.alarmTitle.innerText = '';
        this.alarmTime.innerText = '';
    }
    openAlarmPreview()
    {
        this.toggleAlarm();
        this.playAudio();
        this.setAlarmData();
    }
    closeAlarmPreview()
    {
        this.toggleAlarm();
        this.stopAudio();
        this.resetAlarm();
    }
    setAlarmText()
    {
        this.alarmPreview.innerText = `Alarme definido para: ${this.alarmData.time}`;
        this.alarmPreview.classList.add('active');
    }
    resetAlarmText()
    {
        this.alarmPreview.innerText = '';
        this.alarmPreview.classList.remove('active');
    }
    setAlarm()
    {
        this.alarmData = this.getAlarmData();
        toggleOptions();
        this.setAlarmText();
        this.startButton.style.display = 'none';
        this.stopButton.style.display = 'block';
        this.alarmIsActive = true;
        this.addAlarmClose();
    }
    checkAlarm()
    {
        if (this.alarmIsActive === true) {
            if (this.alarmData.time === this.clock.innerText){
                this.openAlarm();
            }
        }
        return false;
    }
    stopAlarm()
    {
        this.resetAlarmData();
        this.resetAlarmText();
        this.resetAlarm();
        this.alarmIsActive = false;
        this.startButton.style.display = 'block';
        this.stopButton.style.display = 'none';
        this.addPreviewClose();
        this.stopAudio();
    }
    openAlarm()
    {
        this.toggleAlarm();
        this.setAlarmData(false);
        this.playAudio();
    }
    addAlarmClose()
    {
        addAlarmClose();
    }
    addPreviewClose()
    {
        addPreviewClose();
    }
}