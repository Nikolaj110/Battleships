

document.addEventListener('DOMContentLoaded', () => {
    const ships = document.querySelectorAll('.ship')
    const rutor = document.querySelectorAll('.ruta')




    //x = element.getAttribute("data-x");
//y = element.getAttrbiute("data-y");

ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
ruta => ruta.addEventListener('dragover', dragOver)
ruta => ruta.addEventListener('dragenter', dragEnter)
ruta => ruta.addEventListener('dragleave', dragLeave)
ruta => ruta.addEventListener('drop', drarDrop)
ruta => ruta.addEventListener('dragend', dragEnd)





let selectedShipNameWithIndex
let draggedShip
let draggedShipLength


ships.forEach(ship => ship.addEventListener('mousedown', (e) =>{
    selectedShipNameWithIndex = e.target.id 
    console.log(selectedShipNameWithIndex)
}))


function dragStart(){
    draggedShip = this
    draggedShipLength = draggedShip.length
    console.log(draggedShip)
}
})




/*

document.addEventListener('DOMContentLoaded', () =>{
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []
    const computerSquares = []

    const width = 10


    function createBoard(grid, squares){
    for (let i = 0; i < width*width; i++){
        const square = document.createElement('div')
        squares.dataset.id = i
        grid.appendChild(square)
        squares.push(square) 
    }
}

createBoard(userGrid, userSquares)
createBoard(computerGrid, computerSquares)





})

*/



