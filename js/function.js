function ellipseCalculation(){
    const ellipseArea = getInputValueById('ellips_area');
    const ellipseBase = getInputValueById('ellips_base');
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