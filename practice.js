// im going to need an array of objects containing a title and a nested array that contains metadata for each square.
// random choice will choose a pair
// somehow I will have to map the metadata to the box. likely a for loop or for each of the array?


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
                
                //i will probably have to seperate the outer loop from the inner nested loop so i can only load 2 cards at a time.  if i dont I will have 80*7 square divs and that will probably fuck some computers up. maybe its not that intensive im not sure yet. maybe theres a way to check the location in the DOM tree? like if things are being deleted and added bottom up, maybe i can just use the order of the DOM tree to dictate when boxes should load and then i wouldn't have to take out the nested loop. now that im thinking about it there are a ton of times i would need to manipulate the index of each card in the DOM tree 

                // okay so i need to move all z-indexs' up 1 according to DOM tree loaction.  i also need it to only load two boxes at any given time.  
                // array.prototype.splice.call()
                // array.prototype.indexOf()
                // array.from()
                // one of these might point me in the right direction to be able to acomplish what im trying to do 

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
