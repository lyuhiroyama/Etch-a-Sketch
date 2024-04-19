let gridContainer = document.querySelector("#container");

for (let i=0; i<16; i++) {

    let aDiv = document.createElement("div");
    gridContainer.appendChild(aDiv);
    aDiv.addEventListener("mouseover", () => {
        aDiv.style.backgroundColor = "blue";
    })
}

