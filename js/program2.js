document.getElementById('btn-calculate-rect').addEventListener('click', function () {

    const rectangleFirstField = document.getElementById('input-field-rect-first');
    const rectangleFirstElementString = rectangleFirstField.value;
    const rectangleFirstElement = parseFloat(rectangleFirstElementString);
    rectangleFirstField.value = '';

    const rectangleSecondField = document.getElementById('input-field-rect-second');
    const rectangleSecondElementString = rectangleSecondField.value;
    const rectangleSecondElement = parseFloat(rectangleSecondElementString);
    rectangleSecondField.value = '';

    const rectangleTotalValue = rectangleFirstElement * rectangleSecondElement;


    const rectangleFinalValue = document.getElementById('rectangle-text-field')
    const rectangleFinalElementValueString = rectangleFinalValue.innerText;
    const rectangleFinalElementValue = parseFloat(rectangleFinalElementValueString);
    rectangleFinalValue.innerText = rectangleTotalValue;


})