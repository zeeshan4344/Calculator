let output = document.getElementById("outputscreen");

function display(num) {
    output.value += num;
}

function Calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        output.value = "Error: Invalid input";
    }
}

function Clear() {
    output.value = "";
}

function del() {
    output.value = output.value.slice(0, -1);
}