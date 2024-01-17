document.addEventListener("DOMContentLoaded", function () {
    function calculateSquareArea() {
        var sideValue = document.getElementById("squareSide").value;

        if (!isNaN(sideValue)) {
            var result = sideValue * sideValue;
            alert("Luas Persegi: " + result);
        } else {
            alert("Please enter a valid number for the side length.");
        }
    }

    function resetInput() {
        document.getElementById("squareSide").value = "";
    }
    document.getElementById("countButton").addEventListener("click", calculateSquareArea);
    document.getElementById("resetButton").addEventListener("click", resetInput); 
});
