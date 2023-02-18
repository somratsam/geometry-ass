// create a function for reuse code
function getInputFieldValueById(inputFieldId) {
    const inputElement = document.getElementById(inputFieldId);
    const inputFieldValueString = inputElement.value;
    inputFieldValue = parseFloat(inputFieldValueString);
    inputElement.value = '';
    return inputFieldValue
}
//   get event listener to the calculate button
document.getElementById('btn-calculate-tri').addEventListener('click', function () {
    // Get the values of the input fields
    const triangleFirstElement = getInputFieldValueById('input-field-tri-first');
    const triangleSecondElement = getInputFieldValueById('input-field-tri-second');

    // Check validation
    if (isNaN(triangleFirstElement) || isNaN(triangleSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const triangleTotalValue = 0.5 * triangleFirstElement * triangleSecondElement;

    // Display the total value in the final element
    const triangleFinalValue = document.getElementById('triangle-text-field');
    triangleFinalValue.innerText = triangleTotalValue;
});