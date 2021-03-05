document.addEventListener('DOMContentLoaded', () => {
    const ships = document.querySelector('.ship')
    const rutor = document.querySelector('ruta')
})


//x = element.getAttribute("data-x");
//y = element.getAttrbiute("data-y");

ships.forEach(ship => ship.addEventListener('dragstart', dragStart))


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