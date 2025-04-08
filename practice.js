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

const cardNumbers = [' ', 'card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7']
const dataArray = ['', '1', '2', '3', '4', '5', '6', '7']

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

                    

                    innerLoop: for (i = 1; i < 100; i++) {
                        const square = document.createElement('div')
                        
                        let white = undefined
                        let gray = undefined
                        
                        function randomColor() {
                            const color = Math.random()

                            if (color >= 0 && color <= 0.2) {
                                square.classList.add('gray')
                            } else if (color > 0.2 && color <= 1) {
                                square.classList.add('white')
                            }
                        }
                        randomColor()

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
                            console.log(color)
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
                    c++
                
            } else {clearInterval(cardStartUp)}    
        }, 120)
    }, 1000)        
}
createCards()

function gameCardfunction() {
    const practiceButton = document.createElement('button')
    practiceButton.textContent = 'test'
    practiceButton.classList.add('button')

    setTimeout(() => {
        function lastCardSwipeFunction() {
            
            practiceButton.addEventListener('click', () => {
                const finishedCard = document.querySelector('.card7')
                finishedCard.classList.add('test')
                setTimeout(() => {
                    firstCardSwipe()
                }, 200)
                setTimeout(() => {
                    document.body.removeChild(finishedCard)
                }, 400)
            })
            document.body.appendChild(practiceButton)
        }
        lastCardSwipeFunction()
    }, 3500)

    function firstCardSwipe() {
        const box = document.createElement('div')
        const cardTitle = document.createElement('header')
        const card = document.createElement('div')
        let card6 = document.querySelector('.card6')

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

                        if (color >= 0 && color <= 0.2) {
                            square.classList.add('gray')
                        } else if (color > 0.2 && color <= 1) {
                            square.classList.add('white')
                        }
                    }
                    randomColor()

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
                        console.log(color)
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
}
gameCardfunction()

function cardCompletionCheck() {
    const test2 = document.createElement('button')
    test2.textContent = 'test2'
    document.body.appendChild(test2)
    test2.addEventListener('click', () => {
        const topCard = document.querySelector('.card7')
        const topBox = topCard.querySelector('.box')
        const topSquares = topBox.querySelector('.gray')
        //const color = window.getComputedStyle(topCard) ["background-color"]
        
        //so if I use querySelectorAll, it can't determine what the color is for all the boxes.  first off i need the exact number of colored boxes to begin with, so i dont have to loop through every single click, once the final box is reached then i can start the next function i will describe. maybe i can loop through the boxes and store the rgb of each in an array and then loop the array through a filter, checking for the rgb of green (0, 128, 0)

        // extrapolating on my first option, i can map an array starting from box1 all the way to box 81. so maybe inspect first color, map that to a new array, take the new array & add a placeholder variable for the next index, and then send that info to the next computeStyle read where the number corresponds to the 'nth child'. and just loop everything over and over until 81. the loop creates its own array whie also propegating itself for the next iteration

        //create array of 81 boxColor variables, create a function to make the index of the array correspond with the nth .card7 child while also storing the value of the square's backgroundColor RGB on the variable/nth child index. next check if the index of the array equals the rgb value of (). this is all stored in a loop, if i < arr.length; i++. If all true, then start gameCardFunction. finally map that function to the array
        
        let squareArray = []
        let n = 0

        for (i = 1; i < 82; i++) {
            squareArray[i] = `square${[i]}`
            let nthChild = topBox.querySelector(`:nth-child(${n})`)
            if (nthChild.classList.contains(gray)) {
                console.log('yes')
            } else {console.log('no')}
            //console.log(color)
            n++
        }

        

        

        /*
        
        if (color === 'rgb(255, 255, 255)') {

        }
        */
        
    })
}
setTimeout(() => {
    cardCompletionCheck()
},3500)

//maybe another way around this is to just have a boolean statement for each square stored in an array.  So make an array outside the scope of both functions, give 81 stored false boolean functions, somehow match the current square to the index of the boolean array index and add the "boolean = true" to the eventlistener. send that information to cardComplettionCheck() and loop through to see if all true.



