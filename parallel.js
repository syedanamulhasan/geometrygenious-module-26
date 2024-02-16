function calculateParallelArea(){
    const parallelBaseInput=document.getElementById('parallel-base')
    const parallelBaseText = parallelBaseInput.value;
    const base=parseFloat(parallelBaseText);
    // console.log(base);
    // console.log(parallelBaseInput);
    const parallelHeightInput= document.getElementById('parallel-height');
    const parallelHeightText= parallelHeightInput.value;
    const height=parseFloat(parallelHeightText);
    // console.log(height);
    //area calculation
    const area= base*height;
    console.log(area);
    const parllelArea=document.getElementById('parallel-area');
    parllelArea.innerText = area;
}
