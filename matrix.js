

/*

document.body.classList.add('black')

characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&ßµø¤¿ƒ†×‡▓▒░¬⌐◙○♦▼▲↔∟▬◄►☼º┼┬┴╛╜╡╢║▐▌∞≡≈∩εΩΦΣ■'


setInterval(() => {

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
    console.log(randomLeft)

    matrixChar.style.left = `${randomLeft}px`
    matrixChar2.style.left = `${randomLeft}px`
    matrixChar3.style.left =`${randomLeft}px`
    matrixChar4.style.left =`${randomLeft}px`
    matrixChar5.style.left =`${randomLeft}px`
    matrixChar6.style.left =`${randomLeft}px`
    matrixChar7.style.left =`${randomLeft}px`

    document.body.appendChild(matrixChar)
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * characters.length)
        let randomCharacter = characters.charAt(randomIndex)
        matrixChar.textContent = randomCharacter
        setTimeout(() => {
            randomCharacter2 = randomCharacter
        },160)
    },175)
    setTimeout(() => {
        document.body.removeChild(matrixChar)
    },25000)

    setTimeout(() => {
        document.body.appendChild(matrixChar2)
        setInterval(() => {
            matrixChar2.textContent = randomCharacter2
            setTimeout(() => {
                randomCharacter3 = randomCharacter2
            },17)
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar2)
        },25000)
    },175)

    setTimeout(() => {
        document.body.appendChild(matrixChar3)
        setInterval(() => {
            setTimeout(() => {
                randomCharacter4 = randomCharacter3
            },180)
            matrixChar3.textContent = randomCharacter3
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar3)
        },25000)
    },350)

    setTimeout(() => {
        document.body.appendChild(matrixChar4)
        setInterval(() => {
            randomCharacter5 = randomCharacter4
            matrixChar4.textContent = randomCharacter4
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar4)
        },25000)
    },525)

    setTimeout(() => {
        document.body.appendChild(matrixChar5)
        setInterval(() => {
            setTimeout(() => {
                randomCharacter6 = randomCharacter5
            },150)
            matrixChar5.textContent = randomCharacter5
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar5)
        },25000)
    },700)

    setTimeout(() => {
        document.body.appendChild(matrixChar6)
        setInterval(() => {
            setTimeout(() => {
                randomCharacter7 = randomCharacter6
            },140)
            matrixChar6.textContent = randomCharacter6
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar6)
        },25000)
    },875)

    setTimeout(() => {
        document.body.appendChild(matrixChar7)
        setInterval(() => {
            matrixChar7.textContent = randomCharacter7
        },175)
        setTimeout(() => {
            document.body.removeChild(matrixChar7)
        },25000)
    },1050)

},2000)
*/

//im thinking the number animation isnt smooth, its step end. so parent div is fixed, create a child div, child div is absolute so it doesnt translate when the parent translates.  that might create issues with the size of the screen changing, like if the console is opened on the side. we'll see though maybe i can have the both fixed and it not affect anything.  so each end step, child div is created with its own animation time for opacity. at next end step, parent trnaslates down and is now a new letter. new child div has new letter as well. this will all be in setInterval.

/*
const randomIndex = Math.floor(Math.random() * characters.length)
let randomCharacter = characters.charAt(randomIndex)
*/

/*
setTimeout(() => {
    document.body.removeChild(matrixChar)
},1225)
*/   
        