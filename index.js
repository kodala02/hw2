function calculateBMI() {
    // Get user input
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    var bmi = weight / (height / 100) ** 2;

    document.getElementById("result").textContent = bmi.toFixed(2);

    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }
    document.getElementById("interpretation").textContent =
        "Interpretation: " + interpretation;
}