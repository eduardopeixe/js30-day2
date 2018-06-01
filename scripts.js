const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    //seconds    
    const secondsDegrees = getDegrees(now.getSeconds())
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    //minute    
    const minutesDegrees = getDegrees(now.getMinutes())
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    //hour
    const hourDegrees = ((now.getHour() / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

function getDegrees(time) {
    return ((time / 60) * 360) + 90
}

setInterval(setDate, 1000)