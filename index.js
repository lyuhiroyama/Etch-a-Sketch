// form div
let formContainer = document.querySelector("#form");

let sizeSettingText = document.createElement("p");
formContainer.appendChild(sizeSettingText);
sizeSettingText.textContent = "New grid size: ";
let sizeSettingInput = document.createElement("input");
sizeSettingInput.setAttribute("placeholder", "Enter Grid Size");
formContainer.appendChild(sizeSettingInput);
let submitButton = document.createElement("button");
formContainer.appendChild(submitButton);
submitButton.textContent = "Submit";
submitButton.addEventListener("click", () => {
    
})



// container div
let gridContainer = document.querySelector("#container");

for (let i=0; i<16; i++) {
    let aDiv = document.createElement("div");
    gridContainer.appendChild(aDiv);
    aDiv.addEventListener("mouseover", () => {
        aDiv.style.backgroundColor = "blue";
    })
}