const countdown = ()=>{
    const countDate = new Date('Jan 20, 2023, 10:26:00').getTime()
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.getElementById("day").innerText = textDay
    document.getElementById('hour').innerText = textHour
    document.getElementById('minute').innerText = textMinute
    document.getElementById('second').innerText = textSecond
}

countdown();

setInterval(() => {
    countdown();
}, 1000);