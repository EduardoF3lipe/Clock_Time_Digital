function ShowTime(){

    let t = new Date();
    let hour = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();
    let week = [
        "SU", 
        "MO", 
        "TU", 
        "WE", 
        "TH", 
        "FR", 
        "SA"
    ];

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;


    document.getElementById('day').innerHTML = week[t.getDay()];
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(ShowTime, 1);