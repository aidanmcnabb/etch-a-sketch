// maybe a z-index based variable that changes based on the z-index?
// if z-index value is <= 2


function createCards() {
    
    const box = document.createElement('div')
    const cardTitle = document.createElement('header')
    

    for (c = 1; c < 7; c++) {
        const card = document.createElement('div')
        const currentZIndex = parseInt(card.style.zIndex) || 0
        const cardLocation = parseInt(card.style.top)
        card.classList.add('card')
        if (currentZIndex <= 7) {  

            document.body.appendChild(card)
            cardTitle.textContent = 'Drawing!'
            cardTitle.classList.add('title')
            card.appendChild(cardTitle)
            if (currentZIndex <= 2) {    
                box.classList.add('box')
                card.appendChild(box)
                function createSquares() {
                    for (i = 1; i < 100; i++) {
                        const square = document.createElement('div')
                        square.classList.add('square')
                        square.addEventListener('mouseover',  () => {
                            square.classList.add('mouseover')
                        })
                        square.addEventListener('mouseout', () => {
                            square.classList.remove('mouseover')
                        })
                        square.addEventListener('click', () => {
                            square
                        })
                        box.appendChild(square)
                        
                        const numberofDivs = document.querySelectorAll('.box > div').length
                        console.log(numberofDivs)
                        if (numberofDivs >= 76) {break}
                    } 
            
                }
                createSquares()
            }
            card.setAttribute('style', `z-index: ${currentZIndex + 1}`)
            console.log(currentZIndex)
            console.log(cardLocation)
        }    
    }
}
createCards()