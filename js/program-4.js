// get event listener to the calculate button
document.getElementById('btn-calculate-rhombus').addEventListener('click', function () {
    const rhombusFirstElement = getInputFieldValueById('input-field-rhombus-first');
    const rhombusSecondElement =  getInputFieldValueById('input-field-rhombus-second');
    
    
    // Check validation
    if (isNaN(rhombusFirstElement) || isNaN(rhombusSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const rhombusTotalValue =  0.5 * rhombusFirstElement * rhombusSecondElement;

    // Display the total value in the final element
    const rhombusFinalValue = document.getElementById('rhombus-text-field');
    rhombusFinalValue.innerText = rhombusTotalValue;
})