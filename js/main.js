
window.onload = initialize;

var stepNum = 50;

function initialize() {
    startGrid();
    document.addEventListener("dragend", function() {
        hideDisposal();
    })

}