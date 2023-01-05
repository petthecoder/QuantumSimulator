
    const gridArray = [];


function startGrid() {
    
    var grid = document.getElementById("grid-container");

    var newRow = createRow();

    grid.appendChild(newRow);
}

function createRow() {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    var cellList = [];

    for(let i = 0; i < stepNum; i++) {
        const newCell = document.createElement("div");
        newCell.id = "grid-cell-" + i;
        newCell.classList.add("grid-cell");
        newRow.appendChild(newCell);
        cellList.push(newCell);
    }

    for(var i = 0; i < cellList.length; i++) {
        (function(index) {
            cellList[index].addEventListener("drop", function(ev) {
                drop(ev);
            });
            cellList[index].addEventListener("dragover", function(ev) {
                allowDrop(ev);
            });
        })(i);
    }

    return newRow;
}
  
function drag(ev) {
    setTimeout(showDisposal, 50);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    var type = data.split("-")[0];
    newDraggable(type);

    if(ev.target.id === "dream-disposal") {
        document.getElementById(data).remove();
    }

    hideDisposal();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function showDisposal() {
    document.getElementById("dream-disposal").style.display = "block";
}

function hideDisposal() {
    document.getElementById("dream-disposal").style.display = "none";
}