let alarmClose = document.getElementById('alarm-close');
let alarmHeaderClose = document.getElementById('alarm-header-close');
let previewClose = document.getElementById('preview-close');
let previewHeaderClose = document.getElementById('preview-header-close');

export default function () {
    previewClose.style.display = 'none';
    previewHeaderClose.style.display = 'none';
    alarmClose.style.display = 'block';
    alarmHeaderClose.style.display = 'block';
}