function rectangleWidth(){
    const rectangleBase= document.getElementById('rectangle-base')
    const rectangleBaseText= rectangleBase.value
    const width=parseFloat(rectangleBaseText);
    // console.log(width);

    const rectangleLength= document.getElementById('rectangle-length')
    const rectangleLengthText= rectangleLength.value
    const height= parseFloat(rectangleLengthText);
    // console.log(height);

    const area= width*height;
    console.log(area);
    const rectangleArea=document.getElementById('rectangle-area')
    rectangleArea.innerText=area;
    
}