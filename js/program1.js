document.getElementById('btn-calculate-tri').addEventListener('click', function () {
    const triangleFirstField = document.getElementById('input-field-tri-first');
    const triangleFirstElementString = triangleFirstField.value;
    const triangleFirstElement = parseFloat(triangleFirstElementString);
    triangleFirstField.value = '';

    const triangleSecondField = document.getElementById('input-field-tri-second');
    const triangleSecondElementString = triangleSecondField.value;
    const triangleSecondElement = parseFloat(triangleSecondElementString);
    triangleSecondField.value = '';

    const triangleTotalValue = 0.5 * triangleFirstElement * triangleSecondElement;


    const triangleFinalValue = document.getElementById('triangle-text-field')
    const triangleFinalElementValueString = triangleFinalValue.innerText;
    const triangleFinalElementValue = parseFloat(triangleFinalElementValueString);
 triangleFinalValue.innerText =  triangleTotalValue;

})