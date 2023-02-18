// create a function for reuse code
// step 1
function getInputFieldValueById(inputFieldId) {
    const inputElement = document.getElementById(inputFieldId);
    const inputFieldValueString = inputElement.value;
    inputFieldValue = parseFloat(inputFieldValueString);
    inputElement.value = '';
    return inputFieldValue
}
// step 2
//   get event listener to the calculate button
document.getElementById('btn-calculate-tri').addEventListener('click', function () {
    // Get the values of the input fields
    const triangleFirstElement = getInputFieldValueById('input-field-tri-first');
    const triangleSecondElement = getInputFieldValueById('input-field-tri-second');
// step 3
    // Check validation
    if (isNaN(triangleFirstElement) || isNaN(triangleSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }
// step 4
    // Calculate the total value
    const triangleTotalValue = 0.5 * triangleFirstElement * triangleSecondElement;
// step 5
    // Display the total value in the final element
    const triangleFinalValue = document.getElementById('triangle-text-field');
    triangleFinalValue.innerText = triangleTotalValue;
});