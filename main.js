var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var shapeColor = 'white';
ctx.strokeStyle = shapeColor;
ctx.lineWidth = 16;
ctx.shadowBlur = 15;
ctx.shadowColor = shapeColor;

// Convert degree to radians
function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    // Background
    ctx.fillStyle = 'teal';
    ctx.fillRect(0, 0, 500, 500);
    // Hours
    ctx.beginPath();
    // 360/24 hrs = 15
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours * 15) - 90));
    ctx.stroke();

    // Minutes
    ctx.beginPath();
    // 360/60 min = 6
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes * 6) - 90));
    ctx.stroke();

    // Seconds
    ctx.beginPath();
    // 360/60 = 6
    ctx.arc(250, 250, 140, degToRad(270), degToRad((seconds * 6) - 90));
    ctx.stroke();

    // Date
    ctx.font = "25px Arial";
    ctx.fillStyle = shapeColor;
    ctx.fillText(today, 155, 250);

    // Time
    ctx.font = "15px Arial";
    // ctx.fillStyle = shapeColor;
    ctx.fillText(time, 175, 280);

    // debug code
    // console.log(now);
    // console.log(hours + '' + minutes + '' + seconds);

}
setInterval(renderTime, 1000);
