document.addEventListener('DOMContentLoaded', function () {
    var c1cButton = document.getElementById('c1c');
    var c2cButton = document.getElementById('c2c');

    if (c1cButton) {
        c1cButton.addEventListener('click', function() {
            // Redirect to c1.html
            window.location.href = 'c1.html';
        });
    }

    if (c2cButton) {
        c2cButton.addEventListener('click', function() {
            // Redirect to c2.html
            window.location.href = 'c2.html';
        });
    }
});
