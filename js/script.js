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

}