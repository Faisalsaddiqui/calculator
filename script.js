// Function to append values to the screen
function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("screen").value = '';
}

// Function to evaluate the basic expression
function calculate() {
    try {
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch (e) {
        document.getElementById("screen").value = 'Error';
    }
}

// Function to calculate cosine of a number in degrees
function calculateCos() {
    try {
        let value = parseFloat(document.getElementById("screen").value);
        let result = Math.cos(value * Math.PI / 180); // Convert degrees to radians
        document.getElementById("screen").value = result;
    } catch (e) {
        document.getElementById("screen").value = 'Error';
    }
}

// Function to calculate tangent of a number in degrees
function calculateTan() {
    try {
        let value = parseFloat(document.getElementById("screen").value);
        let result = Math.tan(value * Math.PI / 180); // Convert degrees to radians
        document.getElementById("screen").value = result;
    } catch (e) {
        document.getElementById("screen").value = 'Error';
    }
}


document.addEventListener('keydown', function(event) {
    let screen = document.getElementById("screen");

    // Check if a number key (1-9) is pressed
    if (event.key >= '1' && event.key <= '9') {
        screen.value += event.key; // Append the pressed number to the screen
    }

    // Check for operator keys (+, -, *, /, .)
    else if (event.key === '+') {
        screen.value += '+'; // Append plus operator
    } else if (event.key === '-') {
        screen.value += '-'; // Append minus operator
    } else if (event.key === '*') {
        screen.value += '*'; // Append multiply operator
    } else if (event.key === '/') {
        screen.value += '/'; // Append divide operator
    } else if (event.key === '.') {
        screen.value += '.'; // Append dot (decimal point)
    }
});
