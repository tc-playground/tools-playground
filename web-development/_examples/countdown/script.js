const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const now = new Date();
const xmasYear = (now.getMonth() === 11 && now.getDate() < 25) 
    ? new Date().getFullYear() + 1
    : new Date().getFullYear();

year.innerText = xmasYear;

const xmas = `December 25 ${xmasYear} 00:00:00`;
const xmasTime = new Date(xmas);

function updateCountdown() {
    const diff = xmasTime - new Date();
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);


