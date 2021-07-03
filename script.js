const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#seconds')

const newYears = '1 jan 2022'

function countdown(){
    const newYearDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = Math.floor((newYearDate - currentDate) / 1000)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}
countdown()
setInterval(countdown , 1000)
