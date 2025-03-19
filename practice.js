// maybe a z-index based variable that changes based on the z-index?
// if z-index value is <= 2


function createCards() {
    
    // if ((cardnumber) === (arraynumber)) {color = (arraycolor)}
    
    let cardZIndex = 7

    outerLoop: for (c = 1; c <= 7; c++) {
        const box = document.createElement('div')
        const cardTitle = document.createElement('header')
        const card = document.createElement('div')
        card.classList.add('card')

        card.style.zIndex = cardZIndex-- //making each card a lower z-index with each iteration
        console.log(card.style.zIndex)

        document.body.appendChild(card)
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
            
            
            if (i === 81) {break innerLoop} //breaking innerLoop after quares fill up container
        }
        
        
        
        
    }
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
