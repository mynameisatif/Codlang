document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btc21').addEventListener('click', function () {
        var userInput = document.getElementById('edc11').value;
        var result = convertToShiftedAlphabet(userInput);
        document.getElementById('edc21').value = result;
    });

    function convertToShiftedAlphabet(input) {
        var result = '';

        for (var i = 0; i < input.length; i++) {
            result += convertToShiftedAlphabetChar(input.charAt(i));
        }

        return result;
    }

    
    function convertToShiftedAlphabetChar(ch) {
        if ('a' <= ch && ch <= 'z') {
            return String.fromCharCode((ch.charCodeAt(0) - 'a'.charCodeAt(0) + 5 + 26) % 26 + 'a'.charCodeAt(0));
        } else if ('A' <= ch && ch <= 'Z') {
            return String.fromCharCode((ch.charCodeAt(0) - 'A'.charCodeAt(0) + 5 + 26) % 26 + 'A'.charCodeAt(0));
        } else {
            return ch;
        }
    }
});
