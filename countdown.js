const  startingHours = 60 ;
let time = startingHours * 60;


const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(updateCountdown,1000)

function updateCountdown(){
    // const hours = Math.floor(time/3600);
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    // hours.innerHTML = `${hours}`;
    minutes.innerHTML =minutes;
    seconds.innerHTML =seconds;
    time--;

    // console.error(hours);
    console.error(minutes);
    console.error(seconds);
}