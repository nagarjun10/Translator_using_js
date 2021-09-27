/*
var username = prompt("Give me your name")
var welcomeMessage = "This script works"+ username;
alert(welcomeMessage); */

var btnTranslate = document.querySelector("#btn-translate");
var txtInput =  document.querySelector("#txt-input");
var outputDiv = document.querySelector ("#outputDiv");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function clickHandler() {
    var inputText = txtInput.value; //input

    // calling the server to process
    fetch( getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
        var translationText = json.contents.translated;
       outputDiv.innerText= translationText;

    });
}
btnTranslate.addEventListener("click", clickHandler);



