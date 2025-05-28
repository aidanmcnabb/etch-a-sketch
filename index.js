        /*
        
        const animationContainer = document.querySelector('#animation-container')
        const animationContainer2 = document.querySelector('#animation-container2')
        const animationVisual = document.querySelector('#animation')
        const consentButton = document.querySelector('#consent')
        const blinkingCursor = document.querySelector('.blinking-cursor')
        const thingImg = document.createElement('img')
        thingImg.src = 'img/what2.gif'
        const thingImg2 = document.createElement('img')
        thingImg2.src = 'img/what2.gif'
        const stickMan = document.createElement('video')
        stickMan.src ='video/stickMan3.mp4'
        const animationVisual2 = document.createElement('div')
        const animationVisual3 = document.createElement('div')
        const animationVisual4 = document.createElement('div')
        const animationVisual5 = document.createElement('div')
        const playButton = document.createElement('button')
        const insidePlayButton = document.createElement('span')

        const letterArray = ['J', 'e', 't', ' ', ' ', ' ', ' ', 'S', 'k', 'e', 't', 'c', 'h', '!', 'B', 'y', ' ', 'A', 'i', 'd', 'a', 'n', ' ', 'M', 'c', 'n', 'a', 'b', 'b', '.', '.', '.', 'E', 'n', 'j', 'o', 'y', '.']

        let mySound = new Audio('audio/quick-mechanical-keyboard-using-enter-14390.mp3')

        function playMySound() {
            mySound.play()
        }
        
        function absoluteTimer(element, array) {
            // this is just pulling the letters from that letterArray above and typing them to the screen. I tried making a function that could pull the delay times from an array as well, this just seemed a little easier and straightforward tbh
            let i = 0
            let keepGoing = true

            function setTime(delay) {
                const timeoutId = setTimeout(() => {
                    element.textContent += `${array[i]}`
                    i++
                }, delay)  
            }

            function setDecriment(delay) {
                setTimeout(() => {
                    if (element.textContent.length > 0) {
                        const modifiedText = element.textContent.slice(0, -1)
                        element.textContent = modifiedText
                    }
                }, delay)   
            }
            
            setTime(2300)
            setTime(2500)  
            setTime(2600)  
            setTime(2690)  
            setTime(3000)  
            setTime(3200)  
            setTime(3300)  
            setTime(3400)  
            setTime(3600)
            setTime(3700)  
            setTime(3770)  
            setTime(3860)  
            setTime(3920)  
            setTime(4500)
            setDecriment(6000)
            setDecriment(6100)
            setDecriment(6200)
            setDecriment(6300)
            setDecriment(6400)
            setDecriment(6500)
            setDecriment(6600)
            setDecriment(6650)
            setDecriment(6700)
            setDecriment(6750)
            setDecriment(6800)
            setDecriment(7100)
            setDecriment(7200)
            setDecriment(7300)
            setTime(9000)
            setTime(9100)  
            setTime(9200)  
            setTime(9290)  
            setTime(9400)  
            setTime(9500)  
            setTime(9600)  
            setTime(9700)  
            setTime(9800)
            setTime(9900)  
            setTime(9970)  
            setTime(10060)  
            setTime(10120)  
            setTime(10200)
            setTime(10300)
            setTime(10500)
            setTime(10700)
            setTime(10900)
            setDecriment(11600)
            setDecriment(11700)
            setDecriment(11800)
            setDecriment(11900)
            setDecriment(12000)
            setDecriment(12100)
            setDecriment(12200)
            setDecriment(12300)
            setDecriment(12400)
            setDecriment(12500)
            setDecriment(12600)
            setDecriment(12700)
            setDecriment(12800)
            setDecriment(12900)
            setDecriment(12970)
            setDecriment(13040)
            setDecriment(13110)
            setDecriment(13180)
            setTime(14180)
            setTime(14280)  
            setTime(14380)  
            setTime(14480)  
            setTime(14580)  
            setTime(14680)
            // this timer should still be functioning throughout my entire webpage for the rest of time until i refresh, i think. when i tried to make a stoptimerid, even though i kept getting scope errors, it would still work... so not sure what thats about.
             
            
            
        }
        
        function buttonClick() {
            //this is all basically a manual timer for all of my animations that originated from the "consent" button. this allows me to also play my master sound for the entire intro animation as well.  there is probably a better way to do all of this, i am willing to look into it to see if this is even right.  it works though!  
            consentButton.addEventListener('mousedown', () => {
                consentButton.classList.remove('fade')
                consentButton.classList.remove('button-infinite')
                consentButton.classList.add('button-click')
                consentButton.setAttribute('style', 'border-color: forestgreen;')
                function buttonClickDelay(delay,) {   
                    setTimeout(() => {
                        animationContainer2.classList.remove('fade')
                        animationContainer2.classList.add('button-click2')
                        
                    }, delay)
                }
                buttonClickDelay(200)
                setTimeout(() => {
                    animationContainer2.setAttribute('style', 'border-color: forestgreen; background-color: rgb(236, 248, 236);')
                }, 400)
                setTimeout(() => {
                    animationContainer2.classList.remove('button-click2')
                    animationContainer2.classList.add('fade2')
                }, 470)
                setTimeout(() => {
                    animationContainer.removeChild(animationContainer2)
                    absoluteTimer(animationVisual, letterArray)
                    animationVisual.setAttribute('style', 'font-size: 90px; ')
                    document.body.setAttribute('style', 'margin-top: 400px;')
                    
                }, 1000)
                setTimeout(() => {
                    animationContainer.classList.add('blinking-cursor')
                }, 2500)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                    animationContainer.classList.remove('blinking-cursor')
                }, 17500)
                setTimeout(() => {
                    //this is when the "glitching" starts. just changed textContent and added the flashing blue screen a bunch of times, beware of epilepsy.
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = 'eNjoY'
                }, 17530)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                }, 17560)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = 'njEyo'
                    animationContainer.classList.add('blinking-cursor')
                }, 17590)
                
            

                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationContainer.classList.remove('blinking-cursor')
                    animationVisual.textContent = ''
                }, 17900)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = 'yT%ji'
                }, 17940)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                }, 17980)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = 'slender'
                }, 18020)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                }, 18100)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = '<img src="JD-Purgatory">'
                    animationContainer.classList.add('blinking-cursor')
                    animationVisual.classList.add('glitch')
                }, 18180)

                

                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationContainer.classList.remove('blinking-cursor')
                    animationVisual.textContent = ''
                }, 19000)
                setTimeout(() => {
                    //"filter" is white noise filter and "glitch" is the textShadow infinite loop glitchy thingamabober
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = '##!@@'
                    animationVisual.classList.add('filter')
                }, 19100)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                }, 19180)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                    animationVisual.textContent = '#####'
                }, 19230)
                setTimeout(() => {
                    //thing 1 & 2 are gifs of a split second of a youtube short but with the white and grey colors filtered through the same rgb as "gradient-overlay". and i did some other stuff to it. i also added "filter" to it.
                    document.body.classList.add('gradient-overlay')
                    animationVisual.textContent = ''
                    animationContainer.appendChild(thingImg)
                    animationContainer.appendChild(thingImg2)
                    thingImg.setAttribute('style', 'position: absolute; top: -300px; left: 400px;')
                    thingImg2.setAttribute('style', 'position: absolute; top: -200px; left: 800px;')
                    thingImg.classList.add('filter')
                    thingImg2.classList.add('filter')
                }, 19330)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                }, 19390)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                }, 19460)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay')
                }, 19800)
                setTimeout(() => {
                    document.body.classList.add('gradient-overlay')
                    animationContainer.removeChild(thingImg)
                    animationContainer.removeChild(thingImg2)
                }, 19880)
                setTimeout(() => {
                    //centered and changed z-index of stick figure animation to act as the background of the page.  rendered in the same size as my browser.... so obviously this wont look right to everyone.  im going to ask for feedback on that part to see where i could have done things differently, or if there could be an adaptive aspect ratio to the video. or maybe there already is! not really sure how it will turn out for other people.
                    document.body.classList.remove('gradient-overlay')
                    animationContainer.classList.add('blinking-cursor')
                    animationVisual.textContent = '!null'
                    animationContainer.setAttribute('style', 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2;')
                    document.body.appendChild(stickMan)
                    stickMan.setAttribute('style', 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;')
                }, 19950)
                setTimeout(() => {
                    // starting my handmade stick figure animation, i lined up the stick figure with the animationVisual and just put both in the center of the screen
                    stickMan.play()
                }, 22400)
                setTimeout(() => {
                    //this is where i learned that having 2 infinite animations happening on two seperate classes at the same time cancels the latter class because of cascade. (i think, or its just a weird bug with text-shadow animations? im still very confused tbh.)  so to fix this i just made each class its own seperate version and played all the animations on a single class.  this presents itself to be a problem that i want to be fixed in the future, it is inefficient and looks terrible with all the extra classes and keyframes used. I looked up to see if there is a way to add parameters for keyframes, though that will be a problem that i will focus on solely on in the future. for now i just wanted to get it done with the fix that i fully understood.

                    //this is just a slight translation of the animationVisual whenever the stick figure punches it
                    animationVisual.classList.remove('glitch')
                    animationVisual.classList.add('glitch12')
                }, 25890)
                setTimeout(() => {
                    animationVisual.classList.remove('glitch12')
                    animationVisual.classList.add('glitch')
                }, 26500)
                setTimeout(() => {
                    animationContainer.classList.remove('blinking-cursor')
                }, 26700)
                setTimeout(() => {
                    //this is where i seperated animationVisual into 5 seperate divs so i can control each one via transform in css. added all classes that were on the originals.
                    document.body.classList.add('gradient-overlay2')
                    animationVisual2.setAttribute('style', ' font-size: 90px;')
                    animationVisual3.setAttribute('style', 'font-size: 90px;')
                    animationVisual4.setAttribute('style', 'font-size: 90px;')
                    animationVisual5.setAttribute('style', 'font-size: 90px;')
                    animationVisual.textContent = '!'
                    animationVisual2.textContent = 'n'
                    animationVisual3.textContent = 'u'
                    animationVisual4.textContent = 'l'
                    animationVisual5.textContent = 'l'
                    animationVisual.classList.remove('glitch')
                    animationVisual.classList.add('glitch1')
                    animationVisual2.classList.add('glitch2', 'filter')
                    animationVisual3.classList.add('glitch3', 'filter')
                    animationVisual4.classList.add('glitch4', 'filter')
                    animationVisual5.classList.add('glitch5', 'filter')
                    animationContainer.appendChild(animationVisual2)
                    animationContainer.appendChild(animationVisual3)
                    animationContainer.appendChild(animationVisual4)
                    animationContainer.appendChild(animationVisual5)
                }, 29700)
                setTimeout(() => {
                    document.body.classList.remove('gradient-overlay2')
                    animationVisual.classList.remove('glitch1')
                    animationVisual2.classList.remove('glitch2')
                    animationVisual3.classList.remove('glitch3')
                    animationVisual4.classList.remove('glitch4')
                    animationVisual5.classList.remove('glitch5')
                    animationVisual.classList.add('glitch6')
                    animationVisual2.classList.add('glitch7')
                    animationVisual3.classList.add('glitch8')
                    animationVisual4.classList.add('glitch9')
                    animationVisual5.classList.add('glitch10')
                }, 36000)
                setTimeout(() => {
                    // changed letters to "play!" during translation to appear seamless
                    animationVisual.textContent = 'p'
                    animationVisual2.textContent = 'l'
                    animationVisual3.textContent = 'a'
                    animationVisual4.textContent = 'y'
                    animationVisual5.textContent = '!'
                }, 36100)
                setTimeout(() => {
                    //replaced the 5 seperate divs with one so i can make a button
                    animationContainer.removeChild(animationVisual)
                    animationContainer.removeChild(animationVisual2)
                    animationContainer.removeChild(animationVisual3)
                    animationContainer.removeChild(animationVisual4)
                    animationContainer.removeChild(animationVisual5)
                    playButton.classList.add('glitch11', 'filter', 'consent2')
                    playButton.setAttribute('onclick', 'playButtonFunc()')
                    playButton.textContent = 'play!'
                    animationContainer.appendChild(playButton)
                }, 45000)
                
            })
            
            
            
        }
        buttonClick()

        function playButtonFunc() {
            // this is the end of the intro animation, maybe putting it at the top doesn't make sense.... idk. i basically erase everything and im ready to start on a fresh body.  next will come the tutorial and i will keep these on seperate js files so it's easy to call when the user wants to experience it again. I might consider moving the first "best experienced with headphones" popup to a seperate file as well.
            playButton.setAttribute('style', 'animation: buttonClick 0.4s ease-out; animation: fadeToBlack 3s linear forwards;')
            document.body.classList.add('gradient-overlay3')
            setTimeout(() => {
                document.body.removeChild(animationContainer)
                document.body.removeChild(stickMan)
                tutorial()
            }, 3000)
            setTimeout(() => {
                document.classList.remove('gradient-overlay3')
                
            }, 8000)
            setTimeout(() => {
                createCards()
            }, 8001)
        }
        */

        //_________________________________________________________________________________________________________________________________

        //Top: 400
        //Left: 433.1875
        //Right: 599.8125
        //Bottom: 508


        //this is all my exploration for the letterArray[i] && timerArray[i] = output, well at least most of it.  couldn't figure it out though.

        /*
        const pickDelay = (array) => {
                for (i = 0; i < array.length; i++) {
                    let delay = array[i]
                }
            }

        const numberArray = [1000, 2500, 2600, 2690, 3000, 3200, 3300, 3400, 3600, 3700, 3770, 3860, 3920, 5000]

        function absoluteTimer(element, array1, array2) {
            element.textContent = ''
            let delay = 1000
            // Sifting through 2 arrays by index for a delay and then a value for each iteration
            const setTime = () => {
                for (i = 0; i < array1.length; i++) {
                    delay = array2[i]
                    setTimeout(() => {
                        element.textContent += `${array1[i]}`
                        console.log(array1[i])
                    }, delay)    
                }   
            }
            setTime()  
        }
        absoluteTimer(animationContainer, letterArray, numberArray);

        function typeOutArray(array, element) {
            let i = 0
            animationContainer.textContent = ''
            let randomDelay = 100


            setInterval((timer) => {
                if (i < array.length) {
                    element.textContent += array[i]
                    i++  
                } else {
                    clearInterval(timer)
                }
            }, randomDelay); 
        }
        typeOutArray(letterArray, animationContainer)*/




        //________________________________________________________________________________________________________________________________________________


        // im going to need an array of objects containing a title and a nested array that contains metadata for each square.
