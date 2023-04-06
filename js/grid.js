

    var rows = 0;


function startGrid() {
    
    var grid = document.getElementById("grid-container");

    var newRow = createRow();

    grid.appendChild(newRow);
}

function createRow() {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    addReturnBtn(newRow);

    var cellList = [];

    rowNum = rows++;

    for(let i = 0; i < stepNum; i++) {
        const newCell = document.createElement("div");
        newCell.id = "grid-cell-" + rowNum + "-" + i;
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

function addReturnBtn(elem) {
    var returnBtn = document.createElement("i");
    returnBtn.classList.add("fa-trash-can");
    returnBtn.classList.add("fa-solid");

    returnBtn.addEventListener("click", function(ev) {
        deleteRow(elem);
    });

    elem.append(returnBtn);
}

function deleteRow(elem) {
    elem.remove();
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

    if(ev.target.id === "dream-disposal" || ev.target.id === "dream-disposal-can") {
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