// create a function for reuse code
function getInputFieldValueById(inputFieldId) {
    const inputElement = document.getElementById(inputFieldId);
    const inputFieldValueString = inputElement.value;
    inputFieldValue = parseFloat(inputFieldValueString);
    inputElement.value = '';
    return inputFieldValue
}