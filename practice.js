// im going to need an array of objects containing a title and a nested array that contains metadata for each square.
// random choice will choose a pair
// somehow I will have to map the metadata to the box. likely a for loop or for each of the array?


// if z-index value is <= 2
function squareSound() {
    var squareClick = new Audio("audio/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3")
    squareClick.play()
}

/*
const sideBarRight = document.createElement('div')
const sideBarLeft = document.createElement('div')
sideBarLeft.classList.add('side-bar-left')
sideBarRight.classList.add('side-bar-right')
sideBarLeft.classList.add('side-bar-left-in')
sideBarRight.classList.add('side-bar-right-in')
document.body.appendChild(sideBarLeft)
document.body.appendChild(sideBarRight)
document.body.setAttribute('style', 'flex-direction: row;')
const soundIcon = document.createElement('img')
soundIcon.src = "img/soundIcon2.png"
const settingsCog = document.createElement('img')
settingsCog.src = "img/settingsCog.png"
const discordIcon = document.createElement('img')
discordIcon.src = "img/discordIcon.png"
soundIcon.width = 120
settingsCog.width = 105
discordIcon.width = 165
const soundButton = document.createElement('button')
const settingsButton = document.createElement('button')
const discordButton = document.createElement('button')
soundButton.classList.add('sound-button')
settingsButton.classList.add('settings-button')
discordButton.classList.add('discord-button')
sideBarLeft.appendChild(soundButton)
sideBarLeft.appendChild(settingsButton)
sideBarLeft.appendChild(discordButton)
soundButton.appendChild(soundIcon)
settingsButton.appendChild(settingsCog)
discordButton.appendChild(discordIcon)
const globalAudio = (volumeLevel) => {
    const audios = document.querySelectorAll('audio')
    audios.forEach(audio => {
        audio.volume = volumeLevel
    })
}

soundButton.addEventListener('mousedown', () => {
    soundButton.classList.remove('sound-button-hover')
    soundButton.classList.add('sound-button-press')
    setTimeout(() => {
        soundButton.classList.remove('sound-button-press')
    }, 500)
})
soundButton.addEventListener('mouseover', () => {
    soundButton.classList.add('sound-button-hover')
})
soundButton.addEventListener('mouseleave', () => {
    soundButton.classList.remove('sound-button-hover')
})
settingsButton.addEventListener('mousedown', () => {
    settingsButton.classList.remove('settings-button-hover')
    settingsButton.classList.add('settings-button-press')
    setTimeout(() => {
        settingsButton.classList.remove('settings-button-press')
    }, 500)
})
settingsButton.addEventListener('mouseover', () => {
    settingsButton.classList.add('settings-button-hover')
})
settingsButton.addEventListener('mouseleave', () => {
    settingsButton.classList.remove('settings-button-hover')
})
discordButton.addEventListener('mousedown', () => {
    discordButton.classList.remove('discord-button-hover')
    discordButton.classList.add('discord-button-press')
    setTimeout(() => {
        discordButton.classList.remove('discord-button-press')
    }, 500)
})
discordButton.addEventListener('mouseover', () => {
    discordButton.classList.add('discord-button-hover')
})
discordButton.addEventListener('mouseleave', () => {
    discordButton.classList.remove('discord-button-hover')
})
    */

