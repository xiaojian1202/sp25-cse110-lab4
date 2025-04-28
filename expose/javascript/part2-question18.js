setInterval(timeSeconds, 1000);

function timeSeconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}