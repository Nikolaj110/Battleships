/*

//x = element.getAttribute("data-x");
//y = element.getAttrbiute("data-y");

document.addEventListener('DOMContentLoaded', () => {
    const ships = document.querySelectorAll('.ship')
    const rutor = document.querySelectorAll('.ruta')




    

 ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
 ruta => ruta.addEventListener('dragover', dragOver)
 ruta => ruta.addEventListener('dragenter', dragEnter)
 ruta => ruta.addEventListener('dragleave', dragLeave)
 ruta => ruta.addEventListener('drop', dragDrop)
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
    console.log(draggedShipLength)
 }

 function dragOver(e){
    e.preventDefault()
 }

 function dragEnter(e){
    e.preventDefault()
 }

 function dragLeave(){
    console.log('drag leave')
 }

 function dragDrop(){
    let shipNameWithLastId = draggedShip.lastChild.id
    let shipClass = shipNameWithLastId.slice(0,-2)
    console.log(shipClass)
 }

 function dragEnd(){
     
 }






})







*/

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
        square.dataset.id = i
        grid.appendChild(square)
        squares.push(square) 
    }
 }

 createBoard(userGrid, userSquares)
 createBoard(computerGrid, computerSquares)



 const shipArray = [
    {
         name: 'destroyer',
         directions:[
             [0, 1]
             [0, width]
         ]
    },
    {
         name: 'submarine',
         directions:[
             [0, 1, 2]
             [0, width, width*2]
         ]
    },
    {
         name:'cruiser',
         directions:[
             [0, 1, 2]
             [0, width, width*2]
         ]
    },
    {
         name:'battleship',
         directions:[
             [0, 1, 2, 3]
             [0, width, width*2, width*3]
         ]
    },
    {
         name:'carrier',
         directions:[
             [0, 1, 2, 3, 4]
             [0, width, width*2, width*3, width*4]
         ]
    },
    
 ]


 function generate(ship){
 let randomDirection = Math.floor(Math.random() * ship.directions.length)
 let current = ship.directions[randomDirection]
 if(randomDirection === 0) direction = 1
 if(randomDirection === 1) direction = 10
 console.log(directions[0])
 let x = ship.directions[0].length
 let randomStart = Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction))

 const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
 const isAtRigthEdge = current.some(index => (randomStart + index) % width === width - 1)
 const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)
 console.log(isTaken)

 if(!isTaken && !isAtRigthEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))

 else generate(ship)
 }

 generate(shipArray[0])
 generate(shipArray[1])




})





