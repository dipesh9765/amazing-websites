class DigitalClock {
    constructor(element) {
        this.element = element;

    }

    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 50);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minutes.toString().padStart(2, '0');
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;

        const amPm = parts.isAm ? 'AM' : 'PM';

        this.element.querySelector(".clock-time").innerHTML = timeFormatted;
        this.element.querySelector('.clock-ampm').innerHTML = amPm;
    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minutes: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector('.clock');

const clockObject = new DigitalClock(clockElement);

clockObject.start();