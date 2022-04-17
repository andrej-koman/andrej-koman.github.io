const currentYear = new Date().getFullYear();

function getLastDayOfYear(year) {
    return new Date(year, 11, 31, 23, 59, 59);
}

const countdown = () => {
    const countDate = getLastDayOfYear(currentYear).getTime();
    const today = new Date().getTime();
    const gap = countDate - today;
    // constants which determine how many miliseconds every day/second/minute/hour have
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // algorithm for calculating the number of days until the new year
    const daysToNewYear = Math.floor(gap / day);
    const hoursToNewYear = Math.floor((gap % day) / hour);
    const minutesToNewYear = Math.floor((gap % hour) / minute);
    const secondsToNewYear = Math.floor((gap % minute) / second);
    // update the inner html
    document.querySelector('#day').innerHTML = daysToNewYear;
    document.querySelector('#hour').innerHTML = hoursToNewYear - 1; // +1 gmt time zone
    document.querySelector('#minute').innerHTML = minutesToNewYear;
    document.querySelector('#second').innerHTML = secondsToNewYear;
}

countdown();

setInterval(countdown, 1000);