// random choice will choose a pair
// somehow I will have to map the metadata to the box. likely a for loop or for each of the array?

//var http = require('http');
//var fs = require('fs');



// if z-index value is <= 2

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

//SOUNDS

function createCardsSound() {
    var createCardSoundPlay = new Audio("audio/CreateCardsSound.mp3") //this sound will have to be queded up
    createCardSoundPlay.play()
}

//all div entrance sounds will have to be queded up

function startButtonSound() {
    var startButtonSoundplay = new Audio('audio/Countdown.mp3')
    startButtonSoundplay.play()
}

function startButtonSound2() {
    var startButtonSoundplay2 = new Audio('audio/Countdown2.mp3')
    startButtonSoundplay2.play()
}

function squareSound1() {
    var squareClick1 = new Audio("audio/SquareClick1.mp3")
    squareClick1.play()
}
function squareSound2() {
    var squareClick2 = new Audio("audio/SquareClick2.mp3")
    squareClick2.play()
}
function squareSound3() {
    var squareClick3 = new Audio("audio/SquareClick3.mp3")
    squareClick3.play()
}
function squareSound4() {
    var squareClick4 = new Audio("audio/SquareClick4.mp3")
    squareClick4.play()
}
function wrongSquareSound() {
    var wrongSquare = new Audio("audio/WrongSquare.mp3")
    wrongSquare.play()
}


