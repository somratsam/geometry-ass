// get event listener to the calculate button
document.getElementById('btn-calculate-penta').addEventListener('click', function () {
    const pentagonFirstElement = getInputFieldValueById('input-field-penta-first');
    const pentagonSecondElement =  getInputFieldValueById('input-field-penta-second');
    

    
    // Check validation
    if (isNaN(pentagonFirstElement) || isNaN(pentagonSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const pentagonTotalValue = 0.5 * pentagonFirstElement * pentagonSecondElement;

    // Display the total value in the final element
    const pentagonFinalValue = document.getElementById('pentagon-text-field');
    pentagonFinalValue.innerText = pentagonTotalValue;
})