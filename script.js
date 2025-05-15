function getValues() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    return { n1, n2 };
}

function add() {
    const { n1, n2 } = getValues();
    document.getElementById("res").textContent = "Result: " + (n1 + n2);
}

function sub() {
    const { n1, n2 } = getValues();
    document.getElementById("res").textContent = "Result: " + (n1 - n2);
}

function mul() {
    const { n1, n2 } = getValues();
    document.getElementById("res").textContent = "Result: " + (n1 * n2);
}

function div() {
    const { n1, n2 } = getValues();
    let result = n2 !== 0 ? (n1 / n2) : "Cannot divide by zero";
    document.getElementById("res").textContent = "Result: " + result;
}

function mod() {
    const { n1, n2 } = getValues();
    let result = n2 !== 0 ? (n1 % n2) : "Cannot divide by zero";
    document.getElementById("res").textContent = "Result: " + result;
}

function reset() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("res").textContent = "Result: ";
}