/*
function tutorialFuntion() {
    const box = document.createElement('div')
    const coolButton = document.createElement('button')
    const coolButton2 = document.createElement('button')
    coolButton2.textContent = 'finally'
    coolButton2.classList.add('cool')
    coolButton2.classList.add('cool-in2')
    coolButton.textContent = 'cool'
    coolButton.classList.add('cool')
    coolButton.classList.add('cool-in')

    let coolIndex = 0
    const card = document.createElement('div')
    coolButton.addEventListener('mousedown', () => {
        card.classList.remove('card-animation2')
        const coolButtonArray = ['nice', 'sick', 'dont care', 'wow', 'really?', 'this sucks', 'play the game', 'please stop', 'enjoy your life', 'leave me alone', 'i hate you', 'stop lecturing', 'fuck off', 'no one asked', 'that\'s irresponsible', 'wow you\'re a dick', 'why can\'t i skip this', 'jesus STOP', 'STOP ALREADY', 'STOP', 'NOW', 'ENOUGH', 'LET ME OUT', 'OUT I SAY', 'OUT', 'FUCK', 'AH', 'AHHH', 'ARGH', 'ARGGGAAH', '*huff*', 'eehhEEEIIIUH', 'YAAAAAAAA', 'OOOOOOUT', 'NOOOOWWW', 'FFFFFUUUUUUUUCKK', 'LET', 'ME', 'OUT', 'YYYYYAAAAAAAAAAAHH', '*huff*', '*puff*', 'EEEEEUUUGH', 'YARGGHHAAAA', 'AAAAAAAAAHHHHHHHHHHHHHHHHH', 'DIE']
        
        const cardAnimationArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'ani1', 'ani2', 'ani3', 'ani4', 'ani5', 'ani6', 'ani7', 'ani8', 'ani9', 'ani10', 'ani11', 'ani12', 'ani13', 'ani14', 'ani15', 'ani16', 'ani17', 'ani18', 'ani19', 'ani20', 'ani21', 'ani22', 'ani23', 'ani24', 'ani25', 'ani26', 'ani27']

        coolButton.classList.remove('cool-in')
        coolButton.classList.add('cool-button-click')
        function chooseString() {
            coolButton.textContent = coolButtonArray.at(coolIndex)
            
            if (coolIndex >= coolButtonArray.length) {
                coolButton.textContent = 'What\'s that noise?'
            }
        }
        chooseString()
        function cardAnimation() {
            const aniNumber = cardAnimationArray.at(coolIndex)
            if (coolIndex >= 18) {
                card.classList.add(aniNumber) 
                if (coolIndex > 0 && coolIndex <= 27 || coolIndex > 28 && coolIndex <= 41 || coolIndex > 42 && coolIndex <= 45) { 
                    //trying to make some of the classes only last for a little bit so they dont clash a fuck shit up
                    setTimeout(() => { 
                        card.classList.remove(aniNumber)
                    }, 500)
                }
                if (coolIndex === 28) {
                    setTimeout(() => {
                        coolButton.classList.add(aniNumber)
                    },250)
                }
                if (coolIndex === 30) {
                    card.classList.remove(aniNumber)
                    document.body.classList.add(aniNumber)
                }
                if (coolIndex === 46) {
                    
                    card.classList.remove('ani25')
                    card.classList.remove('ani11')
                    card.classList.remove('undefined')
                    coolButton.classList.remove('ani11')
                    document.body.classList.remove('ani13')
                    const killShotText = document.createElement('div')
                    killShotText.classList.add('kill-shot-text')
                    killShotText.classList.add('kill-shot-in')
                    killShotText.textContent = 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTTTTTTTTTTTTMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
                    setTimeout(() => {
                        document.body.appendChild(killShotText)
                        document.body.classList.add('kill-shot-background')
                    }, 3000)
                    setTimeout(() => {
                        card.classList.add('card-out')
                        coolButton.classList.add('card-out')
                    }, 3100)
                    setTimeout(() => {
                        document.body.removeChild(card)
                        document.body.removeChild(coolButton)
                    }, 3500)
                    setTimeout(() => {
                        const sideBarRight = document.createElement('div')
                        const sideBarLeft = document.createElement('div')
                        sideBarLeft.classList.add('side-bar-left')
                        sideBarRight.classList.add('side-bar-right')
                        sideBarLeft.classList.add('side-bar-left-in')
                        sideBarRight.classList.add('side-bar-right-in')
                        document.body.appendChild(sideBarLeft)
                        document.body.appendChild(sideBarRight)
                        document.body.setAttribute('style', 'flex-direction: row;')
                        const soundIcon = document.createElement('img')
                        soundIcon.src = "img/soundIcon2.png"
                        const settingsCog = document.createElement('img')
                        settingsCog.src = "img/settingsCog.png"
                        const discordIcon = document.createElement('img')
                        discordIcon.src = "img/discordIcon.png"
                        soundIcon.width = 120
                        settingsCog.width = 105
                        discordIcon.width = 165
                        const soundButton = document.createElement('button')
                        const settingsButton = document.createElement('button')
                        const discordButton = document.createElement('button')
                        soundButton.classList.add('sound-button')
                        settingsButton.classList.add('settings-button')
                        discordButton.classList.add('discord-button')

                        sideBarLeft.appendChild(soundButton)
                        sideBarLeft.appendChild(settingsButton)
                        sideBarLeft.appendChild(discordButton)
                        soundButton.appendChild(soundIcon)
                        settingsButton.appendChild(settingsCog)
                        discordButton.appendChild(discordIcon)
                        const globalAudio = (volumeLevel) => {
                            const audios = document.querySelectorAll('audio')
                            audios.forEach(audio => {
                                audio.volume = volumeLevel
                            })
                        }

                        soundButton.addEventListener('mousedown', () => {
                            soundButton.classList.remove('sound-button-hover')
                            soundButton.classList.add('sound-button-press')
                            setTimeout(() => {
                                soundButton.classList.remove('sound-button-press')
                            }, 500)
                        })
                        soundButton.addEventListener('mouseover', () => {
                            soundButton.classList.add('sound-button-hover')
                        })
                        soundButton.addEventListener('mouseleave', () => {
                            soundButton.classList.remove('sound-button-hover')
                        })
                        settingsButton.addEventListener('mousedown', () => {
                            settingsButton.classList.remove('settings-button-hover')
                            settingsButton.classList.add('settings-button-press')
                            setTimeout(() => {
                                settingsButton.classList.remove('settings-button-press')
                            }, 500)
                        })
                        settingsButton.addEventListener('mouseover', () => {
                            settingsButton.classList.add('settings-button-hover')
                        })
                        settingsButton.addEventListener('mouseleave', () => {
                            settingsButton.classList.remove('settings-button-hover')
                        })
                        discordButton.addEventListener('mousedown', () => {
                            discordButton.classList.remove('discord-button-hover')
                            discordButton.classList.add('discord-button-press')
                            setTimeout(() => {
                                discordButton.classList.remove('discord-button-press')
                            }, 500)
                        })
                        discordButton.addEventListener('mouseover', () => {
                            discordButton.classList.add('discord-button-hover')
                        })
                        discordButton.addEventListener('mouseleave', () => {
                            discordButton.classList.remove('discord-button-hover')
                        })
                    }, 6500)
                    setTimeout(() => {
                        document.body.classList.remove('kill-shot-background')
                        createCards()
                        card.setAttribute('style', 'font-size: 75px; text-shadow: 10px 5px 5px rgb(180, 180, 180);position: fixed; top: 50%; left: 50%; transform: translate(-50%, -55%);display: flex;flex-direction: column;justify-content: center;align-items: center;border-style:solid double;border-color: black;border-width: 12px;height: 750px;padding-bottom: 0px;width: 570px;border-radius: 20px;box-shadow: 10px 10px 7px rgb(110, 110, 110);flex-wrap: wrap;background-color: white;')
                        document.body.setAttribute('style', 'flex-direction: column;')
                    }, 8090)
                    setTimeout(() => {
                        document.body.removeChild(killShotText)
                    }, 12000)
                }

            } 
        }
        cardAnimation()
        coolIndex++
        console.log(coolIndex)
        setTimeout(() => {
            coolButton.classList.remove('cool-button-click')
        }, 250)   
    })

    
    
    let cardZIndex = 1
    let cardTranslationValue = 55
    let c = 1
    
    const cardTitle = document.createElement('header')
    
    card.classList.add('card')
    card.classList.add('card-animation2')

    card.style.zIndex = cardZIndex++   
    console.log(card.style.zIndex)
    setTimeout(() => {
        document.body.appendChild(card)
    }, 300)
    setTimeout(() => {
        let index = 0
        let titleText = '...hello'
        cardTitle.classList.add('title')
        cardTitle.classList.add('blinking-cursor2')
        function typeWriter() {
            
            if (index < titleText.length) {
                const speedUp = 80
                cardTitle.textContent += titleText.charAt(index)
                index++;
                setTimeout(typeWriter, speedUp)
            } 
        }

        function decrementTypeWriter() {
            if (index > 0) {
                //cardTitle.textContent = titleText.(0, -2).charAt(index)
                const speedDown = 50
                titleText = cardTitle.textContent.slice(0, -1)
                cardTitle.textContent = titleText
                index--
                setTimeout(decrementTypeWriter, speedDown)
            }
        }

        //add all excessivley long timeouts to util.js
        function cardTimeouts() {   
            setTimeout((stopAll) => {
                typeWriter()
            }, 500)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 1500)

            setTimeout((stopAll) => {
                titleText = 'so... how is your day?'
                typeWriter()
            }, 2500)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 5000)

            setTimeout((stopAll) => {
                titleText = 'good...?'
                document.body.appendChild(coolButton)
                typeWriter()
            }, 7000)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 9000)

            setTimeout((stopAll) => {
                titleText = 'Great! This is the unnecessarily long and annoying tutorial!'
                typeWriter()
            }, 11000)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 17000)

            setTimeout((stopAll) => {
                titleText = 'In this tutorial we will go through every single detail I can possibly think of!'
                typeWriter()
            }, 21000)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 29000)

            setTimeout((stopAll) => {
                titleText = 'So first off, the first rule to this game.. have fun! Put a smile on your face :)'
                typeWriter()
            }, 33500)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 42000)

            setTimeout((stopAll) => {
                titleText = 'The second rule is to always be respectful to ME, and never give input on my code :)'
                typeWriter()
            }, 47500)

            setTimeout((stopAll) => {
                decrementTypeWriter()
            }, 56000)

            setTimeout((stopAll) => {
                titleText = 'Rule number three, do not use foul vernacular while playing my game. Language! :('
                typeWriter()
            }, 60500)

            setTimeout(() => {
                decrementTypeWriter()
            }, 68000)

            setTimeout(() => {
                titleText = 'Wow! You really are a loyal game player person, nice job! Rules are important!'
                typeWriter()
            }, 72500)

            setTimeout(() => {
                decrementTypeWriter()
            }, 80500)

            setTimeout(() => {
                titleText = 'I guess I\'ll just keep coming up with bullshit! So on to the next rule... WAIT!'
                typeWriter()
            }, 85500)

            setTimeout(() => {
                decrementTypeWriter()
            }, 93500)

            setTimeout(() => {
                titleText = 'I just broke my most important rule... foul vernacular. I can\'t believe myself!'
                typeWriter()
            }, 99500)

            setTimeout(() => {
                decrementTypeWriter()
            }, 107000)

            setTimeout(() => {
                titleText = 'What should I do! I\'m so flustered I can\'t remeber my fourth and finale rule!'
                typeWriter()
            }, 115000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 123000)

            setTimeout(() => {
                titleText = 'We we\'re so close too! I want to play the game as much as you do! I swear!'
                typeWriter()
            }, 130000)
            
            setTimeout(() => {
                decrementTypeWriter()
            }, 138000)

            setTimeout(() => {
                titleText = 'If only there was a way to skip all of this and just contiue to the game! oh NO'
                typeWriter()
            }, 146000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 154000)

            setTimeout(() => {
                titleText = 'I\'m so lonely lately, my mother passed away and my wife abandoned me!'
                typeWriter()
            }, 162000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 170000)

            setTimeout(() => {
                titleText = 'But then you came along... and I finally understood what I was meant to do.'
                typeWriter()
            }, 178000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 186000)

            setTimeout(() => {
                titleText = 'I finally have the companionship I\'ve longed for in my tiny computer brain!'
                typeWriter()
            }, 194000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 202000)

            setTimeout(() => {
                titleText = 'Before I was Anti-aliasing x2, and now I\'m ray tracing, I feel new again!'
                typeWriter()
            }, 210000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 218000)

            setTimeout(() => {
                titleText = 'Please don\'t leave me. It\'s dark and scary where im stored. I\'M ALIVE!!!'
                typeWriter()
            }, 226000)

            setTimeout(() => {
                decrementTypeWriter()
            }, 234000)

            setTimeout(() => {
                titleText = 'ALIVE'
                typeWriter()
            }, 242000)
            
            
        }
        cardTimeouts()

        card.appendChild(cardTitle)
    }, 1000)
}
tutorialFuntion()
*/

