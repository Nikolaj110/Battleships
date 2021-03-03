x = element.getAttribute("data-x");
y = element.getAttrbiute("data-y");

ships.forEach(ship => ship.addEventListener('dragstart', dragStart))



function dragStart(e){
    console.log(e.target)
    console.log(this)
}