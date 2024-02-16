function rhombusWidth(){
    const rhombusBase = getInputValueById('rhombus-base');
    const rhombusLength = getInputValueById('rhombus-length');
    const area= 0.5*rhombusBase*rhombusLength;
    setInnerTextById('rhombus-area',area)
    
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
function setInnerTextById(elementId,area){
    const element= document.getElementById(elementId);
    element.innerText = area;
}