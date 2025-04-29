
  
    const FULL_DASH_ARRAY= 283
    const WARNING_THRESHOLD = 10
    const ALERT_THRESHOLD = 5

    const COLOR_CODES = {
        info:{
            color: 'green'
        },
        warning:{
            color:'orange',
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: 'red',
            threshold: ALERT_THRESHOLD
        }
    }

    let TIME_LIMIT = 30
    let timePassed = 0
    let timeLeft = TIME_LIMIT
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color

    document.querySelector("#timer").innerHTML = `
    <div class="base-timer base-timer-in">
            
                    <svg 
                        class="base-timer__svg"
                        viewBox="-30 -100 300 300"
                        >
                            <g class="base-timer__circle shadow">
                                <circle
                                    class="base-timer__path-elapsed"
                                    cx="50"
                                    cy="100"
                                    r="50"
                                ></circle>
                                <path
                                    id="base-timer-path-remaining"
                                    stroke-dasharray="29"
                                    class="base-timer__path-remaining ${remainingPathColor}"
                                    d="
                                M 20, 190
                                m -75, 0
                                a 110,110 0 1,0 220,0
                                a 110,110 0 1,0 -220,0
                                "
            
                                    ></path>
                                </g>
                            </svg>
                            <span id="base-timer-label" class="base-timer__label">${timeLeft}</span>
                        </div>
    `

    const timerTest = document.createElement('button')
    timerTest.classList.add('timer-test')
    timerTest.textContent = 'test'
    //document.body.appendChild(timerTest)
    /*
    timerTest.addEventListener("click", () => {
        timePassed = 0
        document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", 29)
        setTimeout(() => {
            document.getElementById("base-timer-path-remaining").classList.add('countdown')
        },865)  
            
        startTimer();
    })
    */
    function startTimer() {
        timer = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = timeLeft
            setCircleDasharray()
            setRemainingPathColor(timeLeft)

            if(timeLeft===0){
                onTimesUp()
            }
        },1000)
    }

    function onTimesUp() {
        clearInterval(timer);
        document.getElementById("base-timer-path-remaining").classList.remove('countdown')
    }
    /*
    function formatTime(time) {
        let seconds = time % 30;

        if (seconds < 10) {
            seconds = `${seconds}`
        }

        return `${seconds}`
    }
    */
    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft/ TIME_LIMIT
        return rawTimeFraction - (1/ TIME_LIMIT) * (1 - rawTimeFraction)
    }
    function setCircleDasharray() {
        const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 50`

        document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray)
    }

    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES

        if (timeLeft > 0 && timeLeft <= alert.threshold) {
            document.getElementById("base-timer-path-remaining").classList.remove(warning.color)
            document.getElementById("base-timer-path-remaining").classList.add(alert.color)
            document.getElementById("base-timer-path-remaining").classList.remove(info.color)
        } else if (timeLeft > 5 && timeLeft <= warning.threshold) {
            document.getElementById("base-timer-path-remaining").classList.remove(info.color)
            document.getElementById("base-timer-path-remaining").classList.add(warning.color)
            document.getElementById("base-timer-path-remaining").classList.remove(alert.color)
        } else if (timeLeft > 10) {
            document.getElementById("base-timer-path-remaining").classList.remove(alert.color)
            document.getElementById("base-timer-path-remaining").classList.add(info.color)
            document.getElementById("base-timer-path-remaining").classList.remove(warning.color)
        }
    }


    //viewBox="-426 -145 690 300"