let display = document.getElementById('display');
let currentExpression = "";

// Menambahkan karakter ke display
function appendCharacter(char) {
    currentExpression += char;
    display.value = currentExpression;
}

// Menghapus semua karakter (fungsi AC/Clear All)
function clearDisplay() {
    currentExpression = "";
    display.value = "";
}

// Fungsi evaluasi untuk menghitung hasil
function calculate() {
    try {
        // Mengganti simbol "^" dengan Math.pow
        let modifiedExpression = currentExpression.replace("^", "**");
        let result = eval(modifiedExpression);
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = "Error";
        currentExpression = "";
    }
}
