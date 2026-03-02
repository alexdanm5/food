function timer (id, deadLine) {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());

        const days = Math.floor((t / (1000*60*60*24)));
        const hours = Math.floor((t / (1000*60*60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector('.timer'),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if(t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock(id, deadLine);

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        }else {
            return num;
        }
    }
}

export default timer;