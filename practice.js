// im going to need an array of objects containing a title and a nested array that contains metadata for each square.
// random choice will choose a pair
// somehow I will have to map the metadata to the box. likely a for loop or for each of the array?


// if z-index value is <= 2
function squareSound() {
    var squareClick = new Audio("audio/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3")
    squareClick.play()
}




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
                        // make background and text invert eachothers colors
                        //make it impossible to highlight the card text
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
                        const sideBarLeft = document.createElement('div')
                        const sideBarRight = document.createElement('div')
                        sideBarLeft.classList.add('side-bar-right')
                        sideBarRight.classList.add('side-bar-left')
                        sideBarLeft.classList.add('side-bar-right-in')
                        sideBarRight.classList.add('side-bar-left-in')
                        document.body.appendChild(sideBarLeft)
                        document.body.appendChild(sideBarRight)
                        document.body.setAttribute('style', 'flex-direction: row;')
                    }, 6500)
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




function createCards() {
    
    // if ((cardnumber) === (arraynumber)) {color = (arraycolor)}
    
    let cardZIndex = 1
    let cardTranslationValue = 55
    let c = 1
    
    
    
    setTimeout(() => {
        //const cardStartUp = setInterval(() => {
            //if (c <= 7) {
                const box = document.createElement('div')
                const cardTitle = document.createElement('header')
                const card = document.createElement('div')
                card.classList.add('card')
                card.classList.add('card-animation')

                //making each card a lower z-index with each iteration
                card.style.zIndex = cardZIndex++   
                console.log(card.style.zIndex)
                document.body.appendChild(card)

                //changing translation per iteration
                function decrementTranslation() {
                    card.style.transform = `translate(-50%, -${cardTranslationValue}%)`
                    cardTranslationValue -= 2
                }
                decrementTranslation()
                 
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
                    function decrementType() {
                        
                    }

                    card.appendChild(cardTitle)
                    box.classList.add('box')
                    card.appendChild(box)
                    setTimeout(() => {
                        
                    })
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
                    
                    /*
                    square.addEventListener('mouseup', () => {
                        square.classList.remove('square-mouse-down')
                        square.classList.add('square-mouse-up')
                    })
                    */
                    square.setAttribute('onclick', 'squareSound()')
                    
                    box.appendChild(square)
                    
                    
                    if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container+
                }
                
                c++
            //} else {clearInterval(cardStartUp)}    
        //}, 120)
    }, 1000)        
    
  
}
//createCards()
/*
function startTutorial() {
    
    let index = 0
    let speed = 80;
    let titleTextQuery = document.querySelectorAll('header')
    let titleTextContent = 'hello'

    function typeWriter() {
                        
        if (index < titleTextQuery.length) {
            cardTitle.textContent += titleText.charAt(index)
            index++;
            setTimeout(typeWriter, speed)
        } 
    }
    
    function typeDecrement() {
        titleTextContent = titleTextQuery.textContent
        titleTextQuery.textContent -= titleTextContent.charAt(index)
        index++;
        setTimeout(typeDecrement, speed)
        
    }
        
    
    document.body.removeChild(titleTextQuery)
    
    console.log(titleTextQuery.textContent)
    
            
}
setTimeout(() => {
    startTutorial()
}, 4000)
*/
        // console.log(titleTextQuery.textContent)
        //const numberofDivs = document.querySelectorAll('.square').length
        //const cardLocation = parseInt(card.style.top)
        //if (currentZIndex <= 7) { 
        //if (currentZIndex <= 2) {
