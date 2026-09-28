function calculater(num1, num2, operator) {
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        console.log(num1 / num2);
    }
}

calculater(10, 5, "+");