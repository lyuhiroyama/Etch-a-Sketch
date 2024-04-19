let gridContainer = document.querySelector("#container");

for (let i=0; i<4; i++) {

    let divRow = document.createElement("div");
    gridContainer.appendChild(divRow);

    for (let j=0; j<4; j++) {
        let aDiv = document.createElement("div");
        divRow.appendChild(aDiv);
    }
}