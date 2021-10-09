let createOption = (loop,el)=>{
    for(let i=0;i<=loop;i++){
        if (i<10){
            i = `0${i}`;
        }
        let option = document.createElement('option');
        option.innerText = i;
        el.appendChild(option);
    }
}
createOption(23,document.getElementById('hoursSelect'));
createOption(59,document.getElementById('minutesSelect'));
createOption(59,document.getElementById('secondsSelect'));
