class DigitalClock {
    constructor(input) {
        this.input = input
    }

    start() {
        this.update()
        setInterval(() => {
            this.update()
        }, 500)
    }

    update() {
        const parts = this.getTimeParts()
        const formatHour = parts.hour.toString().padStart(2, '0')
        const minuteFormatted = parts.minutes.toString().padStart(2, '0')
        const formattedSeconds = parts.seconds.toString().padStart(2, '0')
        const timeFormatted = `${formatHour}:${minuteFormatted}:${formattedSeconds}`

        const amPm = parts.isAm ? 'AM' : 'PM'

        this.input.querySelector('.clock-time').innerHTML = timeFormatted
        this.input.querySelector('.clock-ampm').innerHTML = amPm
    }

    getTimeParts() {
        const now = new Date()

        return {
            hour: now.getHours() % 12 || 12,
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            isAm: now.getHours() < 12
        }
    }
}

const clockElement = document.querySelector('.clock')
const logon = ':'
const clockObject = new DigitalClock(clockElement)

clockObject.start()
