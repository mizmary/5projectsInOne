const board = document.querySelector('#board')
const SQUARES_NUMBER = 800
const colors = ['#7ef2cf', '#d997fc', '#fa9ba1', '#f0ec9e', '#b3f5a4', '#99acf7', '#fcc49d']
const btn = document.querySelector('button')

for (let i=0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
