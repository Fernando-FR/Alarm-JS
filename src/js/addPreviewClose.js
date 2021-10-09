let alarmClose = document.getElementById('alarm-close');
let alarmHeaderClose = document.getElementById('alarm-header-close');
let previewClose = document.getElementById('preview-close');
let previewHeaderClose = document.getElementById('preview-header-close');

export default function () {
    previewClose.style.display = 'block';
    previewHeaderClose.style.display = 'block';
    alarmClose.style.display = 'none';
    alarmHeaderClose.style.display = 'none';
}