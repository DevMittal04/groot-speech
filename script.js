var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("error accured", error)
    alert("Something is wrong with server! Try again after sometime.")
}

function clickHandler(){
    // Input
    var inputTxt = txtInput.value;

    // Calling Server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(json)
    })
    .catch(errorHandler)

    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(json)
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);