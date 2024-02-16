function triangleWidth(){
    const triangleBase=document.getElementById('triangle-base');
    const triangleBaseText= triangleBase.value
    const base= parseFloat(triangleBaseText)
    // console.log(base);

    const triangleLength=document.getElementById('triangle-length');
    const triangleLengthText=triangleLength.value;
    const height= parseFloat(triangleLengthText);
    // console.log(height);

    const area= 0.5*base*height;
    console.log(area);
    const triangleArea= document.getElementById('triangle-area');
    triangleArea.innerText=area;

}