function pentagonWidth(){
    const pentagonBase= getInputValueById('pentagon-base');
    // console.log(pentagonBase)
    const pentagonLength= getInputValueById('pentagon-length');
    // console.log(pentagonLength)
    area= 0.5*pentagonBase*pentagonLength;
    setInnerTextById("pentagon-area",area)
}
function getInputValueById(inputFieldId){
    const inputField= document.getElementById(inputFieldId)
    const inputFieldText= inputField.value 
    const value= parseFloat(inputFieldText);
    return value
}
function setInnerTextById(elementId){
    const element=document.getElementById(elementId)
    element.innerText=area;
}