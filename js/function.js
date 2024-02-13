function ellipseCalculation(){
    const ellipseArea = getInputValueById('ellipse_area');
    const ellipseBase = getInputValueById('ellipse_base');
    const ressult = 3.1416 * ellipseArea * ellipseBase;
    console.log(ressult);
    console.log('hewijjflksd')
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const ressult = parseFloat(inputValue);
    return ressult;
}