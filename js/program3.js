
document.getElementById('btn-calculate-para').addEventListener('click', function () {
    const parallelogramFirstElement = getInputFieldValueById('input-field-para-first');
    const parallelogramSecondElement =  getInputFieldValueById('input-field-para-second');
    

    
    // Check validation
    if (isNaN(parallelogramFirstElement) || isNaN(parallelogramSecondElement)) {
        alert('Please enter valid numbers');
        return;
    }

    // Calculate the total value
    const parallelogramTotalValue = parallelogramFirstElement * parallelogramSecondElement;

    // Display the total value in the final element
    const parallelogramFinalValue = document.getElementById('parallelogram-text-field');
    parallelogramFinalValue.innerText = parallelogramTotalValue;
})