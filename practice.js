// im going to need an array of objects containing a title and a nested object that contains metadata for each square.
// random choice will choose a pair


// if z-index value is <= 2


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
                
                cardTitle.textContent = 'Drawing!'
                cardTitle.classList.add('title')
                card.appendChild(cardTitle)
                box.classList.add('box')
                card.appendChild(box)
            
                
                innerLoop: for (i = 1; i < 100; i++) {
                    const square = document.createElement('div')
                    square.classList.add('square')  //making that squares
                    square.addEventListener('mouseover',  () => {
                        square.classList.add('mouseover')   //making squares interactable
                    })
                    square.addEventListener('mouseout', () => {
                        square.classList.remove('mouseover') //
                    })
                    square.addEventListener('click', () => {
                        square  //will add soon
                    })
                    box.appendChild(square)
                    
                    
                    if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container+
                }
                c++
            } else {clearInterval(cardStartUp)}    
        }, 120)
    }, 1000)        
    
}
createCards()

        //const numberofDivs = document.querySelectorAll('.square').length
        //const cardLocation = parseInt(card.style.top)
        //if (currentZIndex <= 7) { 
        //if (currentZIndex <= 2) {
        //function createSquares() {
        //}              
        //createSquares()
        // }
        //card.setAttribute('style', `z-index: ${currentZIndex + 1}`)
        //console.log(currentZIndex)
        //console.log(cardLocation)
       // }    