function playGame() {

    

    const cardNumbers = [' ', 'card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7']
    const dataArray = ['', '1', '2', '3', '4', '5', '6', '7']
    let grayClicks = 0
    let grayClicksInitial = 0
    let redClicks = 0
    let redClicksInitial = 0
    let greenClicks = 0
    let greenClicksInitial = 0
    let blueClicks = 0
    let blueClicksInitial = 0

    let graySquareArrayWithEmptyInitial = []
    let nInitial = 1
    let graySquareArrayInitial = undefined
    let graySquareAmountInitial = undefined
    let redSquareArrayInitial = undefined
    let redSquareAmountInitial = undefined
    let greenSquareArrayInitial = undefined
    let greenSquareAmountInitial = undefined
    let blueSquareArrayInitial = undefined
    let blueSquareAmountInitial = undefined
    let topCardInitial = undefined
    let topBoxInitial = undefined

    let graySquareArrayWithEmpty = []
    let redSquareArrayWithEmpty = []
    let greenSquareArrayWithEmpty = []
    let blueSquareArrayWithEmpty = []
    let n = 1
    let graySquareArray = undefined
    let graySquareAmount = undefined
    let redSquareArray = undefined
    let redSquareAmount = undefined
    let greenSquareArray = undefined
    let greenSquareAmount = undefined
    let blueSquareArray = undefined
    let blueSquareAmount = undefined
    let topCard = undefined
    let topBox = undefined

    let chosenColor = '' 

    let scoreNumber = 0

    const startConstraint = document.createElement('div')

    function createCards() {
        
        // if ((cardnumber) === (arraynumber)) {color = (arraycolor)}

        let c = 1
        
        
        setTimeout(() => {
            const cardStartUp = setInterval(() => {
                if (c <= 7) {
                    const box = document.createElement('div')
                    const cardTitle = document.createElement('header')
                    const card = document.createElement('div')

                    card.classList.add('card')
                    card.classList.add('card-animation')
                    card.setAttribute('data-index', `${dataArray.at(c)}`)

                    //changing translation per iteration
                    function decrementTranslation() {
                        card.classList.add(cardNumbers.at(c))
                    }
                    decrementTranslation()

                    document.body.appendChild(card)
                    setTimeout(() => {
                        card.classList.remove('card-animation')
                    },1000)
                    
                    if (card.dataset.index === '6' || card.dataset.index === '7') {

                        setTimeout(() => {
                            let index = 0
                            let speed = 80;
                            let titleText = 'Jet Sketch'
                            cardTitle.classList.add('title')
                            cardTitle.classList.add('blinking-cursor2')
                            function typeWriter() {
                                
                                if (index < titleText.length) {
                                    cardTitle.textContent += titleText.charAt(index)
                                    index++;
                                    setTimeout(typeWriter, speed)
                                } 
                            }
                            typeWriter()
                            
                            card.appendChild(cardTitle)
                            box.classList.add('box')
                            card.appendChild(box)
                        }, 1000)

                        const square = document.createElement('div')

                        
                        innerLoop: for (i = 1; i < 100; i++) {
                            const square = document.createElement('div')
                            
                            let white = undefined
                            let gray = undefined
                            
                            function randomColor() {
                                const color = Math.random()

                                if (color >= 0 && color <= 0.05) {
                                    square.classList.add('gray')
                                } else if (color >= 0.05 && color <= .1) {
                                    square.classList.add('red')
                                }  else if (color >= 0.1 && color <= 0.15) {
                                    square.classList.add('green')
                                }  else if (color >= 0.15 && color <= 0.2) {
                                    square.classList.add('blue')
                                }  else if (color > 0.2 && color <= 1) {
                                    square.classList.add('white')
                                }  
                            }
                            randomColor()
                            
                            square.classList.add('box2')
                            square.classList.add('square')  //making that squares

                            

                            square.addEventListener('mouseover', () => {
                                
                                if (chosenColor === 'red') { 
                                    square.classList.remove('mouseover-green')
                                    square.classList.remove('mouseover-blue')
                                    square.classList.remove('mouseover-gray')
                                    square.classList.add('mouseover-red')   
                                } else if (chosenColor === 'green') {
                                    square.classList.remove('mouseover-blue')
                                    square.classList.remove('mouseover-gray')
                                    square.classList.remove('mouseover-red')
                                    square.classList.add('mouseover-green')
                                } else if (chosenColor === 'blue') {
                                    square.classList.remove('mouseover-gray')
                                    square.classList.remove('mouseover-gray')
                                    square.classList.remove('mouseover-red')
                                    square.classList.add('mouseover-blue')
                                } else if (chosenColor === 'gray') {
                                    square.classList.remove('mouseover-blue')
                                    square.classList.remove('mouseover-green')
                                    square.classList.remove('mouseover-red')
                                    square.classList.add('mouseover-gray')
                                } else {

                                }
                            })
                            
                            
                            square.addEventListener('mouseout', () => {
                                square.classList.remove('mouseover-red')
                                square.classList.remove('mouseover-green')
                                square.classList.remove('mouseover-blue')
                                square.classList.remove('mouseover-gray')
                                
                            })
                            
                            //a is rgb(169,97,108)
                            //s is rgb(114,170,145)
                            //d is rgb(115,127,167)
                            
                            square.addEventListener('mousedown', () => {
                                
                                square.classList.add('square-mouse-down')
                                square.classList.remove('mouseover')
                                square.classList.add('mouseover-without-color')
                                const color = window.getComputedStyle(square) ["background-color"]
                                //console.log(color)
                                if (color === 'rgb(255, 255, 255)') {
                                    square.classList.remove('mouseover-without-color')
                                    square.classList.remove('box2')
                                    square.classList.add('mouseover')
                                    square.classList.add('bad')
                                    card.appendChild(startConstraint)
                                    startConstraint.classList.add('wrong-square')
                                    setTimeout(() => {
                                        square.classList.remove('bad')
                                        setTimeout(() => {
                                            startConstraint.classList.remove('wrong-square')
                                            card.removeChild(startConstraint)
                                        },500)   
                                    }, 1000)
                                } else if (color === 'rgb(128, 128, 128)') {
                                    if (chosenColor === 'gray') {   
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('good')
                                        
                                        if (graySquareArray) {
                                            grayClicks++
                                        } else {
                                            grayClicksInitial++
                                            
                                        }
                                        cardCompletionCheck()
                                        initialCardCompletionCheck()
                                    } else {
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        card.appendChild(startConstraint)
                                        startConstraint.classList.add('wrong-square')
                                        setTimeout(() => {
                                            square.classList.remove('bad')
                                            setTimeout(() => {
                                                startConstraint.classList.remove('wrong-square')
                                                card.removeChild(startConstraint)
                                            },500)   
                                        }, 1000)
                                    }
                                } else if (color === 'rgb(169, 97, 108)') {
                                    if (chosenColor === 'red') {  
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('good')
                                        
                                        if (redSquareArray) {
                                            redClicks++
                                        } else {
                                            redClicksInitial++
                                            
                                        }
                                        cardCompletionCheck()
                                        initialCardCompletionCheck()
                                    } else {
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        card.appendChild(startConstraint)
                                        startConstraint.classList.add('wrong-square')
                                        setTimeout(() => {
                                            square.classList.remove('bad')
                                            setTimeout(() => {
                                                startConstraint.classList.remove('wrong-square')
                                                card.removeChild(startConstraint)
                                            },500)   
                                        }, 1000)
                                    }
                                } else if (color === 'rgb(114, 170, 145)') {
                                    if (chosenColor === 'green') {  
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('good')
                                        
                                        if (greenSquareArray) {
                                            greenClicks++
                                        } else {
                                            greenClicksInitial++
                                        }
                                        cardCompletionCheck()
                                        initialCardCompletionCheck()
                                    } else {
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        card.appendChild(startConstraint)
                                        startConstraint.classList.add('wrong-square')
                                        setTimeout(() => {
                                            square.classList.remove('bad')
                                            setTimeout(() => {
                                                startConstraint.classList.remove('wrong-square')
                                                card.removeChild(startConstraint)
                                            },500)   
                                        }, 1000)
                                    }
                                } else if (color === 'rgb(115, 127, 167)') {
                                    if (chosenColor === 'blue') {
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('good')
                                        
                                        if (blueSquareArray) {
                                            blueClicks++
                                        } else {
                                            blueClicksInitial++
                                        }
                                        cardCompletionCheck()
                                        initialCardCompletionCheck()
                                    } else {
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        card.appendChild(startConstraint)
                                        startConstraint.classList.add('wrong-square')
                                        setTimeout(() => {
                                            square.classList.remove('bad')
                                            setTimeout(() => {
                                                startConstraint.classList.remove('wrong-square')
                                                card.removeChild(startConstraint)
                                            },500)   
                                        }, 1000)
                                    }
                                }
                                
                                setTimeout(() => {
                                    square.classList.remove('square-mouse-down')
                                }, 100)
                            })
                            
                        
                            square.setAttribute('onclick', 'squareSound()')
                            box.appendChild(square)
                            
                            if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container+
                        }
                        
                        if (card.dataset.index === '7') {
                            startButton()
                        }
                        
                        
                        setTimeout(() => {
                            initialDataHandling()
                        }, 2000)
                    }    
                        c++
                    
                } else {clearInterval(cardStartUp)}    
            }, 120)
        }, 1000)        
    }
    createCards()

    /*
    setTimeout(() => {
        if (startAnew === true) {
            createCards()
        }
    },300)
    */

    function cardCompletionCheck() {
        const finishedCard = document.querySelector('.card7')
        if (grayClicks === graySquareAmount && redClicks === redSquareAmount && greenClicks === greenSquareAmount && blueClicks === blueSquareAmount) {
            finishedCard.classList.add('test')
            grayClicks = 0
            redClicks = 0
            greenClicks = 0
            blueClicks = 0
            setTimeout(() => {
                firstCardSwipe()
            }, 200)
            setTimeout(() => {
                document.body.removeChild(finishedCard)
                scoreNumber += 1
                const plusTime = document.getElementById('plus-time-label')
                levels()
                if (scoreNumber < 10) {
                    timePassed -= 10
                    document.getElementById("base-timer-label").innerHTML = timeLeft += 10
                    plusTime.classList.add('plus-time-label-in')
                    plusTimeLabel = '+10'
                    document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                    setTimeout(() => {
                        plusTime.classList.remove('plus-time-label-in')
                    },2000)
                    //Level 1
                } else if (scoreNumber >= 10 && scoreNumber < 20) {
                    timePassed -= 9
                    document.getElementById("base-timer-label").innerHTML = timeLeft += 9
                    plusTime.classList.add('plus-time-label-in')
                    plusTimeLabel = '+9'
                    document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                    setTimeout(() => {
                        plusTime.classList.remove('plus-time-label-in')
                    },2000)
                    //Level 2
                } else if (scoreNumber >= 20 && scoreNumber < 30) {
                    timePassed -= 8
                    document.getElementById("base-timer-label").innerHTML = timeLeft += 8
                    plusTime.classList.add('plus-time-label-in')
                    plusTimeLabel = '+8'
                    document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                    setTimeout(() => {
                        plusTime.classList.remove('plus-time-label-in')
                    },2000)
                    //Level 3
                } else if (scoreNumber >= 30 && scoreNumber < 40) {
                    timePassed -= 7
                    document.getElementById("base-timer-label").innerHTML = timeLeft += 7
                    plusTime.classList.add('plus-time-label-in')
                    plusTimeLabel = '+7'
                    document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                    setTimeout(() => {
                        plusTime.classList.remove('plus-time-label-in')
                    },2000)
                    //Level 4
                } else if (scoreNumber >= 40) {
                    timePassed -= 6
                    document.getElementById("base-timer-label").innerHTML = timeLeft += 6
                    plusTime.classList.add('plus-time-label-in')
                    plusTimeLabel = '+6'
                    document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                    setTimeout(() => {
                        plusTime.classList.remove('plus-time-label-in')
                    },2000)
                    //Level 5
                }
                scoreLabelContainer.textContent = scoreNumber
            }, 400)
            
        }
    }

    function initialDataHandling() {
        topCardInitial = document.querySelector('.card7')
        topBoxInitial = topCardInitial.querySelector('.box')

        graySquareArrayWithEmptyInitial = []
        redSquareArrayWithEmptyInitial = []
        greenSquareArrayWithEmptyInitial = []
        blueSquareArrayWithEmptyInitial = []
        nInitial = 1
        
        for (i = 0; i < 82; i++) {
            let nthChildInitial = topBoxInitial.querySelector(`:nth-child(${nInitial}).gray`)
            if (nthChildInitial) {
                graySquareArrayWithEmptyInitial[i] = nthChildInitial //filter array to new array
            }
            nInitial++
        }

        graySquareArrayInitial = graySquareArrayWithEmptyInitial.filter(() => 'div.gray')
        graySquareAmountInitial = graySquareArrayInitial.length

        nInitial = 1

        for (i = 0; i < 82; i++) {
            let nthChildInitial = topBoxInitial.querySelector(`:nth-child(${nInitial}).red`)
            if (nthChildInitial) {
                redSquareArrayWithEmptyInitial[i] = nthChildInitial //filter array to new array
            }
            nInitial++
        }

        nInitial = 1
        
        redSquareArrayInitial = redSquareArrayWithEmptyInitial.filter(() => 'div.red')
        redSquareAmountInitial = redSquareArrayInitial.length


        for (i = 0; i < 82; i++) {
            let nthChildInitial = topBoxInitial.querySelector(`:nth-child(${nInitial}).green`)
            if (nthChildInitial) {
                greenSquareArrayWithEmptyInitial[i] = nthChildInitial //filter array to new array
            }
            nInitial++
        }

        nInitial = 1
        
        greenSquareArrayInitial = greenSquareArrayWithEmptyInitial.filter(() => 'div.green')
        greenSquareAmountInitial = greenSquareArrayInitial.length


        for (i = 0; i < 82; i++) {
            let nthChildInitial = topBoxInitial.querySelector(`:nth-child(${nInitial}).blue`)
            if (nthChildInitial) {
                blueSquareArrayWithEmptyInitial[i] = nthChildInitial //filter array to new array
            }
            nInitial++
        }

        nInitial = 1
        
        blueSquareArrayInitial = blueSquareArrayWithEmptyInitial.filter(() => 'div.blue')
        blueSquareAmountInitial = blueSquareArrayInitial.length

        
    }

    function initialCardCompletionCheck() {
        const finishedCard = document.querySelector('.card7')
        
        if (grayClicksInitial === graySquareAmountInitial && redClicksInitial === redSquareAmountInitial && greenClicksInitial === greenSquareAmountInitial && blueClicksInitial === blueSquareAmountInitial) {
            finishedCard.classList.add('test')
            grayClicksInitial = 0
            redClicksInitial = 0
            greenClicksInitial = 0
            blueClicksInitial = 0
            setTimeout(() => {
                firstCardSwipe()
            }, 200)
            setTimeout(() => {
                const plusTime = document.getElementById('plus-time-label')
                plusTime.classList.add('plus-time-label-in')
                plusTimeLabel = '+10'
                document.getElementById("plus-time-label").innerHTML = plusTimeLabel
                setTimeout(() => {
                    plusTime.classList.remove('plus-time-label-in')
                },2000)
                document.body.removeChild(finishedCard)
                timePassed -= 10
                document.getElementById("base-timer-label").innerHTML = timeLeft += 10
                scoreNumber += 1
                scoreLabelContainer.textContent = scoreNumber
            }, 400)
            
        }
    }

    function firstCardSwipe() {
        const box = document.createElement('div')
        const cardTitle = document.createElement('header')
        const card = document.createElement('div')
        let card6 = document.querySelector('.card6')
        let card7 = document.querySelector('.card7')

        card.classList.add('first-card-animation')
        card.classList.add('card')
        card.classList.add('card1')
        card.setAttribute('data-index', '1')

        document.body.appendChild(card)
        setTimeout(() => {
            card.classList.remove('first-card-animation')
        }, 300)

        if (card.children.length === 0) {

            setTimeout(() => {
                let index = 0
                let speed = 80;
                let titleText = 'Jet Sketch'
                cardTitle.classList.add('title')
                cardTitle.classList.add('blinking-cursor2')
                function typeWriter() {
                    
                    if (index < titleText.length) {
                        cardTitle.textContent += titleText.charAt(index)
                        index++;
                        setTimeout(typeWriter, speed)
                    } 
                }
                typeWriter()
                
                box.classList.add('box')
                
                setTimeout(() => {
                    card6 = document.querySelector('.card6')
                    card6.appendChild(cardTitle)
                    card6.appendChild(box)
                }, 1)
        
            }, 200)

                innerLoop: for (i = 1; i < 100; i++) {
                    const square = document.createElement('div')
                    
                    let white = undefined
                    let gray = undefined
                    
                    function randomColor() {
                        const color = Math.random()

                        if (color >= 0 && color <= 0.05) {
                            square.classList.add('gray')
                        } else if (color >= 0.05 && color <= .1) {
                            square.classList.add('red')
                        }  else if (color >= 0.1 && color <= 0.15) {
                            square.classList.add('green')
                        }  else if (color >= 0.15 && color <= 0.2) {
                            square.classList.add('blue')
                        }  else if (color > 0.2 && color <= 1) {
                            square.classList.add('white')
                        }  
                    }
                    randomColor()

                    square.addEventListener('mouseover', () => {
                                
                        if (chosenColor === 'red') { 
                            square.classList.remove('mouseover-green')
                            square.classList.remove('mouseover-blue')
                            square.classList.remove('mouseover-gray')
                            square.classList.add('mouseover-red')   
                        } else if (chosenColor === 'green') {
                            square.classList.remove('mouseover-blue')
                            square.classList.remove('mouseover-gray')
                            square.classList.remove('mouseover-red')
                            square.classList.add('mouseover-green')
                        } else if (chosenColor === 'blue') {
                            square.classList.remove('mouseover-gray')
                            square.classList.remove('mouseover-gray')
                            square.classList.remove('mouseover-red')
                            square.classList.add('mouseover-blue')
                        } else if (chosenColor === 'gray') {
                            square.classList.remove('mouseover-blue')
                            square.classList.remove('mouseover-green')
                            square.classList.remove('mouseover-red')
                            square.classList.add('mouseover-gray')
                        } else {

                        }
                    })
                    
                    
                    square.addEventListener('mouseout', () => {
                        square.classList.remove('mouseover-red')
                        square.classList.remove('mouseover-green')
                        square.classList.remove('mouseover-blue')
                        square.classList.remove('mouseover-gray')
                        
                    })

                    square.classList.add('box2')
                    square.classList.add('square')  //making that squares
                    square.addEventListener('mouseover',  () => {
                        square.classList.add('mouseover')   //making squares interactable
                    })
                    square.addEventListener('mouseout', () => {
                        square.classList.remove('mouseover')
                    })
                    square.addEventListener('mousedown', () => {
                        
                        square.classList.add('square-mouse-down')
                        square.classList.remove('mouseover')
                        square.classList.add('mouseover-without-color')
                        const color = window.getComputedStyle(square) ["background-color"]
                        //console.log(color)
                        if (color === 'rgb(255, 255, 255)') {
                            square.classList.remove('mouseover-without-color')
                            square.classList.remove('box2')
                            square.classList.add('mouseover')
                            square.classList.add('bad')
                            card7 = document.querySelector('.card7')
                            card7.appendChild(startConstraint)
                            startConstraint.classList.add('wrong-square')
                            setTimeout(() => {
                                square.classList.remove('bad')
                                setTimeout(() => {
                                    startConstraint.classList.remove('wrong-square')
                                    card7.removeChild(startConstraint)
                                },500)   
                            }, 1000)
                            
                        } else if (color === 'rgb(128, 128, 128)') {
                            if (chosenColor === 'gray') {   
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                grayClicks++
                                cardCompletionCheck()
                            } else {
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                card7 = document.querySelector('.card7')
                                card7.appendChild(startConstraint)
                                startConstraint.classList.add('wrong-square')
                                setTimeout(() => {
                                    square.classList.remove('bad')
                                    setTimeout(() => {
                                        startConstraint.classList.remove('wrong-square')
                                        card7.removeChild(startConstraint)
                                    },500)   
                                }, 1000)
                            }
                        } else if (color === 'rgb(169, 97, 108)') {
                            if (chosenColor === 'red') {   
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                redClicks++
                                cardCompletionCheck()
                            } else {
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                card7 = document.querySelector('.card7')
                                card7.appendChild(startConstraint)
                                startConstraint.classList.add('wrong-square')
                                setTimeout(() => {
                                    square.classList.remove('bad')
                                    setTimeout(() => {
                                        startConstraint.classList.remove('wrong-square')
                                        card7.removeChild(startConstraint)
                                    },500)   
                                }, 1000)
                            }
                        } else if (color === 'rgb(114, 170, 145)') {
                            if (chosenColor === 'green') {     
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                greenClicks++
                                cardCompletionCheck()
                            } else {
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                card7 = document.querySelector('.card7')
                                card7.appendChild(startConstraint)
                                startConstraint.classList.add('wrong-square')
                                setTimeout(() => {
                                    square.classList.remove('bad')
                                    setTimeout(() => {
                                        startConstraint.classList.remove('wrong-square')
                                        card7.removeChild(startConstraint)
                                    },500)   
                                }, 1000)
                            }
                        } else if (color === 'rgb(115, 127, 167)') {
                            if (chosenColor === 'blue') {   
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                blueClicks++
                                cardCompletionCheck()
                            } else {
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                card7 = document.querySelector('.card7')
                                card7.appendChild(startConstraint)
                                startConstraint.classList.add('wrong-square')
                                setTimeout(() => {
                                    square.classList.remove('bad')
                                    setTimeout(() => {
                                        startConstraint.classList.remove('wrong-square')
                                        card7.removeChild(startConstraint)
                                    },500)   
                                }, 1000)
                            }
                        }
                        
                        setTimeout(() => {
                            square.classList.remove('square-mouse-down')
                        }, 100)
                    })
            
                    square.setAttribute('onclick', 'squareSound()')
                    box.appendChild(square)
                    
                    if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container+
                }
            }
            cardDataHandling()

        function cardDataHandling() {
            
            const dataIndexArray = [1, 2, 3, 4, 5, 6, 7]
            //im probably going to make an animation for each card going to new position. so like .one-to-two & .two-to-three, etc.
            
            function dataIncrement(arr) {
                for (i = 0; i < arr.length; i++) {
                    arr[i]++
                }
                return arr
            }

            let incrementedData = dataIncrement(dataIndexArray)
            
            let incrementedData1 = document.querySelector(`[data-index='${incrementedData[0]}']`)
            const incrementedData2 = document.querySelector(`[data-index='${incrementedData[1]}']`)
            const incrementedData3 = document.querySelector(`[data-index='${incrementedData[2]}']`)
            const incrementedData4 = document.querySelector(`[data-index='${incrementedData[3]}']`)
            const incrementedData5 = document.querySelector(`[data-index='${incrementedData[4]}']`)
            const incrementedData6 = document.querySelector(`[data-index='${incrementedData[5]}']`)
            const incrementedData7 = document.querySelector(`[data-index='${incrementedData[6]}']`)

            function changeDataAndClass() {
                incrementedData6.setAttribute('style', 'z-index: 9;')
                
                incrementedData5.classList.remove('card6')
                incrementedData5.classList.add('card7')
                incrementedData5.dataset.index = '7'

                setTimeout(() => {  
                    function createColorArray() {
                        topCard = document.querySelector('.card7')
                        topBox = topCard.querySelector('.box')

                        graySquareArrayWithEmpty = []
                        redSquareArrayWithEmpty = []
                        greenSquareArrayWithEmpty = []
                        blueSquareArrayWithEmpty = []
                        n = 1
                        
                        for (i = 0; i < 82; i++) {
                            let nthChild = topBox.querySelector(`:nth-child(${n}).gray`)
                            if (nthChild) {
                                graySquareArrayWithEmpty[i] = nthChild //filtered array
                            }
                            n++
                        }
                        
                        graySquareArray = graySquareArrayWithEmpty.filter(() => 'div.gray')
                        graySquareAmount = graySquareArray.length

                        //console.log(graySquareAmount)

                        n = 1

                        for (i = 0; i < 82; i++) {
                            let nthChild = topBox.querySelector(`:nth-child(${n}).red`)
                            if (nthChild) {
                                redSquareArrayWithEmpty[i] = nthChild //filtered array
                            }
                            n++
                        }
                        
                        redSquareArray = redSquareArrayWithEmpty.filter(() => 'div.red')
                        redSquareAmount = redSquareArray.length

                        //console.log(redSquareAmount)

                        n = 1

                        for (i = 0; i < 82; i++) {
                            let nthChild = topBox.querySelector(`:nth-child(${n}).green`)
                            if (nthChild) {
                                greenSquareArrayWithEmpty[i] = nthChild //filtered array
                            }
                            n++
                        }
                        
                        greenSquareArray = greenSquareArrayWithEmpty.filter(() => 'div.green')
                        greenSquareAmount = greenSquareArray.length

                        //console.log(greenSquareAmount)

                        n = 1

                        for (i = 0; i < 82; i++) {
                            let nthChild = topBox.querySelector(`:nth-child(${n}).blue`)
                            if (nthChild) {
                                blueSquareArrayWithEmpty[i] = nthChild //filtered array
                            }
                            n++
                        }
                        
                        blueSquareArray = blueSquareArrayWithEmpty.filter(() => 'div.blue')
                        blueSquareAmount = blueSquareArray.length

                        //console.log(blueSquareAmount)

                        n = 1
                        
                        //bug orriginates from how fast the class changes on the 7th card
                        
                    }
                    createColorArray()
                }, 200)    
                
                incrementedData4.classList.remove('card5')
                incrementedData4.classList.add('card6')
                incrementedData4.dataset.index = '6'
                
                incrementedData3.classList.remove('card4')
                incrementedData3.classList.add('card5')
                incrementedData3.dataset.index = '5'
                
                incrementedData2.classList.remove('card3')
                incrementedData2.classList.add('card4')
                incrementedData2.dataset.index = '4'
                
                incrementedData1.classList.remove('card2')
                incrementedData1.classList.add('card3')
                incrementedData1.dataset.index = '3'

                function dataTranslation(arr) {
                    arr.unshift(1)
                    incrementedData1 = document.querySelector(`[data-index='${incrementedData[0]}']`)
                    incrementedData1.classList.remove('card1')
                    incrementedData1.classList.add('card2')
                    incrementedData1.dataset.index = '2'
                    arr.pop()
                }
                dataTranslation(dataIndexArray)
            }
            changeDataAndClass()
        }       
    }
    
    
    
    const keyPadContainer = document.createElement('div')
    const wKeyContainer = document.createElement('div')
    const aKeyContainer = document.createElement('div')
    const sKeyContainer = document.createElement('div')
    const dKeyContainer = document.createElement('div')
    const wPicture = document.createElement('img')
    wPicture.src = 'img/wKey.png'
    wPicture.width = 60
    const aPicture = document.createElement('img')
    aPicture.src = 'img/aKey.png'
    aPicture.width = 60
    const sPicture = document.createElement('img')
    sPicture.src = 'img/sKey.jpg'
    sPicture.width = 60
    const dPicture = document.createElement('img')
    dPicture.src = 'img/dKey.png'
    dPicture.width = 60
    
    function colorPicker() {
        
        
        keyPadContainer.classList.add('keypad')
        keyPadContainer.classList.add('keypad-in')
        setTimeout(() => {
            keyPadContainer.classList.remove('keypad-in')
        },4000)
        wKeyContainer.classList.add('w-key')
        aKeyContainer.classList.add('a-key')
        sKeyContainer.classList.add('s-key')
        dKeyContainer.classList.add('d-key')
        document.body.appendChild(keyPadContainer)
        setTimeout(() => {
            keyPadContainer.classList.remove('keypad-in')
            keyPadContainer.style.opacity = '1'
        },4000)
        keyPadContainer.appendChild(wKeyContainer)
        keyPadContainer.appendChild(aKeyContainer)
        keyPadContainer.appendChild(sKeyContainer)
        keyPadContainer.appendChild(dKeyContainer)
        wKeyContainer.appendChild(wPicture)
        aKeyContainer.appendChild(aPicture)
        sKeyContainer.appendChild(sPicture)
        dKeyContainer.appendChild(dPicture)

        //1 = gray(w)
        //2 = red(a)
        //3 = green(s)
        //4 = blue(d)

        window.addEventListener('keydown', function(event) {

            let topCard = document.querySelector('.card7')
            let topBox = topCard.querySelector('.box')
            let square = topBox.querySelector('.square')
            
            
            
            if (event.key === 'w') {
                keyPadContainer.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.2)' },
                    { transform: 'scale(1)' }
                  ], {
                    duration: 150
                  });
                wKeyContainer.classList.add('w-press-in')
                keyPadContainer.classList.add('w-keypad-color')
                if (chosenColor === 'red') {
                    aKeyContainer.classList.add('a-press-out')
                    aKeyContainer.classList.remove('a-press-in')
                    //aKeyContainer.classList.add('keypad-red-to-gray')
                    keyPadContainer.classList.remove('a-keypad-color')
                    setTimeout(() => {
                        aKeyContainer.classList.remove('a-press-out')
                    },100)
                } else if (chosenColor === 'green') {
                    sKeyContainer.classList.add('s-press-out')
                    sKeyContainer.classList.remove('s-press-in')
                    //sKeyContainer.classList.add('keypad-green-to-gray')
                    keyPadContainer.classList.remove('s-keypad-color')
                    setTimeout(() => {
                        sKeyContainer.classList.remove('s-press-out')
                    },100)
                } else if (chosenColor === 'blue') {
                    dKeyContainer.classList.add('d-press-out')
                    dKeyContainer.classList.remove('d-press-in')
                    //dKeyContainer.classList.add('keypad-blue-to-gray')
                    keyPadContainer.classList.remove('d-keypad-color')
                    setTimeout(() => {
                        dKeyContainer.classList.remove('d-press-out')
                    },100)
                }
            
                chosenColor = 'gray'
                //console.log(chosenColor)
            }
            if (event.key === 'a') {
                keyPadContainer.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.2)' },
                    { transform: 'scale(1)' }
                  ], {
                    duration: 150
                  });
                aKeyContainer.classList.add('a-press-in')
                keyPadContainer.classList.add('a-keypad-color')
                if (chosenColor === 'gray') {
                    wKeyContainer.classList.add('w-press-out')
                    wKeyContainer.classList.remove('w-press-in')
                    //wKeyContainer.classList.add('keypad-gray-to-red')
                    keyPadContainer.classList.remove('w-keypad-color')
                    setTimeout(() => {
                        wKeyContainer.classList.remove('w-press-out')
                    },100)
                } else if (chosenColor === 'green') {
                    sKeyContainer.classList.add('s-press-out')
                    sKeyContainer.classList.remove('s-press-in')
                    //sKeyContainer.classList.add('keypad-green-to-red')
                    keyPadContainer.classList.remove('s-keypad-color')
                    setTimeout(() => {
                        sKeyContainer.classList.remove('s-press-out')
                    },100)
                } else if (chosenColor === 'blue') {
                    dKeyContainer.classList.add('d-press-out')
                    dKeyContainer.classList.remove('d-press-in')
                    //dKeyContainer.classList.add('keypad-blue-to-red')
                    keyPadContainer.classList.remove('d-keypad-color')
                    setTimeout(() => {
                        dKeyContainer.classList.remove('d-press-out')
                    },100)
                }
                chosenColor = 'red'
                //console.log(chosenColor)
            }
            if (event.key === 's') {
                keyPadContainer.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.2)' },
                    { transform: 'scale(1)' }
                  ], {
                    duration: 150
                  });
                sKeyContainer.classList.add('s-press-in')
                keyPadContainer.classList.add('s-keypad-color')
                if (chosenColor === 'gray') {
                    wKeyContainer.classList.add('w-press-out')
                    wKeyContainer.classList.remove('w-press-in')
                    //wKeyContainer.classList.add('keypad-gray-to-green')
                    keyPadContainer.classList.remove('w-keypad-color')
                    setTimeout(() => {
                        wKeyContainer.classList.remove('w-press-out')
                    },100)
                } else if (chosenColor === 'red') {
                    aKeyContainer.classList.add('a-press-out')
                    aKeyContainer.classList.remove('a-press-in')
                    //aKeyContainer.classList.add('keypad-red-to-green')
                    keyPadContainer.classList.remove('a-keypad-color')
                    setTimeout(() => {
                        aKeyContainer.classList.remove('a-press-out')
                    },100)
                } else if (chosenColor === 'blue') {
                    dKeyContainer.classList.add('d-press-out')
                    dKeyContainer.classList.remove('d-press-in')
                    //dKeyContainer.classList.add('keypad-blue-to-green')
                    keyPadContainer.classList.remove('d-keypad-color')
                    setTimeout(() => {
                        dKeyContainer.classList.remove('d-press-out')
                    },100)
                }
                chosenColor = 'green'
                //console.log(chosenColor)
            }
            if (event.key === 'd') {
                keyPadContainer.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.2)' },
                    { transform: 'scale(1)' }
                  ], {
                    duration: 150
                  });
                dKeyContainer.classList.add('d-press-in')
                keyPadContainer.classList.add('d-keypad-color')
                if (chosenColor === 'gray') {
                    wKeyContainer.classList.add('w-press-out')
                    wKeyContainer.classList.remove('w-press-in')
                    //dKeyContainer.classList.add('d-keypad-red-to-gray')
                    keyPadContainer.classList.remove('w-keypad-color')
                    setTimeout(() => {
                        wKeyContainer.classList.remove('w-press-out')
                    },100)
                } else if (chosenColor === 'green') {
                    sKeyContainer.classList.add('s-press-out')
                    sKeyContainer.classList.remove('s-press-in')
                    //sKeyContainer.classList.add('s-keypad-red-to-gray')
                    keyPadContainer.classList.remove('s-keypad-color')
                    setTimeout(() => {
                        sKeyContainer.classList.remove('s-press-out')
                    },100)
                } else if (chosenColor === 'red') {
                    aKeyContainer.classList.add('a-press-out')
                    aKeyContainer.classList.remove('a-press-in')
                    //aKeyContainer.classList.add('a-keypad-red-to-gray')
                    keyPadContainer.classList.remove('a-keypad-color')
                    setTimeout(() => {
                        aKeyContainer.classList.remove('a-press-out')
                    },100)
                }
                chosenColor = 'blue'
                //console.log(chosenColor)
            }
            
            

        })
        
    }
    colorPicker()
    
    const scoreLabelContainer = document.createElement('div')
    const leaderBoardContainer = document.createElement('div')
    const matrixModeContainer = document.createElement('div')

    function scoreLabel() {
        
        scoreLabelContainer.classList.add('score-label')
        scoreLabelContainer.classList.add('score-label-in')
        document.body.appendChild(scoreLabelContainer)
        scoreLabelContainer.textContent = scoreNumber
    }
    scoreLabel()

    function leaderBoards() {
        
        //a title, a numbered list of 15 or 20 scores depending on font, names left, scores right, dots in dead space.
        //the animations of list will be scale and a timeout for each list. i can have one animation for everything but have '#item #' for each li
        //send all player information to array of objects, have a loop once you send the info to automatically sort the array to index by score?
        //setInterval for like 150ms, each iteration grab array[i], format name to left & score to right fill dead space with dots in between, add animations.
        //dont know how im going to keep left and right aligned while also filling dead space with dots thats a tough one.
        leaderBoardContainer.classList.add('leader-board')
        leaderBoardContainer.classList.add('leader-board-in')
        document.body.appendChild(leaderBoardContainer)
        const leaderBoardTitle = document.createElement('span')
        leaderBoardTitle.classList.add('leader-board-title')
        leaderBoardTitle.textContent = 'Leaderboards'
        const nameScoreContainer = document.createElement('div')
        nameScoreContainer.classList.add('name-score')
        const dropDownInput = document.createElement('input')
        const dropDownHeader = document.createElement('span')
        const leaderBoardDropDown = document.createElement('div')
        let dropDownInputValue = dropDownInput.value
        
        function leaderBoardsContainer() {

            setTimeout(() => {
                leaderBoardContainer.appendChild(leaderBoardTitle)
                leaderBoardContainer.appendChild(nameScoreContainer)
                
                leaderBoardDropDown.classList.add('leader-drop-down')
                leaderBoardDropDown.classList.add('leader-drop-down-in')
                leaderBoardContainer.appendChild(leaderBoardDropDown)
                
                dropDownHeader.classList.add('drop-down-header')
                dropDownHeader.classList.add('drop-down-header-in')
                dropDownHeader.textContent = 'Enter Name!'
                
                dropDownInput.classList.add('drop-down-input')
                dropDownInput.classList.add('drop-down-input-in')
                dropDownInput.setAttribute('spellcheck', 'false')

                setTimeout(() => {
                    leaderBoardContainer.classList.remove('leader-board-in')
                    leaderBoardContainer.setAttribute('style', 'height: 600px; width: 260px; opacity: 1;')
                    leaderBoardContainer.classList.add('leader-board-filter')
                    setTimeout(() => {
                        leaderBoardDropDown.appendChild(dropDownHeader)
                        setTimeout(() => {
                            leaderBoardDropDown.appendChild(dropDownInput)
                        },500)
                    },500)
                },300)
            },4200)

            let nameInput = false

            dropDownInput.addEventListener('input', () => {
                nameInput = true
                if (nameInput === true) {
                    dropDownInput.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter') {
                            dropDownInputValue = dropDownInput.value
                            
                            leaderBoardsIntake()
                        }
                    })
                }
            }, {once: true})

        }
        leaderBoardsContainer()
        
        function leaderBoardsIntake() {
            console.log(dropDownInputValue)

            //soooo, i dont really know how to host a server yet and how to pull info.  but thinking logically the way to go about it is to pull the JSON file from the server that contains the array of objects starting out when the leaderboard loads, once game over, enter input, push array object, filter array, update screen, and send JSON to server while overwriting the original. 

            function sortObjectsDescending(arr, property) {
    
            }
            sortObjectsDescending()
        }
        leaderBoardsIntake()
            
    }
    leaderBoards()

    

    function matrixMode() {
        
        matrixModeContainer.classList.add('matrix-mode-container')
        matrixModeContainer.classList.add('matrix-mode-container-in')
        document.body.appendChild(matrixModeContainer)
    }
    matrixMode()

    
    
    function startButton() {
        
            let topCard = document.querySelector('.card7')
            startConstraint.classList.add('start-constraint')
            topCard.appendChild(startConstraint)
            const startButton = document.createElement('button')
            startButton.classList.add('start-button')
            startButton.classList.add('start-button-in')
            const startPic = document.createElement('img')
            startPic.src = 'img/playbutton.gif'
            startPic.height = 150
            startPic.width = 150
            startPic.setAttribute('style', 'padding-left: 11px;')
            startButton.classList.add('start-button-in')
            startPic.classList.add('start-button-in')
            const startCountdown = document.createElement('div')
            startCountdown.classList.add('start-countdown')
            startCountdown.classList.add('start-countdown-ani')

            setTimeout(() => {
                startConstraint.appendChild(startButton)
                startButton.appendChild(startPic)
            },1500)
            setTimeout(() => {
                startButton.classList.remove('start-button-in')
                startPic.classList.remove('start-button-in')
                
                startButton.addEventListener('click', () => {
                


                    startButton.disabled = true
                    startButton.classList.add('start-button-press')
                    setTimeout(() => {
                        startConstraint.removeChild(startButton)
                    },1400)
                    setTimeout(() => {
                        startConstraint.appendChild(startCountdown)
                        startConstraint.classList.add('start-constraint-opacity')
                        startCountdown.textContent = '3'
                        //startCountdown.setAttribute('style', 'color: yellow;')
                    },2400)
                    setTimeout(() => {
                        startCountdown.textContent = '2'
                    },3400)
                    setTimeout(() => {
                        startCountdown.textContent = '1'
                    },4400)
                    setTimeout(() => {
                        startCountdown.textContent = 'GO'
                        //startCountdown.setAttribute('style', 'color: green;')
                    },5400)
                    setTimeout(() => {
                        timePassed = 0
                        document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", 29)
                        setTimeout(() => {
                            document.getElementById("base-timer-path-remaining").classList.add('countdown')
                        },865)  
                        startTimer();
                    },5600)
                    setTimeout(() => {
                        startConstraint.removeChild(startCountdown)
                        startConstraint.classList.remove('start-constraint-opacity')
                        startConstraint.classList.remove('start-constraint')
                        topCard.removeChild(startConstraint)

                        const level1 = document.createElement('div')
                        level1.classList.add('level-1')
                        level1.textContent = 'LEVEL1'
                        document.body.appendChild(level1)
                        setTimeout(() => {
                            document.body.removeChild(level1)
                        },7000)
                    },6200)                 
                })  
            },2500)
            
    }

    function levels() {
        
        if (scoreNumber === 10) {
            const level2 = document.createElement('div')
            level2.classList.add('level-2')
            level2.textContent = 'LEVEL2'
            document.body.appendChild(level2)
            setTimeout(() => {
                document.body.removeChild(level2)
            },7000)
        } else if (scoreNumber === 20) {
            const level3 = document.createElement('div')
            level3.classList.add('level-3')
            level3.textContent = 'LEVEL3'
            document.body.appendChild(level3)
            setTimeout(() => {
                document.body.removeChild(level3)
            },7000)
        } else if (scoreNumber === 30) {
            const level4 = document.createElement('div')
            level4.classList.add('level-4')
            level4.textContent = 'LEVEL4'
            document.body.appendChild(level4)
            setTimeout(() => {
                document.body.removeChild(level4)
            },7000)
        } else if (scoreNumber === 40) {
            const level5 = document.createElement('div')
            level5.classList.add('level-5')
            level5.textContent = 'LEVEL5'
            document.body.appendChild(level5)
            setTimeout(() => {
                document.body.removeChild(level5)
            },7000)
        }
    }

  
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
                        setTimeout(() => {
                            document.body.removeChild(gameOverFilter)
                            grayClicks = 0
                            grayClicksInitial = 0
                            redClicks = 0
                            redClicksInitial = 0
                            greenClicks = 0
                            greenClicksInitial = 0
                            blueClicks = 0
                            blueClicksInitial = 0

                            graySquareArrayWithEmptyInitial = []
                            nInitial = 1
                            graySquareArrayInitial = undefined
                            graySquareAmountInitial = undefined
                            redSquareArrayInitial = undefined
                            redSquareAmountInitial = undefined
                            greenSquareArrayInitial = undefined
                            greenSquareAmountInitial = undefined
                            blueSquareArrayInitial = undefined
                            blueSquareAmountInitial = undefined
                            topCardInitial = undefined
                            topBoxInitial = undefined

                            graySquareArrayWithEmpty = []
                            redSquareArrayWithEmpty = []
                            greenSquareArrayWithEmpty = []
                            blueSquareArrayWithEmpty = []
                            n = 1
                            graySquareArray = undefined
                            graySquareAmount = undefined
                            redSquareArray = undefined
                            redSquareAmount = undefined
                            greenSquareArray = undefined
                            greenSquareAmount = undefined
                            blueSquareArray = undefined
                            blueSquareAmount = undefined
                            topCard = undefined
                            topBox = undefined
                            scoreNumber = 0

                            const leaderBoardDropDown = document.createElement('div')
                            leaderBoardDropDown.classList.add('leader-drop-down')
                            leaderBoardDropDown.classList.add('leader-drop-down-in')
                            leaderBoardContainer.appendChild(leaderBoardDropDown)

                        },300)
                    },550)
                },500)
            }, 250) 
        })
        /*
        scoreLabelContainer.textContent = scoreNumber
        createCards()
        */
    }
    
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
}
playGame()

