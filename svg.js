
  
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
    let plusTimeLabel = ''

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
                            <span id="plus-time-label">${plusTimeLabel}</span>
                        </div>
    `

    const timerTest = document.createElement('button')
    timerTest.classList.add('timer-test')
    timerTest.textContent = 'test'
    
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

    let startAnew = false

    function onTimesUp() {
        
        const gameOverTextContainer = document.createElement('div')
        gameOverTextContainer.classList.add('game-over-text-container')
        gameOverTextContainer.classList.add('game-over-text-container-in')
        const gameOverFilter = document.createElement('div')
        gameOverFilter.classList.add('game-over-filter')
        gameOverFilter.classList.add('game-over-filter-in')
        const gameOverTextHeader = document.createElement('span')
        const gameOverTextFooter = document.createElement('span')
        gameOverTextHeader.classList.add('game-over-text-header')
        gameOverTextFooter.classList.add('game-over-text-footer')
        gameOverTextHeader.textContent = 'GAME OVER'
        gameOverTextFooter.textContent = 'You know what works? Trying harder.'
        const gameOverButton = document.createElement('button')
        gameOverButton.classList.add('game-over-button')
        gameOverButton.classList.add('game-over-button-in')
        gameOverButton.textContent = 'Thanks..?'
        
        
        clearInterval(timer);
        document.getElementById("base-timer-path-remaining").classList.remove('countdown')
        const card7 = document.querySelector('.card7')
        const card6 = document.querySelector('.card6')
        const card5 = document.querySelector('.card5')
        const card4 = document.querySelector('.card4')
        const card3 = document.querySelector('.card3')
        const card2 = document.querySelector('.card2')
        const card1 = document.querySelector('.card1')
        card7.classList.add('game-over-7')
        setTimeout(() => {
            card6.classList.add('game-over-6')
        },50)
        setTimeout(() => {
            card5.classList.add('game-over-5')
        },100)
        setTimeout(() => {
            card4.classList.add('game-over-4')
        },150)
        setTimeout(() => {
            card3.classList.add('game-over-3')
        },200)
        setTimeout(() => {
            card2.classList.add('game-over-2')
        },250)
        setTimeout(() => {
            card1.classList.add('game-over-1')
        },300)
        setTimeout(() => {
            document.body.removeChild(card7)
            document.body.removeChild(card6)
            document.body.removeChild(card5)
            document.body.removeChild(card4)
            document.body.removeChild(card3)
            document.body.removeChild(card2)
            document.body.removeChild(card1)
        },750)

        setTimeout(() => {
            document.body.appendChild(gameOverTextContainer)
            document.body.appendChild(gameOverFilter)
            setTimeout(() => {
                gameOverTextContainer.appendChild(gameOverTextHeader)
                setTimeout(() => {
                    gameOverTextContainer.appendChild(gameOverTextFooter)
                    gameOverTextContainer.classList.remove('game-over-text-container-in')
                    setTimeout(() => {
                        gameOverTextContainer.appendChild(gameOverButton)
                    },1250)
                },1050)
            },500)
        },500)
        gameOverButton.addEventListener('mousedown', () => {
            gameOverButton.classList.remove('game-over-button-in')
            gameOverButton.classList.add('game-over-button-click')
            setTimeout(() => {
                gameOverTextContainer.classList.add('game-over-button-click')
                setTimeout(() => {
                    gameOverTextContainer.classList.add('game-over-text-container-out')
                    setTimeout(() => {
                        gameOverFilter.classList.remove('game-over-filter-in')
                        gameOverFilter.classList.add('game-over-filter-out')
                    },300)
                    setTimeout(() => {
                        document.body.removeChild(gameOverTextContainer)
                        startAnew = true
                        setTimeout(() => {
                            document.body.removeChild(gameOverFilter)
                        },300)
                    },550)
                },500)
            }, 250) 
        })
        return startAnew
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