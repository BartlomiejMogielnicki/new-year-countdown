const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const year = document.getElementById('year');
const loading = document.getElementById('loading');

// Count years
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Update countdown timer and DOM
const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    // Count timers
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    // Update DOM
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
};

// Update year
year.innerHTML = currentYear + 1;

// Show/hide loader and timers
setTimeout(() => {
    loading.remove();
    countdown.classList.remove('hide');
}, 1000);

// Update time every 1 sec
setInterval(updateCountdown, 1000);