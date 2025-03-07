        const animationContainer = document.querySelector('#animation-container')
        const animationVisual = document.querySelector('#animation')

        const letterArray = ['E', 't', 'c', 'h', '-', 'a', '-', 's', 'k', 'e', 't', 'c', 'h', '!', 'B', 'y', ' ', 'A', 'i', 'd', 'a', 'n', ' ', 'M', 'c', 'n', 'a', 'b', 'b', '.', '.', '.', 'E', 'n', 'j', 'o', 'y', ' ', ':', ')']

        let mySound = new Audio('audio/quick-mechanical-keyboard-using-enter-14390.mp3')

        function playMySound() {
            mySound.play()
        }

        function absoluteTimer(element, array) {
            //element.textContent = ''
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
            setTime(14780)  
            setTime(14880)
            //clearTimeout(timeoutId)
             
            
            
        }

        
        
        

        
        
            
           
            
            
        
        
       


        /*
        const pickDelay = (array) => {
                for (i = 0; i < array.length; i++) {
                    let delay = array[i]
                }
            }
        
        
        height: 4rem;
        width: 3px;
        background-color: black;

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