
var seqCount = 1;

function newDraggable(type){
    var newDraggable = document.createElement("div");
    newDraggable.draggable = "true";
    newDraggable.classList.add(type);
    newDraggable.classList.add("cube");
    newDraggable.id = type + "-" + seqCount++;
    newDraggable.addEventListener("dragstart", function(ev) {
        drag(ev);
    });
    var creator = document.getElementById(type + "-creator");
    if(creator.childElementCount == 0){
        document.getElementById(type + "-creator").append(newDraggable);
    }
}