// const variables
const textField = document.getElementById("entryText");
const fancyBtn = document.getElementById("fancyBtn");
const boringBtn = document.getElementById("boringBtn");

// first alert hello world button
function bAlert() {
    alert("Hello, world!");
}

function rChange(message) {
    alert(message);
}
//Bigger button
function textBig() {
    textField.style.fontSize = "1.5em"; 
}

//event listeners for button change
fancyBtn.addEventListener("change", () => {
    if (fancyBtn.checked) {
        textField.style.fontWeight = "bold"; 
        textField.style.color = "blue"; 
        textField.style.textDecoration = "underline"; 
    }
});


boringBtn.addEventListener("change", () => {
    if (boringBtn.checked) {
        textField.style.fontWeight = "normal";
        textField.style.color = "black"; 
        textField.style.textDecoration = "none"; 
    }
});
// moo button
function MOO() {
    const text = textField.value.toUpperCase();//turns everything to uppercase
    const sentence = text.split("."); //splits the text
        for (let i = 0; i < sentence.length; i++) {//loops through the array while trimming the white space from the split text and adds moo at the end
            if (sentence[i].trim()) {
             sentence[i] = sentence[i].trim() + " -MOO !";
        }
    }
    const finish= sentence.join(". ");       //brings the sentences back together
    textField.value = finish;    //puts it back into the text field             
}
