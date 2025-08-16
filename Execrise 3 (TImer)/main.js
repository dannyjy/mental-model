const mins = document.getElementById('min');
const secs = document.getElementById('sec');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
let sec = Number(secs.textContent);
let min = Number(mins.textContent);
pauseBtn.style.display = 'none';
mins.style.display = 'none';
secs.textContent = '00 sec';
let timer = null;

const increment = () => {
    sec++;
    sec < 10 ? secs.textContent = `0${sec} sec` : secs.textContent = `${sec} sec`;
    if(sec >= 59){
        min++;
        mins.style.display = 'block';
        min < 10 ? mins.textContent = `0${min} min` : mins.textContent = `${min} min`;
        secs.textContent = '00 sec';
        sec = 0;
    }
}

const decrement = () => {
    sec--;
    sec = sec <= 0 ? clearInterval(timer) ? (secs.textContent = '0') : '0': sec;
    sec < 10 ? secs.textContent = `0${sec} sec` : secs.textContent = `${sec} sec`;
}

play.addEventListener("click", () => { 
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    timer = setInterval(decrement, 1000)
})
pause.addEventListener("click", () => {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    clearInterval(timer)
});

reset.addEventListener("click", () => {
    sec = 0;
    min = 0;
    secs.textContent = '00 sec';
    mins.style.display = 'none';
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
    clearInterval(timer);
})

add.addEventListener('click', increment);
sub.addEventListener('click', decrement);