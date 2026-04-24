const randomNumber = Math.floor(Math.random() * 100) + 1;

            function checkGuess() {
                const userGuess = parseInt(document.getElementById('guessInput').value);
                const result = document.getElementById('result');
                const guessInput = document.getElementById('guessInput').style.setProperty("background-color", "red");
               

                if (userGuess === randomNumber) {
                    result.textContent = "Parabéns! Você acertou!";
                } else if (userGuess < randomNumber) {
                    result.textContent = "Tente um número maior.";
                } else {
                    result.textContent = "Tente um número menor.";
                }
            }

            