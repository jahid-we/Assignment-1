"use strict";
function calculate() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let operation = document.getElementById("operation").value;
    let resultDiv = document.getElementById("result-div");
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers";
        resultDiv.classList.remove("alert-primary");
        resultDiv.classList.add("alert-danger");
        return;
    }
    if (operation == "+") {
        result.innerHTML = (num1 + num2);
        resultDiv.classList.remove("alert-danger");
        resultDiv.classList.add("alert-primary");

    } else if (operation == "-") {
        result.innerHTML = (num1 - num2);
        resultDiv.classList.remove("alert-danger");
        resultDiv.classList.add("alert-primary");

    } else if (operation == "*") {
        result.innerHTML = (num1 * num2);
        resultDiv.classList.remove("alert-danger");
        resultDiv.classList.add("alert-primary");

    } else if (operation == "/") {
        if (num2 === 0) {
            result.innerHTML = "Cannot Divide By Zero"
            resultDiv.classList.remove("alert-primary")
            resultDiv.classList.add("alert-danger")

        } else {
            result.innerHTML = (num1 / num2);
            resultDiv.classList.remove("alert-danger");
            resultDiv.classList.add("alert-primary");
        }
    } else {
        result.innerHTML = "Invalid Operation";
        resultDiv.classList.remove("alert-primary");
        resultDiv.classList.add("alert-danger");
    }
    
}