// adding event to button Triangle
document
    .getElementById("triangle-button")
    .addEventListener("click", function () {
        let triangleBase = document.getElementById("triangle-base").value;
        let triangleHeight = document.getElementById("triangle-height").value;
        triangleBase = parseFloat(triangleBase);
        triangleHeight = parseFloat(triangleHeight);

        // calculating area
        let triangleArea = 0.5 * triangleBase * triangleHeight;
        let triangleAreaString = "Triangle Area: " + triangleArea.toString();
        let li = document.createElement("li");
        li.innerText = triangleAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("triangle-base").value = "";
        document.getElementById("triangle-height").value = "";
    });

// adding event to button Rectangle
document
    .getElementById("rectangle-button")
    .addEventListener("click", function () {
        let rectangleWidth = document.getElementById("rectangle-width").value;
        let rectangleLength = document.getElementById("rectangle-length").value;
        rectangleWidth = parseFloat(rectangleWidth);
        rectangleLength = parseFloat(rectangleLength);

        // calculating rectangle area
        let rectangleArea = rectangleWidth * rectangleLength;
        let rectangleAreaString = "Rectangle Area: " + rectangleArea.toString();
        let li = document.createElement("li");
        li.innerText = rectangleAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("rectangle-width").value = "";
        document.getElementById("rectangle-length").value = "";
    });

// adding event to parallelogram
document
    .getElementById("parallelogram-button")
    .addEventListener("click", function () {
        let parallelogramBase =
            document.getElementById("parallelogram-base").value;
        let parallelogramHeight = document.getElementById(
            "parallelogram-height"
        ).value;
        parallelogramBase = parseFloat(parallelogramBase);
        parallelogramHeight = parseFloat(parallelogramHeight);

        // calculating parallelogram area
        let parallelogramArea = parallelogramBase * parallelogramHeight;
        let parallelogramAreaString =
            "Parallelogram Area: " + parallelogramArea.toString();
        let li = document.createElement("li");
        li.innerText = parallelogramAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("parallelogram-base").value = "";
        document.getElementById("parallelogram-height").value = "";
    });

// adding event to rhombus
document
    .getElementById("rhombus-button")
    .addEventListener("click", function () {
        let rhombusD1 = document.getElementById("rhombus-diagonal1").value;
        let rhombusD2 = document.getElementById("rhombus-diagonal2").value;
        rhombusD1 = parseFloat(rhombusD1);
        rhombusD2 = parseFloat(rhombusD2);

        // calculating rhombus area
        let rhombusArea = 0.5 * rhombusD1 * rhombusD2;
        let rhombusAreaString = "Rhombus Area: " + rhombusArea.toString();
        let li = document.createElement("li");
        li.innerText = rhombusAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("rhombus-diagonal1").value = "";
        document.getElementById("rhombus-diagonal2").value = "";
    });

// adding event to ellipse
document
    .getElementById("ellipse-button")
    .addEventListener("click", function () {
        let axisA = document.getElementById("axis-a").value;
        let axisB = document.getElementById("axis-b").value;
        axisA = parseFloat(axisA);
        axisB = parseFloat(axisB);

        // calculating area
        let ellipseArea = Math.PI * axisA * axisB;
        let ellipseAreaString = "Ellipse Area: " + ellipseArea.toString();
        let li = document.createElement("li");
        li.innerText = ellipseAreaString;
        document.getElementById("ordered-list").appendChild(li);
        document.getElementById("axis-a").value = "";
        document.getElementById("axis-b").value = "";
    });
