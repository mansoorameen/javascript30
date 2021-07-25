const secHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hand = document.querySelectorAll('.hand')


function time() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDegree = ((sec / 60) *360) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min / 60) *360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) *360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(time, 1000)