//SOUNDS

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

    let correctCard = 0
    let wrongCard =  false
    let matrixModeON = false
    let playMatrixCharOnce = false
    
    //let stopEverything = false
    let timeUp = false

    let = stickMan = false

    let level2ON = false
    let level3ON = false
    let level4ON = false
    let level5ON = false

    const startConstraint = document.createElement('div')

    const dancingMan = document.createElement('img')
    dancingMan.classList.add('dancing-man')
    dancingMan.src = 'img/stickmandancing2.gif'

    function createCards() {


        // if ((cardnumber) === (arraynumber)) {color = (arraycolor)}

        let c = 1
        
        setTimeout(() => {
            if (stickMan) {
                document.body.removeChild(dancingMan)
                stickMan = true
            }
        },3000)
        
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
                                
                                let nthChildWHI = square.classList.contains('white')
                                let nthChildINVI = square.classList.contains('invis')

                                square.classList.add('square-mouse-down')
                                square.classList.remove('mouseover')
                                square.classList.add('mouseover-without-color')
                                const color = window.getComputedStyle(square) ["background-color"]
                                //console.log(color)
                                if (color === 'rgb(255, 255, 255)' || color === 'rgba(0,0,0,0)' || nthChildINVI || nthChildWHI) {
                                    //if (color === 'rgb(255, 255, 255)') {
                                    wrongSquareSound()
                                    square.classList.remove('mouseover-without-color')
                                    square.classList.remove('box2')
                                    square.classList.add('mouseover')
                                    square.classList.add('bad')
                                    wrongCard = true
                                    wrongCardCheck()
                                    correctCard = -1
                                    //cardNumber = 1
                                    correctCardCounter()
                                    stopMatrixModeAni()
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
                                        squareSound1()
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
                                        wrongSquareSound()
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        wrongCard = true
                                        wrongCardCheck()
                                        correctCard = -1
                                        //cardNumber = 1
                                        correctCardCounter()
                                        stopMatrixModeAni()
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
                                        squareSound2()
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
                                        wrongSquareSound()
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        wrongCard = true
                                        wrongCardCheck()
                                        correctCard = -1
                                        //cardNumber = 1
                                        correctCardCounter()
                                        stopMatrixModeAni()
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
                                        squareSound3()
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
                                        wrongSquareSound()
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        wrongCard = true
                                        wrongCardCheck()
                                        correctCard = -1
                                        //cardNumber = 1
                                        correctCardCounter()
                                        stopMatrixModeAni()
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
                                        squareSound4()
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
                                        wrongSquareSound()
                                        square.classList.remove('mouseover-without-color')
                                        square.classList.remove('box2')
                                        square.classList.add('mouseover')
                                        square.classList.add('bad')
                                        wrongCard = true
                                        wrongCardCheck()
                                        correctCard = -1
                                        //cardNumber = 1
                                        correctCardCounter()
                                        stopMatrixModeAni()
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
                            
                        
                            //square.setAttribute('onclick', 'squareSound()')
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

function cardSwipe1Play() {
    var cardSwipe1 = new Audio("audio/CardSwipe1.mp3")
    cardSwipe1.play()
}
function cardSwipe2Play() {
    var cardSwipe2 = new Audio("audio/CardSwipe2.mp3")
    cardSwipe2.play()
}
function cardSwipe3Play() {
    var cardSwipe3 = new Audio("audio/CardSwipe3.mp3")
    cardSwipe3.play()
}
function randomCardSwipe() {
    let x = Math.random()
    if (x >= 0 && x < .33) {
        cardSwipe1Play()
    } else if (x >= .33 && x < .66) {
        cardSwipe2Play()
    } else if (x >= .66 && x <= 1) {
        cardSwipe3Play()
    }
}

    function cardCompletionCheck() {
        const finishedCard = document.querySelector('.card7')
        if (grayClicks === graySquareAmount && redClicks === redSquareAmount && greenClicks === greenSquareAmount && blueClicks === blueSquareAmount) {
            finishedCard.classList.add('test')
            randomCardSwipe()
            grayClicks = 0
            redClicks = 0
            greenClicks = 0
            blueClicks = 0
            setTimeout(() => {
                firstCardSwipe()
            }, 200)
            setTimeout(() => {
                document.body.removeChild(finishedCard)
                if (matrixModeON) {
                    scoreNumber += 2
                } else {
                    scoreNumber += 1
                }
                wrongCard = false
                correctCard++
                correctCardCounter()
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
            
            randomCardSwipe()
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
                wrongCard = false
                correctCard++
                correctCardCounter()
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
        if (matrixModeON) {
            card.classList.add('matrix-card')
        }

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
                if (matrixModeON) {
                    box.classList.add('card-box-border')
                }
                
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
                            if (matrixModeON) {
                                square.classList.add('invis-border')
                            }
                        } else if (color >= 0.05 && color <= .1) {
                            square.classList.add('red')
                            if (matrixModeON) {
                                square.classList.add('invis-border')
                            }
                        }  else if (color >= 0.1 && color <= 0.15) {
                            square.classList.add('green')
                            if (matrixModeON) {
                                square.classList.add('invis-border')
                            }
                        }  else if (color >= 0.15 && color <= 0.2) {
                            square.classList.add('blue')
                            if (matrixModeON) {
                                square.classList.add('invis-border')
                            }
                        }  else if (color > 0.2 && color <= 1) {
                            if (matrixModeON) {
                                square.classList.add('invis')
                            } else {
                                square.classList.add('white')
                            }
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
                        
                        let nthChildWHI = square.classList.contains('white')
                        let nthChildINVI = square.classList.contains('invis')

                        square.classList.add('square-mouse-down')
                        square.classList.remove('mouseover')
                        square.classList.add('mouseover-without-color')
                        const color = window.getComputedStyle(square) ["background-color"]
                        //console.log(color)
                        if (color === 'rgb(255, 255, 255)' || color === 'rgba(0,0,0,0)' || nthChildINVI || nthChildWHI) {
                            wrongSquareSound()
                            square.classList.remove('mouseover-without-color')
                            square.classList.remove('box2')
                            square.classList.add('mouseover')
                            square.classList.add('bad')
                            wrongCard = true
                            wrongCardCheck()
                            correctCard = -1
                            //cardNumber = 1
                            correctCardCounter()
                            stopMatrixModeAni()
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
                                squareSound1()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                grayClicks++
                                cardCompletionCheck()
                            } else {
                                wrongSquareSound()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                wrongCard = true
                                wrongCardCheck()
                                correctCard = -1
                                //cardNumber = 1
                                correctCardCounter()
                                stopMatrixModeAni()
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
                                squareSound2()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                redClicks++
                                cardCompletionCheck()
                            } else {
                                wrongSquareSound()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                wrongCard = true
                                wrongCardCheck()
                                correctCard = -1
                                //cardNumber = 1
                                correctCardCounter()
                                stopMatrixModeAni()
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
                                squareSound3()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                greenClicks++
                                cardCompletionCheck()
                            } else {
                                wrongSquareSound()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                wrongCard = true
                                wrongCardCheck()
                                correctCard = -1
                                //cardNumber = 1
                                correctCardCounter()
                                stopMatrixModeAni()
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
                                squareSound4()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('good')
                                blueClicks++
                                correctCardCounter()
                                cardCompletionCheck()
                            } else {
                                wrongSquareSound()
                                square.classList.remove('mouseover-without-color')
                                square.classList.remove('box2')
                                square.classList.add('mouseover')
                                square.classList.add('bad')
                                wrongCard = true
                                wrongCardCheck()
                                correctCard = -1
                                //cardNumber = 1
                                correctCardCounter()
                                stopMatrixModeAni()
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
            
                    //square.setAttribute('onclick', 'squareSound()')
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
            /*
            let topCard = document.querySelector('.card7')
            let topBox = topCard.querySelector('.box') //causing errors... dont think its an issue though?
            let square = topBox.querySelector('.square')
            */
    
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
    const leaderBoardTitle = document.createElement('span')
    const nameScoreContainer = document.createElement('div')
    const dropDownInput = document.createElement('input')
    const dropDownHeader = document.createElement('span')
    const leaderBoardDropDown = document.createElement('div')
    let dropDownInputValue = dropDownInput.value
    const leaderBoardOpacity = document.createElement('div')

    function scoreLabel() {
        
        scoreLabelContainer.classList.add('score-label')
        scoreLabelContainer.classList.add('score-label-in')
        document.body.appendChild(scoreLabelContainer)
        scoreLabelContainer.textContent = scoreNumber
        setTimeout(() => {
            scoreLabelContainer.setAttribute('style', 'opacity: 1;')
        },7000)
    }
    scoreLabel()

    leaderBoardContainer.classList.add('leader-board')
    leaderBoardContainer.classList.add('leader-board-in')
    document.body.appendChild(leaderBoardContainer)
    setTimeout(() => {
        leaderBoardContainer.setAttribute('style', 'height: 600px; width: 260px; opacity: 1;')
    },7000)
    leaderBoardTitle.classList.add('leader-board-title')
    leaderBoardTitle.textContent = 'Leaderboards'
    nameScoreContainer.classList.add('name-score')
    leaderBoardOpacity.classList.add('leader-board-opacity')
    
    let lowNth = true
    let NSI = 0
    let userObject = undefined
    let playerIndex = undefined
    let singleClassAdd = false

    const players = [
        {name: 'Lil Ugly Mane', score: 15},
        {name: 'pIgLyWiGlY', score: 13},
        {name: 'urmom97', score: 11},
        {name: 'Boolxan', score: 20},
        {name: 'lilplato', score: 27},
        {name: 'bigBagBool', score: 35},
        {name: 'mrfuxk', score: 23},
        {name: 'mfDoom03',score: 7},
        {name: 'downsyBoy23', score: 1},
        {name: 'SHIESTYP', score: 3},
        {name: 'coMMas', score: 10},
        {name: 'whoDatboy',score: 19},
        {name: 'evelyn <3', score: 40},
    ]

    function sortObjectsDescending(arr) {
        arr.sort((a, b) => b.score - a.score)
    }
    sortObjectsDescending(players)

    function appendSortedPlayers() {
        const append = setInterval(() => {
            
            const span = document.createElement('span')
            span.textContent = `${NSI + 1}. ${players[NSI].name} ....... ${players[NSI].score}`
            span.classList.add('span-in')
            span.classList.add('for-nth')
            
            if (players[NSI].class) {
                
                span.classList.add('player-highlight')
            }
            
            if (NSI === 0) {
                span.classList.add('cool-span')
            }
            if (NSI >= 1 && NSI < 5) {
                span.classList.add('cool-span-2')
            }
            setTimeout(() => {
                span.classList.remove('span-in')
            },250)
            nameScoreContainer.appendChild(span)
            NSI++
            if (lowNth === true) {
                if (NSI === 13) {
                    clearInterval(append)
                }
            } else if (lowNth === false) {
                if (NSI === 14) {
                    clearInterval(append)
                    singleClassAdd = true
                }
            }
        },75)
        
        
    }

    function leaderBoardsContainer() {
        setTimeout(() => {
            leaderBoardContainer.appendChild(leaderBoardTitle)
            leaderBoardContainer.appendChild(nameScoreContainer)
            appendSortedPlayers()
        },4200)
    }
    leaderBoardsContainer()
        
    function leaderBoardsIntake() {

        function removeSortedPlayers() {
            
            const remove = setInterval(() => {
                const currentNth = nameScoreContainer.querySelector(`:nth-child(${NSI}).for-nth`)
                currentNth.classList.add('span-out')
                setTimeout(() => {
                    nameScoreContainer.removeChild(currentNth)
                },250)
                NSI--
                if (NSI === 0) {
                    clearInterval(remove)
                }
            },75)
        }
    
        if (lowNth === true) {
        
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
                leaderBoardOpacity.classList.add('leader-board-filter')
                leaderBoardContainer.appendChild(leaderBoardOpacity)
                setTimeout(() => {
                    leaderBoardDropDown.appendChild(dropDownHeader)
                    setTimeout(() => {
                        leaderBoardDropDown.appendChild(dropDownInput)
                    },500)
                },500)
            },300)
                

            let nameInput = false

            dropDownInput.addEventListener('input', () => {
                nameInput = true
                if (nameInput === true) {
                    dropDownInput.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter') {
                            dropDownInputValue = dropDownInput.value
                            dropDownHeader.classList.remove('drop-down-header')
                            dropDownInput.classList.remove('drop-down-input-in')
                            dropDownHeader.classList.add('drop-down-header-2')
                            dropDownHeader.classList.add('drop-down-header-out')
                            dropDownInput.classList.add('drop-down-input-out')
                            setTimeout(() => {
                                dropDownHeader.classList.remove('drop-down-header-out')
                                dropDownInput.classList.remove('drop-down-input-out')
                                dropDownHeader.classList.remove('drop-down-header-2')
                                leaderBoardDropDown.removeChild(dropDownHeader)
                                leaderBoardDropDown.removeChild(dropDownInput)
                                leaderBoardDropDown.classList.remove('leader-drop-down-in')
                                leaderBoardDropDown.classList.add('leader-drop-down-out')
                                setTimeout(() => {
                                    leaderBoardOpacity.classList.remove('leader-board-filter')
                                    leaderBoardOpacity.classList.add('leader-board-filter-out')
                                    setTimeout(() => {
                                        leaderBoardDropDown.classList.remove('leader-drop-down-out')
                                        leaderBoardOpacity.classList.remove('leader-board-filter-out')
                                        leaderBoardContainer.removeChild(leaderBoardDropDown)
                                        leaderBoardContainer.removeChild(leaderBoardOpacity)
                                        scoreLabelContainer.textContent = scoreNumber
    
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
                                        

                                        removeSortedPlayers()
                                        setTimeout(() => {
                                            
                                            lowNth = false
                                            dropDownInputValue = dropDownInput.value
                                            userObject = {name: dropDownInputValue, score: scoreNumber, class: true}
                                            players.push(userObject)
                                            singleClassAdd = true
                                            sortObjectsDescending(players)
                                            appendSortedPlayers()
                                        },1200)
                                        setTimeout(() => {
                                            scoreNumber = 0
                                            level2ON = false
                                            level3ON = false
                                            level4ON = false
                                            level5ON = false
                                            scoreLabelContainer.textContent = scoreNumber
                                        },1300)
                                            

                                        createCards()

                                    },300)
                                },500)
                            },400)
                            
                        }
                    })
                }
            }, {once: true})
        } else {
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
        
            removeSortedPlayers()
            setTimeout(() => {
                
                function isPlayer(player) {
                    return player.name === dropDownInputValue
                }
                if (players.find(isPlayer)) {
                    playerIndex = players.findIndex(player => player.name === dropDownInputValue)
                    if (scoreNumber > players[playerIndex].score) {
                        players[playerIndex].score = scoreNumber
                    }   
                    sortObjectsDescending(players)
                    singleClassAdd = false
                    appendSortedPlayers()
                }
            },1200)
            setTimeout(() => {
                scoreNumber = 0
                level2ON = false
                level3ON = false
                level4ON = false
                level5ON = false
                scoreLabelContainer.textContent = scoreNumber
            },1300)
            createCards()
        }

        //soooo, i dont really know how to host a server yet and how to pull info.  but thinking logically the way to go about it is to pull the JSON file from the server that contains the array of objects starting out when the leaderboard loads, un-stringify it, once game over, enter input, push array object, filter array, update screen, and send JSON to server while overwriting the original. all the while keeping the original data from the JSON file that i orginaly pulled, just push array object and updating local side only until I refresh and then it pulls server side again. unless i would want to do a a live updated leaderboard which would also be really easy, just setInterval to pull server side info every like 10-20 seconds and make sure the animation timing doesnt overlap with the endgame animation creating issues. dont know how i would resolve that last bit though, maybe synchronus instead of async?
    }
    
    const matrixCard1 = document.createElement('div')
    const matrixCard2 = document.createElement('div')
    const matrixCard3 = document.createElement('div')
    const matrixCard4 = document.createElement('div')
    const matrixCard5 = document.createElement('div')

    /* 
    wrongCard = true
    correct = 0
    correctCardCounter()
    */

    /* 
    wrongCard = false
    correctCard++
    correctCardCounter()
    */
        
    matrixModeContainer.classList.add('matrix-mode-container')
    matrixModeContainer.classList.add('matrix-mode-container-in')
    document.body.appendChild(matrixModeContainer)
    setTimeout(() => {
        matrixModeContainer.setAttribute('style', 'opacity: 1;')
        matrixModeContainer.classList.remove('matrix-mode-container-in')
    },7000)

    function createMatrixCards() {
        setTimeout(() => {
            setTimeout(() => {
                matrixCard1.classList.add('tiny-matrix-card1')
                matrixCard1.classList.add('tiny-matrix-card-in')
                matrixModeContainer.appendChild(matrixCard1)
            },100)
            setTimeout(() => {
                matrixCard2.classList.add('tiny-matrix-card2')
                matrixCard2.classList.add('tiny-matrix-card-in')
                matrixModeContainer.appendChild(matrixCard2)
            },200)
            setTimeout(() => {
                matrixCard3.classList.add('tiny-matrix-card3')
                matrixCard3.classList.add('tiny-matrix-card-in')
                matrixModeContainer.appendChild(matrixCard3)
            },300)
            setTimeout(() => {
                matrixCard4.classList.add('tiny-matrix-card4')
                matrixCard4.classList.add('tiny-matrix-card-in')
                matrixModeContainer.appendChild(matrixCard4)
            },400)
            setTimeout(() => {
                matrixCard5.classList.add('tiny-matrix-card5')
                matrixCard5.classList.add('tiny-matrix-card-in')
                matrixModeContainer.appendChild(matrixCard5)
            },500)
            setTimeout(() => {
                matrixCard1.classList.remove('tiny-matrix-card-in')
                matrixCard2.classList.remove('tiny-matrix-card-in')
                matrixCard3.classList.remove('tiny-matrix-card-in')
                matrixCard4.classList.remove('tiny-matrix-card-in')
                matrixCard5.classList.remove('tiny-matrix-card-in')
            },710)
        },4200)  
    }
    createMatrixCards()

    let activateAniOnce = false
    //let nextCard = true
    
    const failText = document.createElement('span')
    failText.classList.add('fail-text')
    failText.textContent = '失FAIL敗'
    const failText2 = document.createElement('span')
    failText2.classList.add('fail-text2')
    failText2.textContent = '失FAIL敗'
    matrixModeContainer.appendChild(failText)
    matrixModeContainer.appendChild(failText2)
    failText.setAttribute('style', 'opacity: 0')
    failText2.setAttribute('style', 'opacity: 0')

    function correctCardCounter() {
        //i need to remove the matrixContainerIn and give it another class
        //gotta reset cards onTimesUp
        if (correctCard === -1) {
            matrixModeContainer.classList.add('matrix-wrong-card')
            failText.setAttribute('style', 'opacity: 1')
            failText2.setAttribute('style', 'opacity: 1')
        } else if (correctCard === 0) {
            matrixModeContainer.classList.remove('matrix-wrong-card')
            failText.setAttribute('style', 'opacity: 0')
            failText2.setAttribute('style', 'opacity: 0')
        } else if (correctCard === 1) {
            matrixCard1.classList.add('correct-card')
        } else if (correctCard === 2) {
            matrixCard2.classList.add('correct-card')
        } else if (correctCard === 3) {
            matrixCard3.classList.add('correct-card')
        } else if (correctCard === 4) {
            matrixCard4.classList.add('correct-card')
        } else if (correctCard === 5) {
            matrixCard5.classList.add('correct-card')
            wrongCard = false
            if (!activateAniOnce) {
                matrixModeAni()
                activateAniOnce = true
            } 
        }
    }

    function wrongCardCheck() {
        if (correctCard === 1 || correctCard === 2 || correctCard === 3 || correctCard === 4 || correctCard >= 5) {
            matrixCard5.classList.remove('correct-card')
            matrixCard5.classList.add('correct-card-out')
            matrixCard4.classList.remove('correct-card')
            matrixCard4.classList.add('correct-card-out')
            matrixCard3.classList.remove('correct-card')
            matrixCard3.classList.add('correct-card-out')
            matrixCard2.classList.remove('correct-card')
            matrixCard2.classList.add('correct-card-out')
            matrixCard1.classList.remove('correct-card')
            matrixCard1.classList.add('correct-card-out')

            setTimeout(() => {
                matrixCard1.classList.remove('correct-card-out')
                matrixCard2.classList.remove('correct-card-out')
                matrixCard3.classList.remove('correct-card-out')
                matrixCard4.classList.remove('correct-card-out')
                matrixCard5.classList.remove('correct-card-out')
            },1401)
            
        }
    }
    
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&ßµø¤¿ƒ†×‡▓▒░¬⌐◙○♦▼▲↔∟▬◄►☼º┼┬┴╛╜╡╢║▐▌∞≡≈∩εΩΦΣ■'

    const backgroundCover = document.createElement('div')
    document.body.appendChild(backgroundCover)

    function matrixModeAni() {

        //wrongCard = false
        matrixModeON = true

        document.body.classList.remove('matrix-background-out')
        document.body.classList.add('matrix-background-in')
        
        const card1 = document.body.querySelector('.card1')
        const card2 = document.body.querySelector('.card2')
        const card3 = document.body.querySelector('.card3')
        const card4 = document.body.querySelector('.card4')
        const card5 = document.body.querySelector('.card5')
        const card6 = document.body.querySelector('.card6')
        const card7 = document.body.querySelector('.card7')
        const box7 = card7.querySelector('.box')
        let box6 = card6.querySelector('.box')
        const matrixContainer = document.body.querySelector('.matrix-mode-container')
        const scoreContainer = document.body.querySelector('.score-label')
        const leaderBoardContainer = document.body.querySelector('.leader-board')
        const baseTimer = document.querySelector('#timer')
        const svgBackground = baseTimer.querySelector('.base-timer')
        const svgInnerBackground = svgBackground.querySelector('.base-timer__svg')
        const svgTimeLabel = document.querySelector('#base-timer-label')

        svgBackground.classList.remove('timer-background-out')
        svgInnerBackground.classList.remove('timer-background-out')
        svgInnerBackground.classList.remove('matrix-background-out')
        baseTimer.classList.remove('matrix-color-out')
        svgBackground.classList.remove('matrix-background-out')
        matrixContainer.classList.remove('matrix-container-background-out')
        matrixContainer.classList.add('matrix-container-background-in')
        scoreContainer.classList.remove('matrix-container-background-out')
        scoreContainer.classList.add('matrix-container-background-in')
        leaderBoardContainer.classList.remove('matrix-container-background-out')
        leaderBoardContainer.classList.add('matrix-container-background-in')
        svgBackground.classList.add('matrix-background-in')
        svgInnerBackground.classList.add('matrix-background-in')
        svgBackground.classList.add('timer-background-in')
        svgInnerBackground.classList.add('timer-background-in')

        backgroundCover.classList.add('background-cover')
        backgroundCover.classList.add('matrix-background-in-delayed')
        backgroundCover.classList.remove('matrix-char-opacity')

        baseTimer.classList.add('matrix-color')
        card1.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card1.classList.remove('matrix-card-background-in')
            card1.classList.add('matrix-card')
        },3000)
        card2.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card2.classList.remove('matrix-card-background-in')
            card2.classList.add('matrix-card')
        },3000)
        card3.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card3.classList.remove('matrix-card-background-in')
            card3.classList.add('matrix-card')
        },3000)
        card4.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card4.classList.remove('matrix-card-background-in')
            card4.classList.add('matrix-card')
        },3000)
        card5.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card5.classList.remove('matrix-card-background-in')
            card5.classList.add('matrix-card')
        },3000)
        card6.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card6.classList.remove('matrix-card-background-in')
            card6.classList.add('matrix-card')
        },3000)
        card7.classList.add('matrix-card-background-in')
        setTimeout(() => {
            card7.classList.remove('matrix-card-background-in')
            card7.classList.add('matrix-card')
        },3000)
        //box7.classList.add('card-box-border-color')
        
        let s = 0
        let s2 = 0

        for (i = 0; i < 82; i++) {
            let nthChildWHI = box7.querySelector(`:nth-child(${s}).white`)
            if (nthChildWHI) {
                nthChildWHI.animate([
                    { backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(19, 56, 5)' }
                  ], {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                  });
                //nthChildWHI.classList.add('invis')
            }
            let nthChildGRA = box7.querySelector(`:nth-child(${s}).gray`)
            if (nthChildGRA) {
                //nthChildGRA.classList.add('invis-border')
                nthChildGRA.animate([
                    { borderColor: 'rgb(185, 245, 161)' }
                  ], {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                  });
            }
            let nthChildRED = box7.querySelector(`:nth-child(${s}).red`)
            if (nthChildRED) {
                //nthChildRED.classList.add('invis-border')
                nthChildRED.animate([
                    { borderColor: 'rgb(185, 245, 161)' }
                  ], {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                  });
            }
            let nthChildGRE = box7.querySelector(`:nth-child(${s}).green`)
            if (nthChildGRE) {
                //nthChildGRE.classList.add('invis-border')
                nthChildGRE.animate([
                    { borderColor: 'rgb(185, 245, 161)' }
                  ], {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                  });
            }
            let nthChildBLU = box7.querySelector(`:nth-child(${s}).blue`)
            if (nthChildBLU) {
                //nthChildBLU.classList.add('invis-border')
                nthChildBLU.animate([
                    { borderColor: 'rgb(185, 245, 161)' }
                  ], {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                  });
            }
            s++
        }

        setTimeout(() => {
            box6 = card6.querySelector('.box')
            for (i = 0; i < 82; i++) { 
                let nthChildWHI2 = box6.querySelector(`:nth-child(${s2}).white`)
                if (nthChildWHI2) {
                    nthChildWHI2.animate([
                        { backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(19, 56, 5)' }
                    ], {
                        duration: 3000,
                        easing: 'linear',
                        fill: 'forwards'
                    });
                    //nthChildWHI.classList.add('invis')
                }
                let nthChildGRA2 = box6.querySelector(`:nth-child(${s2}).gray`)
                if (nthChildGRA2) {
                    //nthChildGRA.classList.add('invis-border')
                    nthChildGRA2.animate([
                        { borderColor: 'rgb(185, 245, 161)' }
                    ], {
                        duration: 3000,
                        easing: 'linear',
                        fill: 'forwards'
                    });
                }
                let nthChildRED2 = box6.querySelector(`:nth-child(${s2}).red`)
                if (nthChildRED2) {
                    //nthChildRED.classList.add('invis-border')
                    nthChildRED2.animate([
                        { borderColor: 'rgb(185, 245, 161)' }
                    ], {
                        duration: 3000,
                        easing: 'linear',
                        fill: 'forwards'
                    });
                }
                let nthChildGRE2 = box6.querySelector(`:nth-child(${s2}).green`)
                if (nthChildGRE2) {
                    //nthChildGRE.classList.add('invis-border')
                    nthChildGRE2.animate([
                        { borderColor: 'rgb(185, 245, 161)' }
                    ], {
                        duration: 3000,
                        easing: 'linear',
                        fill: 'forwards'
                    });
                }
                let nthChildBLU2 = box6.querySelector(`:nth-child(${s2}).blue`)
                if (nthChildBLU2) {
                    //nthChildBLU.classList.add('invis-border')
                    nthChildBLU2.animate([
                        { borderColor: 'rgb(185, 245, 161)' }
                    ], {
                        duration: 3000,
                        easing: 'linear',
                        fill: 'forwards'
                    });
                }
                s2++
            }
        },1000)   

        keyPadContainer.animate([
            { borderColor: 'rgb(0,0,0)'},
            { borderColor: 'rgb(78, 230, 18)', boxShadow: 'none'}
          ], {
            duration: 3000,
            easing: 'linear',
            fill: 'forwards'
          });
        box7.animate([
            { borderColor: 'rgb(0,0,0)'},
            { borderColor: 'rgb(78, 230, 18)'}
            ], {
            duration: 3000,
            easing: 'linear',
            fill: 'forwards'
        })

        if (!playMatrixCharOnce) {

            //document.body.appendChild(backgroundCover)
            
            let matrixInterval = setInterval(() => {

                let randomCharacter2 = undefined
                let randomCharacter3 = undefined
                let randomCharacter4 = undefined
                let randomCharacter5 = undefined
                let randomCharacter6 = undefined
                let randomCharacter7 = undefined

                const matrixChar = document.createElement('div')
                matrixChar.classList.add('matrix-char')
                const matrixChar2 = document.createElement('div')
                matrixChar2.classList.add('matrix-char2')
                const matrixChar3 = document.createElement('div')
                matrixChar3.classList.add('matrix-char3')
                const matrixChar4 = document.createElement('div')
                matrixChar4.classList.add('matrix-char4')
                const matrixChar5 = document.createElement('div')
                matrixChar5.classList.add('matrix-char5')
                const matrixChar6 = document.createElement('div')
                matrixChar6.classList.add('matrix-char6')
                const matrixChar7 = document.createElement('div')
                matrixChar7.classList.add('matrix-char7')

                const randomLeft = Math.random() * 1920

                matrixChar.style.left = `${randomLeft}px`
                matrixChar2.style.left = `${randomLeft}px`
                matrixChar3.style.left =`${randomLeft}px`
                matrixChar4.style.left =`${randomLeft}px`
                matrixChar5.style.left =`${randomLeft}px`
                matrixChar6.style.left =`${randomLeft}px`
                matrixChar7.style.left =`${randomLeft}px`

                backgroundCover.appendChild(matrixChar)
                setInterval(() => {
                    const randomIndex = Math.floor(Math.random() * characters.length)
                    let randomCharacter = characters.charAt(randomIndex)
                    matrixChar.textContent = randomCharacter
                    setTimeout(() => {
                        randomCharacter2 = randomCharacter
                    },160)
                },175)
                setTimeout(() => {
                        backgroundCover.removeChild(matrixChar)
                },25000)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar2)
                    setInterval(() => {
                        matrixChar2.textContent = randomCharacter2
                        setTimeout(() => {
                            randomCharacter3 = randomCharacter2
                        },17)
                    },175)
                    setTimeout(() => {
                        backgroundCover.removeChild(matrixChar2)
                    },25000)
                },175)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar3)
                    setInterval(() => {
                        setTimeout(() => {
                            randomCharacter4 = randomCharacter3
                        },180)
                        matrixChar3.textContent = randomCharacter3
                    },175)
                    setTimeout(() => {
                            backgroundCover.removeChild(matrixChar3)
                    },25000)
                },350)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar4)
                    setInterval(() => {
                        randomCharacter5 = randomCharacter4
                        matrixChar4.textContent = randomCharacter4
                    },175)
                    setTimeout(() => {
                            backgroundCover.removeChild(matrixChar4)
                    },25000)
                },525)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar5)
                    setInterval(() => {
                        setTimeout(() => {
                            randomCharacter6 = randomCharacter5
                        },150)
                        matrixChar5.textContent = randomCharacter5
                    },175)
                    setTimeout(() => {
                            backgroundCover.removeChild(matrixChar5)
                    },25000)
                },700)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar6)
                    setInterval(() => {
                        setTimeout(() => {
                            randomCharacter7 = randomCharacter6
                        },140)
                        matrixChar6.textContent = randomCharacter6
                    },175)
                    setTimeout(() => {
                            backgroundCover.removeChild(matrixChar6)
                    },25000)
                },875)

                setTimeout(() => {
                    backgroundCover.appendChild(matrixChar7)
                    setInterval(() => {
                        matrixChar7.textContent = randomCharacter7
                    },175)
                    setTimeout(() => {
                            backgroundCover.removeChild(matrixChar7)
                    },25000)
                    playMatrixCharOnce = true
                },1050)
            },1900)
            if (wrongCard) {
                clearInterval(matrixInterval)
                setTimeout(() => {
                    wrongCard = false
                },50)
            }

            //box border flashes green..? make the matrix letters transition more smoothly. gotta work on the card titles. then that should be core game mechanics.... DONE. its all within sight
        }
    }

    function stopMatrixModeAni() {
        if (matrixModeON) {   
            
            //nextCard = true
            activateAniOnce = false
            
            document.body.classList.remove('matrix-background-in')
            document.body.classList.add('matrix-background-out')
            
            const card1 = document.body.querySelector('.card1')
            const card2 = document.body.querySelector('.card2')
            const card3 = document.body.querySelector('.card3')
            const card4 = document.body.querySelector('.card4')
            const card5 = document.body.querySelector('.card5')
            const card6 = document.body.querySelector('.card6')
            const card7 = document.body.querySelector('.card7')
            const box7 = card7.querySelector('.box')
            let box6 = card6.querySelector('.box')
            const matrixContainer = document.body.querySelector('.matrix-mode-container')
            const scoreContainer = document.body.querySelector('.score-label')
            const leaderBoardContainer = document.body.querySelector('.leader-board')
            const baseTimer = document.querySelector('#timer')
            const svgBackground = baseTimer.querySelector('.base-timer')
            const svgInnerBackground = svgBackground.querySelector('.base-timer__svg')
            const svgTimeLabel = document.querySelector('#base-timer-label')
            const backgroundCover = document.body.querySelector('.background-cover')

            svgInnerBackground.classList.remove('matrix-background-in')
            baseTimer.classList.remove('matrix-color')
            svgBackground.classList.remove('matrix-background-in')
            matrixContainer.classList.remove('matrix-container-background-in')
            matrixContainer.classList.add('matrix-container-background-out')
            setTimeout(() => {
                matrixContainer.classList.remove('matrix-container-background-out')
            },3000)
            scoreContainer.classList.remove('matrix-container-background-in')
            scoreContainer.classList.add('matrix-container-background-out')
            leaderBoardContainer.classList.remove('matrix-container-background-in')
            leaderBoardContainer.classList.add('matrix-container-background-out')
            svgBackground.classList.add('matrix-background-out')
            svgInnerBackground.classList.add('matrix-background-out')
            svgBackground.classList.add('timer-background-out')
            svgInnerBackground.classList.add('timer-background-out')
            baseTimer.classList.add('matrix-color-out')

            backgroundCover.classList.remove('matrix-background-in-delayed')
            backgroundCover.classList.add('matrix-background-out')

            function matrixCharOpacity() {
                const matrixChars = backgroundCover.querySelectorAll('div')

                matrixChars.forEach(div => {
                
                    div.animate([
                        { transform: 'translateY(3000px)', opacity: '0'}
                        ], {
                        duration: 1500,
                        easing: 'ease-in',
                        fill: 'forwards'
                    })
                })
                
                setTimeout(() => {
                    backgroundCover.classList.add('matrix-char-opacity')
                },1000)
                
            }
            matrixCharOpacity()

            if (timeUp && matrixModeON) {} else {
                    card1.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card1.classList.remove('matrix-card')
                    card1.classList.remove('matrix-card-background-out')
                    card1.classList.add('card1')
                },3000)
                card2.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card2.classList.remove('matrix-card')
                    card2.classList.remove('matrix-card-background-out')
                    card2.classList.add('card2')
                },3000)
                card3.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card3.classList.remove('matrix-card')
                    card3.classList.remove('matrix-card-background-out')
                    card3.classList.add('card3')
                },3000)
                card4.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card4.classList.remove('matrix-card')
                    card4.classList.remove('matrix-card-background-out')
                    card4.classList.add('card4')
                },3000)
                card5.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card5.classList.remove('matrix-card')
                    card5.classList.remove('matrix-card-background-out')
                    card5.classList.add('card5')
                },3000)
                card6.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card6.classList.remove('matrix-card')
                    card6.classList.remove('matrix-card-background-out')
                    card6.classList.add('card6')
                },3000)
                card7.classList.add('matrix-card-background-out')
                setTimeout(() => {
                    card7.classList.remove('matrix-card')
                    card7.classList.remove('matrix-card-background-out')
                    card7.classList.add('card7')
                },3000)
            }
            matrixModeON = false

            keyPadContainer.animate([
                { borderColor: 'rgb(78, 230, 18)'},
                { borderColor: 'rgb(0,0,0)', boxShadow: '10px 5px 5px rgba(138, 138, 138, 0.719)'}
                ], {
                duration: 1000,
                easing: 'linear',
                fill: 'forwards'
            })

            box7.animate([
                { borderColor: 'rgb(78, 230, 18)'},
                {borderColor: 'rgb(0,0,0)'}
                ], {
                duration: 1000,
                easing: 'linear',
                fill: 'forwards'
            })

            box6.animate([
                { borderColor: 'rgb(78, 230, 18)'},
                {borderColor: 'rgb(0,0,0)'}
                ], {
                duration: 1000,
                easing: 'linear',
                fill: 'forwards'
            })
    
            let s = 0
            let s2 = 0
        
            for (i = 0; i < 82; i++) {
                let nthChildWHI = box7.querySelector(`:nth-child(${s}).white`)
                if (nthChildWHI) {
                    nthChildWHI.animate([
                        { backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgb(0,0,0)' }
                        ], {
                        duration: 1000,
                        easing: 'linear',
                        fill: 'forwards'
                        });
                    //nthChildWHI.classList.add('invis')
                }
                let nthChildGRA = box7.querySelector(`:nth-child(${s}).gray`)
                if (nthChildGRA) {
                    //nthChildGRA.classList.add('invis-border')
                    nthChildGRA.animate([
                        { borderColor: 'black' }
                        ], {
                        duration: 1000,
                        easing: 'linear',
                        fill: 'forwards'
                        });
                }
                let nthChildRED = box7.querySelector(`:nth-child(${s}).red`)
                if (nthChildRED) {
                    //nthChildRED.classList.add('invis-border')
                    nthChildRED.animate([
                        { borderColor: 'black' }
                        ], {
                        duration: 1000,
                        easing: 'linear',
                        fill: 'forwards'
                        });
                }
                let nthChildGRE = box7.querySelector(`:nth-child(${s}).green`)
                if (nthChildGRE) {
                    //nthChildGRE.classList.add('invis-border')
                    nthChildGRE.animate([
                        { borderColor: 'black' }
                        ], {
                        duration: 1000,
                        easing: 'linear',
                        fill: 'forwards'
                        });
                }
                let nthChildBLU = box7.querySelector(`:nth-child(${s}).blue`)
                if (nthChildBLU) {
                    //nthChildBLU.classList.add('invis-border')
                    nthChildBLU.animate([
                        { borderColor: 'black' }
                        ], {
                        duration: 1000,
                        easing: 'linear',
                        fill: 'forwards'
                        });
                }
                s++
            }
    
            setTimeout(() => {
                box6 = card6.querySelector('.box')
                for (i = 0; i < 82; i++) { 
                    let nthChildWHI2 = box6.querySelector(`:nth-child(${s2}).white`)
                    if (nthChildWHI2) {
                        nthChildWHI2.animate([
                            { backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)' }
                        ], {
                            duration: 1000,
                            easing: 'linear',
                            fill: 'forwards'
                        });
                        //nthChildWHI.classList.add('invis')
                    }
                    let nthChildGRA2 = box6.querySelector(`:nth-child(${s2}).gray`)
                    if (nthChildGRA2) {
                        //nthChildGRA.classList.add('invis-border')
                        nthChildGRA2.animate([
                            { borderColor: 'black' }
                        ], {
                            duration: 1000,
                            easing: 'linear',
                            fill: 'forwards'
                        });
                    }
                    let nthChildRED2 = box6.querySelector(`:nth-child(${s2}).red`)
                    if (nthChildRED2) {
                        //nthChildRED.classList.add('invis-border')
                        nthChildRED2.animate([
                            { borderColor: 'black' }
                        ], {
                            duration: 1000,
                            easing: 'linear',
                            fill: 'forwards'
                        });
                    }
                    let nthChildGRE2 = box6.querySelector(`:nth-child(${s2}).green`)
                    if (nthChildGRE2) {
                        //nthChildGRE.classList.add('invis-border')
                        nthChildGRE2.animate([
                            { borderColor: 'black' }
                        ], {
                            duration: 1000,
                            easing: 'linear',
                            fill: 'forwards'
                        });
                    }
                    let nthChildBLU2 = box6.querySelector(`:nth-child(${s2}).blue`)
                    if (nthChildBLU2) {
                        //nthChildBLU.classList.add('invis-border')
                        nthChildBLU2.animate([
                            { borderColor: 'black' }
                        ], {
                            duration: 1000,
                            easing: 'linear',
                            fill: 'forwards'
                        });
                    }
                    s2++
                }
                playMatrixCharOnce = false
            },1000)  
        }
    }
    
    let originalCountDown = false

    function startButton() {
            let topCard = document.querySelector('.card7')
            startConstraint.classList.add('start-constraint')
            topCard.appendChild(startConstraint)
            const startButton = document.createElement('button')
            startButton.classList.add('start-button')
            startButton.classList.add('start-button-in')
            const startPic = document.createElement('img')
            startPic.src = 'img/playbutton.gif'
            startPic.setAttribute('draggable', 'false')
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
                    
                    if (!originalCountDown) {
                        startButtonSound()
                        originalCountDown = true
                    } else {
                        startButtonSound2()
                    }
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
        
        if (scoreNumber >= 10 && scoreNumber < 20) {
            if (!level2ON) {   
                const level2 = document.createElement('div')
                level2.classList.add('level-2')
                level2.textContent = 'LEVEL2'
                document.body.appendChild(level2)
                setTimeout(() => {
                    document.body.removeChild(level2)
                },7000)
                level2ON = true
            }
        } else if (scoreNumber >= 20 && scoreNumber < 30) {
            if (!level3ON) { 
                const level3 = document.createElement('div')
                level3.classList.add('level-3')
                level3.textContent = 'LEVEL3'
                document.body.appendChild(level3)
                setTimeout(() => {
                    document.body.removeChild(level3)
                },7000)
                level3ON = true
            }
        } else if (scoreNumber >= 30 && scoreNumber < 40) {
            if (!level4ON) { 
                const level4 = document.createElement('div')
                level4.classList.add('level-4')
                level4.textContent = 'LEVEL4'
                document.body.appendChild(level4)
                setTimeout(() => {
                    document.body.removeChild(level4)
                },7000)
                level4ON = true
            }
        } else if (scoreNumber >= 40) {
            if (!level5ON) { 
                const level5 = document.createElement('div')
                level5.classList.add('level-5')
                level5.textContent = 'LEVEL5'
                document.body.appendChild(level5)
                setTimeout(() => {
                    document.body.removeChild(level5)
                },7000)
                level5ON = true
            }
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

            if(timeLeft===1){
                setTimeout(() => {
                    let topCard = document.querySelector('.card7')
                    let squareCover = document.createElement('div')
                    squareCover.classList.add('start-constraint-invis')
                    topCard.appendChild(squareCover)
                },500)
            }
            if(timeLeft===0){
                onTimesUp()
            }
        },1000)
    }

    function onTimesUp() {
        
        //stopEverything = true
        timeUp = true

        stopMatrixModeAni()

        timeUp = false
        correctCard = 0
        correctCardCounter()

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
        
        if (matrixModeON) {
            setTimeout(() => {
                card7.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)' }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            })
            setTimeout(() => {
                card6.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)'  }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },50)
            setTimeout(() => {
                card5.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)' }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },100)
            setTimeout(() => {
                card4.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)'  }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },150)
            setTimeout(() => {
                card3.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)'  }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },200)
            setTimeout(() => {
                card2.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)'  }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },250)
            setTimeout(() => {
                card1.animate([
                    { transform: 'translateX(-297px) translateY(-335px)', position: 'absolute' },
                    { transform: 'translateX(-297px) translateY(-2000px)', color: 'rgb(0,0,0)', backgroundColor: 'rgb(255,255,255)', borderColor: 'rgb(0,0,0)'  }
                  ], {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                  });
            },300)
        } else {
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
        }

        setTimeout(() => {
            document.body.removeChild(card7)
            document.body.removeChild(card6)
            document.body.removeChild(card5)
            document.body.removeChild(card4)
            document.body.removeChild(card3)
            document.body.removeChild(card2)
            document.body.removeChild(card1)
            setTimeout(() => {
                let card7buffer = document.querySelector('.card7')
                let card6buffer = document.querySelector('.card6')
                let card5buffer = document.querySelector('.card5')
                let card4buffer = document.querySelector('.card4')
                let card3buffer = document.querySelector('.card3')
                let card2buffer = document.querySelector('.card2')
                let card1buffer = document.querySelector('.card1')

                if (card7buffer) {
                    document.body.removeChild(card7buffer)
                } else if (card6buffer) {
                    document.body.removeChild(card6buffer)
                } else if (card5buffer) {
                    document.body.removeChild(card5buffer)
                } else if (card4buffer) {
                    document.body.removeChild(card4buffer)
                } else if (card3buffer) {
                    document.body.removeChild(card3buffer)
                } else if (card2buffer) {
                    document.body.removeChild(card2buffer)
                } else if (card1buffer) {
                    document.body.removeChild(card1buffer)
                }
            },500)
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
            document.body.appendChild(dancingMan)
            stickMan = true
            //stopEverything = false
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
                            leaderBoardsIntake()

                        },300)
                    },550)
                },500)
            }, 250) 
        })
        
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












        //_________________________________________________________________________________

        /*
         <div id="animation-container">
        <div id="animation-container2" class="fade">
            <img src="img/headset3.png" alt="" class="" id="pic1">
            <span class="fade" id="short">This is best experienced with Headphones</span>
            <button id="consent" class="fade button-infinite">I Understand</button>
        </div> 
        <div id="animation"></div>   
    </div>
    <!--Below is the custom SVG that I needed for the fractalnoise filter. I might consider deleting it and only using it for the intro animation. I'll find out soon if i will need it again.-->
    <svg style="display: none;" id="svg">
        <defs>
            <filter id="noise">
                <feTurbulence 
                    baseFrequency="0.7,0.8"
                    seed="0"
                    type="fractalNoise"
                    result="static"
                >
                 <animate 
                        attributeName="seed"
                        values="0;100;0"
                        dur="40ms"
                        repeatCount="indefinite"
                ></animate>
                </feTurbulence>
                <feDisplacementMap 
                in="SourceGraphic" 
                in2="static" 
                scale="20"
                >
                <animate 
                attributeName="scale"
                values="0;60;0"
                dur="40ms"
                repeatCount="indefinite"
                ></animate>
                />
            </filter>
        </defs>
    </svg>
    <script>
        

    </script>
        */

    //________________________________________________________________________________________________________________________________