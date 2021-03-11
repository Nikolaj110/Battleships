

//x = element.getAttribute("data-x");
//y = element.getAttrbiute("data-y");

document.addEventListener('DOMContentLoaded', () => {
    const ships = document.querySelectorAll('.skepp')
    const rutor = document.querySelectorAll('.ruta')
    const rotateButton = document.querySelector('#rotate')
    const skepp1 = document.querySelector('.skepp-1')
    const skepp2 = document.querySelector('.skepp-2')
    const skepp3 = document.querySelector('.skepp-3')
    const skepp4 = document.querySelector('.skepp-4')
    const skepp5 = document.querySelector('.skepp-5')
    let isHorizontal = true
    const displayGrid = document.querySelector('.grid-display')
    const underText = document.querySelector('#undertext')
    






    function rotate(){
     if(isHorizontal){
         skepp1.classList.toggle('skepp-1-vertikal')
         skepp2.classList.toggle('skepp-2-vertikal')
         skepp3.classList.toggle('skepp-3-vertikal')
         skepp4.classList.toggle('skepp-4-vertikal')
         skepp5.classList.toggle('skepp-5-vertikal')
         displayGrid.classList.toggle('grid-display-vertikal')
         isHorizontal = false
         console.log(isHorizontal)
         return
         

     }
     if(!isHorizontal){
         skepp1.classList.toggle('skepp-1-vertikal')
         skepp2.classList.toggle('skepp-2-vertikal')
         skepp3.classList.toggle('skepp-3-vertikal')
         skepp4.classList.toggle('skepp-4-vertikal')
         skepp5.classList.toggle('skepp-5-vertikal')
         displayGrid.classList.toggle('grid-display-vertikal')
         isHorizontal = true
         console.log(isHorizontal)
         return
     }
 }


 rotateButton.addEventListener('click', rotate)



    

 ships.forEach(skepp => skepp.addEventListener('dragstart', dragStart))
 rutor.forEach(ruta => ruta.addEventListener('dragover', dragOver))
 rutor.forEach(ruta => ruta.addEventListener('dragenter', dragEnter))
 rutor.forEach(ruta => ruta.addEventListener('dragleave', dragLeave))
 rutor.forEach(ruta => ruta.addEventListener('drop', dragDrop))
 rutor.forEach(ruta => ruta.addEventListener('dragend', dragEnd))





 let selectedShipNameWithIndex
 let valtSkepp
 let skeppLangd


 ships.forEach(skepp => skepp.addEventListener('mousedown', (e) =>{
    selectedShipNameWithIndex = e.target.id 
    console.log(selectedShipNameWithIndex)
 }))


 function dragStart(){
    valtSkepp = this
    skeppLangd = this.childNodes.length
    console.log(valtSkepp)
    console.log(skeppLangd)
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

 function dragDrop() {
     let tempX = parseInt(this.getAttribute('data-x'))
     let tempY = parseInt(this.getAttribute('data-y'))
     let valdRuta = (tempX+(tempY*10))
     console.log('valdRuta är '+valdRuta)
     let skeppMedSistaId = valtSkepp.lastChild.id
     console.log(skeppMedSistaId)
     let shipClass = skeppMedSistaId.slice(0, -2)
     shipClass = shipClass.replace('-', '')
     console.log(shipClass)
     let lastShipIndex = parseInt(skeppMedSistaId.substr(-1))
     console.log(this)
     let skeppSistaX = skeppLangd + tempX
     let skeppSistaY = lastShipIndex + tempY
     skeppSistaId = valtSkepp + skeppLangd
     const forbjudnaXRader = [0, 1, 2, 3]
     const forbjudnaYRader = [9, 8, 7, 6]
     
     console.log(skeppSistaId)
     selectedShipIndex = parseInt(selectedShipNameWithIndex.slice(-1))

     skeppSistaId = skeppSistaId - selectedShipIndex
     console.log(skeppSistaId)
     console.log(skeppLangd)
     console.log(tempX)
     console.log(isHorizontal)
     if(isHorizontal && tempX<(11-skeppLangd)){
         for (let i = 0; i < skeppLangd; i++) {
             rutor[(tempX+i)+(tempY*10)].classList.add('tagen', shipClass)
            }
        } else if(!isHorizontal && tempY<(11-skeppLangd)){
         for (let i = 0; i < skeppLangd; i++) {
             rutor[(tempX)+((i+tempY)*10)].classList.add('tagen', shipClass)
            }
        } else return

        displayGrid.removeChild(valtSkepp)
    }

 function dragEnd(){
     console.log('dragend')
 }
 rutor.forEach(square => square.addEventListener('click', function(e){
    revealSquare(square)
    }))

 let skepp1Count = 0
 let skepp2Count = 0
 let skepp3Count = 0
 let skepp4Count = 0
 let skepp5Count = 0


 function revealSquare(square){
     if(!square.classList.contains('boom')){
         if(square.classList.contains('skepp1')) skepp1Count++
         if(square.classList.contains('skepp2')) skepp2Count++
         if(square.classList.contains('skepp3')) skepp3Count++
         if(square.classList.contains('skepp4')) skepp4Count++
         if(square.classList.contains('skepp5')) skepp5Count++
     }

     if(square.classList.contains('tagen')) {
         square.classList.add('boom')
     } else{
         square.classList.add('miss')
     }
     checkForWins()
 }

 let totalPoang

 function checkForWins(){
     if(skepp1Count == 2){
         totalPoang = totalPoang + 1
     }
     if(skepp2Count == 3){
        totalPoang = totalPoang + 1
     }
     if(skepp3Count == 3){
         totalPoang = totalPoang + 1
     }
     if(skepp4Count == 4){
         totalPoang = totalPoang + 1
     }
     if(skepp5Count == 5){
         totalPoang = totalPoang + 1
     }

     if((totalPoang) === 5){
         undertext.innerHTML = 'DU VANN'
     }

 }





})







/*

document.addEventListener('DOMContentLoaded', () =>{
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
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
    let isHorizontal = true
    let isGameOver = false
    let currentPlayer = 'user'

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
             [0, 1],
             [0, width]
         ]
    },
    {
         name: 'submarine',
         directions:[
             [0, 1, 2],
             [0, width, width*2]
         ]
    },
    {
        name: 'cruiser',
        directions:[
             [0, 1, 2],
             [0, width, width*2]
         ]
    },
    {
        name: 'battleship',
        directions:[
             [0, 1, 2, 3],
             [0, width, width*2, width*3]
        ]
    },
    {
        name:'carrier',
        directions: [
             [0, 1, 2, 3, 4],
             [0, width, width*2, width*3, width*4]
        ]
    } 
 ]


 function generate(ship){
 let randomDirection = Math.abs(Math.floor(Math.random() * ship.directions.length))
 let current = ship.directions[randomDirection]
 if(randomDirection === 0) direction = 1
 if(randomDirection === 1) direction = 10
 let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

 const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
 const isAtRigthEdge = current.some(index => (randomStart + index) % width === width - 1)
 const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)

 if(!isTaken && !isAtRigthEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))

 else generate(ship)
 }

 generate(shipArray[0])
 generate(shipArray[1])
 generate(shipArray[2])
 generate(shipArray[3])
 generate(shipArray[4])


 function rotate(){
     if(isHorizontal){
         destroyer.classList.toggle('destroyer-container-vertical')
         submarine.classList.toggle('submarine-container-vertical')
         cruiser.classList.toggle('cruiser-container-vertical')
         battleship.classList.toggle('battleship-container-vertical')
         carrier.classList.toggle('carrier-container-vertical')
         isHorizontal = false
         console.log(isHorizontal)
         return
     }
     if(!isHorizontal){
         destroyer.classList.toggle('destroyer-container-vertical')
         submarine.classList.toggle('submarine-container-vertical')
         cruiser.classList.toggle('cruiser-container-vertical')
         battleship.classList.toggle('battleship-container-vertical')
         carrier.classList.toggle('carrier-container-vertical')
         isHorizontal = true
         console.log(isHorizontal)
         return
     }
 }


 rotateButton.addEventListener('click', rotate)


 ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
 userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
 userSquares.forEach(square => square.addEventListener('dragover', dragOver))
 userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
 userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
 userSquares.forEach(square => square.addEventListener('drop', dragDrop))
 userSquares.forEach(square => square.addEventListener('dragend', dragEnd))

 let selectedShipNameWithIndex
 let draggedShip
 let draggedShipLength

 ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
     selectedShipNameWithIndex = e.target.id
     console.log(selectedShipNameWithIndex)
 }))


 function dragStart(){
    draggedShip = this
    draggedShipLength = this.childNodes.length
    console.log(draggedShip)
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

 function dragDrop() {
     let shipNameWithLastId = draggedShip.lastChild.id
     let shipClass = shipNameWithLastId.slice(0, -2)
     console.log(shipClass)
     let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
     let shipLastId = lastShipIndex + parseInt(this.dataset.id)
     console.log(shipLastId)
     const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,12,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
     const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]

     let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10*lastShipIndex)
     let newNotAllowedVertical = notAllowedVertical.splice(0, 10*lastShipIndex)
     selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))

     shipLastId = shipLastId - selectedShipIndex
     console.log(shipLastId)

     if(isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)){
         for (let i = 0; i < draggedShipLength; i++) {
             userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', shipClass)
            }
        } else if(!isHorizontal && !newNotAllowedVertical.includes(shipLastId)){
         for (let i = 0; i < draggedShipLength; i++) {
             userSquares[parseInt(this.dataset.id) - selectedShipIndex + width*i].classList.add('taken', shipClass)
            }
        } else return

        displayGrid.removeChild(draggedShip)
    }

 function dragEnd(){
     console.log('dragend')
 }



 function playGame(){
     if(isGameOver) return
     if(currentPlayer === 'user'){
            turnDisplay.innerHTML ='Your Go'
            console.log('spelaren kör')
            computerSquares.forEach(square => square.addEventListener('click', function(e){
            revealSquare(square)
         }))
     }
     if(currentPlayer === 'computer'){
         turnDisplay.innerHTML = 'Computer Go'
         computerGo()
     }
     console.log('färdig')
 }
 startButton.addEventListener('click', playGame)

 let destroyerCount = 0
 let submarineCount = 0
 let cruiserCount = 0
 let battleshipCount = 0
 let carrierCount = 0

 function revealSquare(square){
     if(!square.classList.contains('boom')){
         if(square.classList.contains('destroyer')) destroyerCount++
         if(square.classList.contains('submarine')) submarineCount++
         if(square.classList.contains('cruiser')) cruiserCount++
         if(square.classList.contains('battleship')) battleshipCount++
         if(square.classList.contains('carrier')) carrierCount++
     }

     if(square.classList.contains('taken')) {
         square.classList.add('boom')
     } else{
         square.classList.add('miss')
     }
     checkForWins()
     currentPlayer = 'computer'
     console.log('Wubba')
     playGame()

 }

 
 let cpuDestroyerCount = 0
 let cpuSubmarineCount = 0
 let cpuCruiserCount = 0
 let cpuBattleshipCount = 0
 let cpuCarrierCount = 0


 function computerGo(){
     console.log('datorn kör')
     let random = Math.floor(Math.random() * userSquares.length)
     console.log(random)
     if (!userSquares[random].classList.contains('boom')){
         userSquares[random].classList.add('boom')
         if(userSquares[random].classList.contains('destroyer')) cpuDestroyerCount++
         if(userSquares[random].classList.contains('submarine')) cpuSubmarineCount++
         if(userSquares[random].classList.contains('cruiser')) cpuCruiserCount++
         if(userSquares[random].classList.contains('battleship')) cpuBattleshipCount++
         if(userSquares[random].classList.contains('carrier')) cpuCarrierCount++
         checkForWins()
     } else computerGo()
     currentPlayer = 'user'
     turnDisplay.innerHTML = 'Your Go'
 }

 function checkForWins(){
     if(destroyerCount == 2){
         destroyerCount = 10
     }
     if(submarineCount == 3){
         submarineCount = 10
     }
     if(cruiserCount == 3){
         cruiserCount = 10
     }
     if(battleshipCount == 4){
         battleshipCount = 10
     }
     if(carrierCount == 5){
         carrierCount = 10
     }


     if(cpuDestroyerCount == 2){
         cpuDestroyerCount = 10
     }
     if(cpuSubmarineCount == 3){
         cpuSubmarineCount = 10
     }
     if(cpuCruiserCount == 3){
         cpuCruiserCount = 10
     }
     if(cpuBattleshipCount == 4){
         cpuBattleshipCount = 10
     }
     if(cpuCarrierCount == 5){
         cpuCarrierCount = 10
     }

     if((destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount) === 50){
         infoDisplay.innerHTML = 'YOU WIN'
         gameOver()
     }
     if((cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount) === 50){
         infoDisplay.innerHTML = 'YOU LOSE'
         gameOver()
     }
 }

 function gameOver(){
     isGameOver = true
     startButton.removeEventListener('click', playGame)
 }


})



*/

