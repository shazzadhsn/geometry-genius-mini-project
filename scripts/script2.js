// Local Functions
function calculateTriangleArea() {
    let area = 0.5 * fetchInputValuesById('triangle-base') * fetchInputValuesById('triangle-height');
    setInnerText('triangle-area-span', area);
}

function calculateRectangleArea() {
    let area = fetchInputValuesById('rectangle-width') * fetchInputValuesById('rectangle-length');
    setInnerText('rectangle-area-span', area);
}

function calculateParallelogramArea() {
    let area = fetchInputValuesById('parallelogram-base') * fetchInputValuesById('parallelogram-height')
    setInnerText('parallelogram-area-span', area);
}

function calculateRhombusArea() {
    let area = 0.5 * fetchInputValuesById('rhombus-diagonal1') * fetchInputValuesById('rhombus-diagonal2')
    setInnerText('rhombus-area-span', area);
}

function calculatePentagonArea() {
    let area = 0.5 * fetchInputValuesById('pentagon-base') * fetchInputValuesById('pentagon-height');
    setInnerText('pentagon-area-span', area);
}

function calculateEllipseArea() {
    let area = Math.PI * fetchInputValuesById('axis-a') * fetchInputValuesById('axis-b');
    setInnerText('ellipse-area-span', area);
}

// Global Functions
function fetchInputValuesById(inputFieldId) {
    let inputField = document.getElementById(inputFieldId);
    let inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setInnerText(elementId, area) {
    document.getElementById(elementId).innerText = area;
}