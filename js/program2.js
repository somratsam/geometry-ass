// step 1
//   get event listener to the calculate button
document.getElementById('btn-calculate-rect').addEventListener('click', function () {
    // step 2
    // Get the values of the input fields
    const rectangleFirstElement = getInputFieldValueById('input-field-rect-first');
    const rectangleSecondElement = getInputFieldValueById('input-field-rect-second');
// step 3
    // Check validation
    if (isNaN(rectangleFirstElement) || isNaN(rectangleSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }
// step 4
    // Calculate the total value
    const rectangleTotalValue = rectangleFirstElement * rectangleSecondElement;
// step 5
    // Display the total value in the final element
    const rectangleFinalValue = document.getElementById('rectangle-text-field');
    rectangleFinalValue.innerText = rectangleTotalValue;
});