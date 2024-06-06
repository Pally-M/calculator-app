function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
       return "Cannot divide by zero!"
    }
    return a / b;
}

function calculator() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.querySelector('input[name="operation"]:checked').value;
    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "substract":
            result = substract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
         case "divide":
            result = divide(num1, num2);
            break;
    }
    document.getElementById("result").innerHTML = 'Result: ${result}';
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}