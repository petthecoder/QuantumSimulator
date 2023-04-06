


    function simulate() {
        var stepList = [];
        generateSimulationSteps(stepList);
        console.log(stepList);
    }


    function generateSimulationSteps(stepList) {
        var htmlGrid = document.getElementById("grid-container");
        var rows = htmlGrid.childNodes;
        for(let col = 0; col < 50; col++){
            for(let i = 0; i < rows.length; i++){
                if(rows[i].childNodes[col].childNodes.length > 0){
                    stepList.push(
                        nodeToObject(
                            rows[i].childNodes[col].childNodes,
                            i,
                            col));
                }
            }
        }
    }


    function nodeToObject(node, row, column){
        var nodeType = node[0].id.split("-")[0];
        return {nodeType: nodeType, row: row, column:column};
    }