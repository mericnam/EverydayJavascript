const hour_hand = document.getElementById("hourHand")
const minute_hand = document.getElementById("minuteHand")
const second_hand = document.getElementById("secondHand")


function setDate() {
   const now = new Date();
   setHour(now)
   setMinute(now)
   setSecond(now)
}

function setHour(now){
    const hour = now.getHours();
    const mins = now.getMinutes();
    const hourDegrees = (hour * 30) + (mins/2) ;
    hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setMinute(now){
    const mins = now.getMinutes();
    const minsDegrees = (mins * 6)  ;
    minute_hand.style.transform = `rotate(${minsDegrees}deg)`;
}

function setSecond(now){
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 6) ;
    second_hand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate()
