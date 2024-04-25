// form div
let formContainer = document.querySelector("#form");

let sizeSettingText = document.createElement("p");
formContainer.appendChild(sizeSettingText);
sizeSettingText.textContent = "New grid size: ";
let sizeSettingInput = document.createElement("input");
sizeSettingInput.setAttribute("placeholder", "Enter Grid Size");
formContainer.appendChild(sizeSettingInput);
let inputCopy = document.createElement("p");
formContainer.appendChild(inputCopy);
let submitButton = document.createElement("button");
formContainer.appendChild(submitButton);
submitButton.textContent = "Submit";

submitButton.addEventListener("click", makeGrid);
sizeSettingInput.addEventListener("keyup", replicateInput)
// container div
let gridContainer = document.querySelector("#container");

function replicateInput() {
    let enteredInput = sizeSettingInput.value;
    inputCopy.textContent = "× " + enteredInput;
}

function makeGrid() {
    let enteredInput = sizeSettingInput.value;
    gridContainer.textContent = "";

    if (enteredInput < 0 || enteredInput > 99 || isNaN(enteredInput)){
        // Enter code here
    } else {
        for (let i=0; i < enteredInput; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            gridContainer.appendChild(row);
            
            for (let j=0; j < enteredInput; j++) {
                let column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);

                column.addEventListener("mouseover", () => {
                    column.style.backgroundColor = "blue";
                })
            }
        }
    }
};