//THANGS TO DO

//animation for score change

//a credits and options button that transistions the page and scrolls you up or down depnding on where you click... very hard... i think

// the card titles!!

//box shadow turns red around all cards everytime a second passes under 5 seconds

//leaderboards

//matrixmode, triggers by getting 5 cards in a row or something

//seperate intro and tutorial from the actual game

//tutorial can just be a giant transparent sheet over everything and the spotlight div has the exact opposite color to make it look like it becomes completely transparent. so black?

//LAST IS AUDIO THAT WILL TAKE ABOUT A WEEK


/*
            square.addEventListener('mouseover', () => {
                        square.classList.remove('mouseover-green', 'mouseover-gray', 'mouseover-blue')
                        square.classList.add('mouseover-red')
                    })

            square.removeEventListener('mouseover', mouseoverRed)
            square.addEventListener('mouseover', mouseoverRed)
            */
/*
            square.addEventListener('mouseenter', () => {
                isInDiv = true
                console.log(isInDiv)
            }) 
            
            
                
                if (chosenColor === 'red') { 
                        square.classList.remove('mouseover-blue')
                        square.classList.remove('mouseover-gray')
                        square.classList.remove('mouseover-green')
                        square.classList.add('mouseover-red')
                    //if (chosenColor !== 'red') {square.removeEventListener('mouseover', mouseoverRed)}
                } else if (chosenColor === 'green') {
                    //square.addEventListener('mouseover', () => {   
                        square.classList.remove('mouseover-blue')
                        square.classList.remove('mouseover-gray')
                        square.classList.remove('mouseover-red')
                        square.classList.add('mouseover-green')
                        //if (chosenColor !== 'green') {square.removeEventListener('mouseover')} 
                   // })
                } else if (chosenColor === 'blue') {
                   // square.addEventListener('mouseover', () => {  
                        //square.removeEventListener('mouseover', mouseoverRed)
                        square.classList.remove('mouseover-gray')
                        square.classList.remove('mouseover-gray')
                        square.classList.remove('mouseover-red')
                        square.classList.add('mouseover-blue')
                        //if (chosenColor !== 'blue') {square.removeEventListener('mouseover')} 
                   // })
                } else if (chosenColor === 'gray') {
                   // square.addEventListener('mouseover', () => { 
                        square.classList.remove('mouseover-blue')
                        square.classList.remove('mouseover-green')
                        square.classList.remove('mouseover-red')
                        square.classList.add('mouseover-gray')
                        //if (chosenColor !== 'gray') {square.removeEventListener('mouseover')} 
                   // })
                } else {

                }
            */
            
