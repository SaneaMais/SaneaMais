document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        let formattedValue = '';

        if (value.length > 0) {
            if (value.length < 3) {
                formattedValue = `(${value}`;
            } else if (value.length < 6) {
                formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else {
                formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
            }
        }

        telefoneInput.value = formattedValue;
    });

    telefoneInput.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && telefoneInput.selectionStart === telefoneInput.selectionEnd) {
            // Permite excluir o hífen
            if (telefoneInput.selectionStart === 6) {
                telefoneInput.selectionStart = 5;
            }
        }
    });
});