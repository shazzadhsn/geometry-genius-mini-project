// fetching input field
let triangleBaseInput = document.getElementById("triangle-base");
let triangleHeightInput = document.getElementById("triangle-height");
let triangleBase, triangleHeight;

// fetching the value
triangleBaseInput.addEventListener("keyup", function (event) {
    triangleBase = event.target.value;
});
triangleHeightInput.addEventListener("keyup", function (event) {
    triangleHeight = event.target.value;
});

// adding event to button Triangle
document
    .getElementById("triangle-button")
    .addEventListener("click", function () {
        // calculating area
        let triangleArea = 0.5 * triangleBase * triangleHeight;
        let areaString = triangleArea.toString();
        let triangleAreaString = "Triangle Area: " + areaString;
        let li = document.createElement("li");
        li.innerText = triangleAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("triangle-base").value = "";
        document.getElementById("triangle-height").value = "";
    });

// fetching rectangle input field
let rectangleWidthField = document.getElementById("rectangle-width");
let rectangleLengthField = document.getElementById("rectangle-length");
let rectangleWidth, rectangleLength;

// fetching the values
rectangleWidthField.addEventListener("keyup", function (event) {
    rectangleWidth = event.target.value;
});
rectangleLengthField.addEventListener("keyup", function (event) {
    rectangleLength = event.target.value;
});

// adding event to button Rectangle
document
    .getElementById("rectangle-button")
    .addEventListener("click", function () {
        let rectangleArea = rectangleWidth * rectangleLength;
        let areaString = rectangleArea.toString();
        let rectangleAreaString = "Rectangle Area: " + areaString;
        let li = document.createElement('li');
        li.innerText = rectangleAreaString;
        document.getElementById('ordered-list').appendChild(li);
        document.getElementById('rectangle-width').value = '';
        document.getElementById('rectangle-length').value = '';
    });
