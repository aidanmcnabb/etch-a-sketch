// im going to need an array of objects containing a title and a nested array that contains metadata for each square.
// random choice will choose a pair
// somehow I will have to map the metadata to the box. likely a for loop or for each of the array?


// if z-index value is <= 2
function squareSound() {
    var squareClick = new Audio("audio/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3")
    squareClick.play()
}


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
                        
                        //square.style.backgroundColor = 'red'
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
createCards()
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
