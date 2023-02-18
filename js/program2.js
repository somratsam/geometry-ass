
// create a function for reuse code
function getInputFieldValueById(inputFieldId) {
    const inputElement = document.getElementById(inputFieldId);
    const inputFieldValueString = inputElement.value;
    inputFieldValue = parseFloat(inputFieldValueString);
    inputElement.value = '';
    return inputFieldValue
}
//   get event listener to the calculate button
document.getElementById('btn-calculate-rect').addEventListener('click', function () {
    // Get the values of the input fields
    const rectangleFirstElement = getInputFieldValueById('input-field-rect-first');
    const rectangleSecondElement = getInputFieldValueById('input-field-rect-second');

    // Check validation
    if (isNaN(rectangleFirstElement) || isNaN(rectangleSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const rectangleTotalValue = 0.5 * rectangleFirstElement * rectangleSecondElement;

    // Display the total value in the final element
    const rectangleFinalValue = document.getElementById('rectangle-text-field');
    rectangleFinalValue.innerText = rectangleTotalValue;
});