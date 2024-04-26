// <div id="#form">
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
submitButton.addEventListener("mouseenter", () => { submitButton.style.backgroundColor = "#ababab";}); //Hover effect to submit button.
submitButton.addEventListener("mouseleave", () => { submitButton.style.backgroundColor = "white";}); //Hover effect to submit button.
sizeSettingInput.addEventListener("keyup", replicateInput)

// <div id="form-explanation">
let promptContainer = document.querySelector("#prompt");
let promptText = document.createElement("p");
promptText.textContent = "Enter a number between 2 and 99";
promptContainer.appendChild(promptText);

// <div id="#container">
let gridContainer = document.querySelector("#container");

function replicateInput() {
    let enteredInput = sizeSettingInput.value;
    inputCopy.textContent = "× " + enteredInput;
}

function makeGrid() {
    let enteredInput = sizeSettingInput.value;
    gridContainer.textContent = "";

    if (enteredInput < 0 || enteredInput > 99 || isNaN(enteredInput)){
        // Default grid layout:
    } else {

        // Creating new grid based on user input:

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