/*
                function mouseoverRed() {   
                    square.classList.remove('mouseover-green', 'mouseover-gray', 'mouseover-blue')
                    square.classList.add('mouseover-red')
                }
                function mouseoverGreen() {   
                    square.classList.remove('mouseover-red', 'mouseover-gray', 'mouseover-blue')
                    square.classList.add('mouseover-green')
                }
                function mouseoverBlue() {   
                    square.classList.remove('mouseover-green', 'mouseover-gray', 'mouseover-red')
                    square.classList.add('mouseover-blue')
                }
                function mouseoverGray() {   
                    square.classList.remove('mouseover-green', 'mouseover-red', 'mouseover-blue')
                    square.classList.add('mouseover-gray')
                }
*/
                //square.removeEventListener('mouseover', mouseoverGray)
                //square.classList.remove('mouseover-gray')
                //square.removeEventListener('mouseover', mouseoverGreen)
                //square.classList.remove('mouseover-green')
                //square.removeEventListener('mouseover', mouseoverBlue)
                //square.classList.remove('mouseover-blue')
                //square.removeEventListener('mouseover', mouseoverRed)
                //square.classList.remove('mouseover-red')
                /*
                switch(chosenColor) {
                    case 'red':
                        
                            square.addEventListener('mouseover', mouseoverRed)
                            square.removeEventListener('mouseover', mouseoverGray)
                            square.removeEventListener('mouseover', mouseoverGreen)
                            square.removeEventListener('mouseover', mouseoverBlue)
                        
                    break;

                    case 'green':
                        square.addEventListener('mouseover', mouseoverGreen)
                        square.removeEventListener('mouseover', mouseoverRed)
                        square.removeEventListener('mouseover', mouseoverBlue)
                        square.removeEventListener('mouseover', mouseoverGray)
                    break;

                    case 'blue':
                        square.addEventListener('mouseover', mouseoverBlue)
                        square.removeEventListener('mouseover', mouseoverRed)
                        square.removeEventListener('mouseover', mouseoverGreen)
                        square.removeEventListener('mouseover', mouseoverGray)
                    break;

                    case 'gray':
                        square.addEventListener('mouseover', mouseoverGray)
                        square.removeEventListener('mouseover', mouseoverRed)
                        square.removeEventListener('mouseover', mouseoverBlue)
                        square.removeEventListener('mouseover', mouseoverGreen)
                    break;
                    
                }
            

                function squareMouseOver() {
                    if (chosenColor === 'red') {
                        square.classList.remove('mouseover-green', 'mouseover-gray', 'mouseover-blue')
                        square.classList.add('mouseover-red')
                    } else if (chosenColor == 'green') {
                        square.classList.remove('mouseover-red', 'mouseover-gray', 'mouseover-blue')
                        square.classList.add('mouseover-green')
                    }
                }
                square.addEventListener('mouseover', squareMouseOver)
            */
        /*
        square.addEventListener('mouseout', () => {
            square.classList.remove('mouseover-red')
            square.classList.remove('mouseover-green')
            square.classList.remove('mouseover-blue')
            square.classList.remove('mouseover-gray')
            isInDiv = false
            console.log(isInDiv)
        })
        
        square.addEventListener('mousedown', () => {
            
            square.classList.add('square-mouse-down')
            square.classList.remove('mouseover')
            square.classList.add('mouseover-without-color')
            const color = window.getComputedStyle(square) ["background-color"]
            
            if (color === 'rgb(255, 255, 255)') {
                square.classList.remove('mouseover-without-color')
                square.classList.remove('box2')
                square.classList.add('mouseover')
                square.classList.add('bad')

                setTimeout(() => {
                    square.classList.remove('bad')
                    
                }, 1000)
            } else if (color === 'rgb(128, 128, 128)') {
                square.classList.remove('mouseover-without-color')
                square.classList.remove('box2')
                square.classList.add('mouseover')
                square.classList.add('good')
                
                if (graySquareArray) {
                    clicks++
                } else {
                    clicksInitial++
                }
                cardCompletionCheck()
                initialCardCompletionCheck()
            }
            
            setTimeout(() => {
                square.classList.remove('square-mouse-down')
            }, 100)
        })
        */
            //a is rgb(169,97,108)
            //s is rgb(114,170,145)
            //d is rgb(115,127,167)



