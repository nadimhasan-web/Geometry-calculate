// triangle
function triangleCalculate(){
    // base input
    const inputBase = document.getElementById('input_base');
    const baseValue = inputBase.value;
    const base = parseFloat(baseValue);
    // height input
    const inputHeight = document.getElementById('input_height');
    const heightValue = inputHeight.value;
    const height = parseFloat(heightValue);
    // calculate result
    const ressult = 0.5 * base * height;
    // show result
    const resultValue = document.getElementById('area_output');
    resultValue.innerText = ressult;
    console.log(resultValue);
}
// rectangel
function rectangleCalculate(){
    // width
    const rectangleWidth = document.getElementById('rectangle_width');
    const widthValue = rectangleWidth.value;
    const width = parseFloat(widthValue);
    // length
    const rectangleLength = document.getElementById('rectangle_length');
    const lengthValue = rectangleLength.value;
    const length = parseFloat(lengthValue);
    // calculate 
    const ressult = width * length;
    // show result
    const resultValue = document.getElementById('rectangle_output');
    resultValue.innerText = ressult;
    // console.log(ressult);
}