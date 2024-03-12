function currentTime() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    const midday = hour >= 12 ? "PM" : "AM";
    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    const timeString = `${hour} : ${min} : ${sec} ${midday}`;
    document.getElementById("clock").innerText = timeString;

    setTimeout(currentTime, 1000);
}

function updateTime(k) { 
    /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();