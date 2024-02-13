// triangle calculation
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
}
// rectangel calculation
function rectangleCalculate(){
    // width
    const rectangleWidth = document.getElementById('rectangle_width');
    const widthValue = rectangleWidth.value;
    const width = parseFloat(widthValue);
    // length
    const rectangleLength = document.getElementById('rectangle_length');
    const lengthValue = rectangleLength.value;
    const length = parseFloat(lengthValue);
    // calculate result
    const ressult = width * length;
    // show result
    const resultValue = document.getElementById('rectangle_output');
    resultValue.innerText = ressult;
}
// parallelogram calculation
function parallelogramCalculate(){
    // base
    const parallelogramBase = document.getElementById('parallelogram_base');
    const baseValue = parallelogramBase.value;
    const base = parseFloat(baseValue);
    // height
    const parallelogramHeight = document.getElementById('parallelogram_height');
    const heightValue = parallelogramHeight.value;
    const height = parseFloat(heightValue);
    // calculate result
    const result  = base * height;
    // show result
    const showResult = document.getElementById('parallelogram_output');
    showResult.innerText = result;
}
// ellipse calculation
// function ellipseCalculation(){
//     // area
//     const ellipseArea = document.getElementById('ellipse_area');
//     const areaValue = ellipseArea.value;
//     const area = parseFloat(areaValue);
//     // base
//     const ellipseBase = document.getElementById('ellipse_base');
//     const baseValue = ellipseBase.value;
//     const base = parseFloat(baseValue);
//     // calculation
//     const result = 3.1416 * area * base;
//     // show result
//     const showResult = document.getElementById('ellipse_output');
//     showResult.innerText = result;
// }
