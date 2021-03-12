
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
    let spel = false
    const startButton = document.querySelector('#start')
    var stringText = document.getElementById("undertext");
    



    function rotate(){
     if(isHorizontal){
         skepp1.classList.toggle('skepp-1-vertikal')
         skepp2.classList.toggle('skepp-2-vertikal')
         skepp3.classList.toggle('skepp-3-vertikal')
         skepp4.classList.toggle('skepp-4-vertikal')
         skepp5.classList.toggle('skepp-5-vertikal')
         displayGrid.classList.toggle('grid-display-vertikal')
         isHorizontal = false
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
 }))


 function dragStart(){
    valtSkepp = this
    skeppLangd = this.childNodes.length
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
     let skeppMedSistaId = valtSkepp.lastChild.id
     let shipClass = skeppMedSistaId.slice(0, -2)
     shipClass = shipClass.replace('-', '')

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

 startButton.addEventListener('click', startaSpel)


 function startaSpel(){ 
     if(!displayGrid.contains(skepp1) && !displayGrid.contains(skepp2) && !displayGrid.contains(skepp3) && !displayGrid.contains(skepp4) && !displayGrid.contains(skepp5)){
         spel = true
         stringText.innerHTML = 'Spelet är igång'
     }
 }



 rutor.forEach(square => square.addEventListener('click', function(e){
     if(spel === true){
         revealSquare(square)
     }
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



 function checkForWins(){
     if(skepp1Count == 2){
         skepp1Count = 10
     }
     if(skepp2Count == 3){
        skepp2Count = 10
     }
     if(skepp3Count == 3){
         skepp3Count = 10
     }
     if(skepp4Count == 4){
         skepp4Count = 10
     }
     if(skepp5Count == 5){
         skepp5Count = 10
     }
     if(skepp1Count + skepp2Count + skepp3Count + skepp4Count + skepp5Count === 50){
         stringText.innerHTML = 'DU VANN'
     }

 }

})

