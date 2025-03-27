/*
perfect girl
russian song
probably a techno soundtrack
when game over soundtrack stops a PE alaram plays

So what I planned was to have multiple drawings that you must complete in a stack that are swiped in and out after you complete each one.

the 'card' is the master container div
the 'box' is the secondary container div
the 'squares' are the multiple interactable tiles

while playing, the stack should NOT have all of the 'boxes' & 'squares' rendered, only the current on the first 'card' and the 'card' after it
maybe an array of objects will be used to store the data of all the unique card types with a mathRandom function to choose the numbered name of an object at random
the unique card style will have a certain background color for certain hilighted squares
the player will have 4 colors to choose from with the keyboard, likely wasd, with each key press corresponding to a selected color
as the game gets longer it introduces those colors one by one until all 4 colors are introduced
im thinking a master game function that constantly replineshes the stack while also tracking the inputs of the player
inside the scope of the master game function, the input will be sent to a boolean function to check if right tile and the corect color is picked.
the output of the boolean function will be sent to score, timer, hot-o-meter, & stickman animation
score will count each completed card
at the start of the game i would like the opacity of the 'box' and the 'squares' to slowly fade in, or if i can use the white noise filter in an animation time

first off, attempt to make a single card, with a box & squares
second, give the squares input
*/

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
        const cardStartUp = setInterval(() => {
            if (c <= 7) {
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
                
                //i will probably have to seperate the outer loop from the inner nested loop so i can only load 2 cards at a time.  if i dont I will have 80*7 square divs and that will probably fuck some computers up. maybe its not that intensive im not sure yet. maybe theres a way to check the location in the DOM tree? like if things are being deleted and added bottom up, maybe i can just use the order of the DOM tree to dictate when boxes should load and then i wouldn't have to take out the nested loop. now that im thinking about it there are a ton of times i would need to manipulate the index of each card in the DOM tree 

                // okay so i need to move all z-indexs' up 1 according to DOM tree loaction.  i also need it to only load two boxes at any given time.  
                // array.prototype.splice.call()
                // array.prototype.indexOf()
                // array.from()
                // one of these might point me in the right direction to be able to acomplish what im trying to do 
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
                    square.classList.add('square')  //making that squares
                    square.addEventListener('mouseover',  () => {
                        square.classList.add('mouseover')   //making squares interactable
                    })
                    square.addEventListener('mouseout', () => {
                        square.classList.remove('mouseover')
                        
                    })
                    square.setAttribute('onclick', 'squareSound()')
                    box.appendChild(square)
                    
                    
                    if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container+
                }
                
                c++
            } else {clearInterval(cardStartUp)}    
        }, 120)
    }, 1000)        
    
  
}
createCards()

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

        // console.log(titleTextQuery.textContent)
        //const numberofDivs = document.querySelectorAll('.square').length
        //const cardLocation = parseInt(card.style.top)
        //if (currentZIndex <= 7) { 
        //if (currentZIndex <= 2) {