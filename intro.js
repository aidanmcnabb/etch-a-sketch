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
        }

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