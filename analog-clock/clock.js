const secondhand = document.getElementById('second-hand');
const minutedhand = document.getElementById('minute-hand')
const hourhand = document.getElementById('hour-hand')
function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;
    rotateClockHand(secondhand , seconds);
    rotateClockHand(minutedhand , minutes);
    rotateClockHand(hourhand,hours);


}

function rotateClockHand(element,rotation)
{
    element.style.setProperty('--rotate',rotation * 360);
}
// setInterval(clockTick , 1000)
const setTimeButton = document.getElementById('set-time-button');
        setTimeButton.addEventListener('click', () => {
            const hours = parseInt(document.getElementById('hour-input').value) || 0;
            const minutes = parseInt(document.getElementById('minute-input').value) || 0;
            const seconds = parseInt(document.getElementById('second-input').value) || 0;

            const totalSeconds = hours * 3600 + minutes * 60 + seconds;

            const newRotation = totalSeconds / 43200; // 12 hours in seconds

            rotateClockHand(secondhand, newRotation);
            rotateClockHand(minutehand, newRotation * 12);
            rotateClockHand(hourhand, newRotation * 12);
        });

        setInterval(clockTick, 1000);