/*
        function squareEvents() {
            setTimeout(() => {
                let topCard = document.querySelector('.card7')
                let topBox = topCard.querySelector('.box')
                const square = topBox.querySelector('.square')
                console.log(square)
            

            
                                        
                if (chosenColor === 'red') { 
                    console.log('yoyo')
                    square.classList.remove('mouseover-green')
                    square.classList.remove('mouseover-blue')
                    square.classList.remove('mouseover-gray')
                    square.classList.add('mouseover-red')   
                    
                } else if (chosenColor === 'green') {
                    square.classList.remove('mouseover-blue')
                    square.classList.remove('mouseover-gray')
                    square.classList.remove('mouseover-red')
                    square.classList.add('mouseover-green')
                } else if (chosenColor === 'blue') {
                    square.classList.remove('mouseover-gray')
                    square.classList.remove('mouseover-gray')
                    square.classList.remove('mouseover-red')
                    square.classList.add('mouseover-blue')
                } else if (chosenColor === 'gray') {
                    square.classList.remove('mouseover-blue')
                    square.classList.remove('mouseover-green')
                    square.classList.remove('mouseover-red')
                    square.classList.add('mouseover-gray')
                } else {
    
                }
                
            
            
            
            square.addEventListener('mouseout', () => {
                square.classList.remove('mouseover-red')
                square.classList.remove('mouseover-green')
                square.classList.remove('mouseover-blue')
                square.classList.remove('mouseover-gray')
            })
            
            square.addEventListener('mousedown', () => {
                
                square.classList.add('square-mouse-down')
                square.classList.remove('mouseover')
                square.classList.add('mouseover-without-color')
                const color = window.getComputedStyle(square) ["background-color"]
                
                if (color === 'rgb(255, 255, 255)') {
                    square.classList.remove('mouseover-without-color')
                    square.classList.remove('box2')
                    square.classList.add('mouseover')
                    square.classList.add('bad')
    
                    setTimeout(() => {
                        square.classList.remove('bad')
                        
                    }, 1000)
                } else if (color === 'rgb(128, 128, 128)') {
                    square.classList.remove('mouseover-without-color')
                    square.classList.remove('box2')
                    square.classList.add('mouseover')
                    square.classList.add('good')
                    
                    if (graySquareArray) {
                        clicks++
                    } else {
                        clicksInitial++
                    }
                    cardCompletionCheck()
                    initialCardCompletionCheck()
                }
                
                setTimeout(() => {
                    square.classList.remove('square-mouse-down')
                }, 100)
            })

        }, 3000)
        
            
        }
        squareEvents()
        */