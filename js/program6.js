// get event listener to the calculate button
document.getElementById('btn-calculate-ellipse').addEventListener('click', function () {
    const ellipseFirstElement = getInputFieldValueById('input-field-ellipse-first');
    const ellipseSecondElement =  getInputFieldValueById('input-field-ellipse-second');
    

    
    // Check validation
    if (isNaN(ellipseFirstElement) || isNaN(ellipseSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const ellipseTotalValue = 3.14 * ellipseFirstElement * ellipseSecondElement;

    // Display the total value in the final element
    const ellipseFinalValue = document.getElementById('ellipse-text-field');
    ellipseFinalValue.innerText = ellipseTotalValue;
})