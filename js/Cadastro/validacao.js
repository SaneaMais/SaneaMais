
var dataInput = document.getElementById("data");
aplicarMascara(dataInput, "data");

var cepInput = document.getElementById("cep");
aplicarMascara(cepInput, "cep");

var numeroInput = document.getElementById("numero");
aplicarMascara(numeroInput, "telefone");

function aplicarMascara(input, tipo) {
  input.addEventListener("input", function () {
    var v = input.value.replace(/\D/g, "");

    if (tipo === "data") {
      if (v.length <= 8) {
        v = v.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
      }
    } else if (tipo === "cep") {
      if (v.length >= 5) {
        v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
      }
    } else if (tipo === "telefone") {
      if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else {
        v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
    }

    input.value = v.slice(0, 15);
  });
}

var emailInput = document.getElementById("email");
var numeroInput = document.getElementById("numero");
var nomeInput = document.getElementById("nome");
var dataInput = document.getElementById("data");
var cepInput = document.getElementById("cep");
var passwordInput = document.getElementById("password");
var entrarButton = document.getElementById("Entrar");

emailInput.addEventListener("blur", function () {
  validateInput(emailInput, "Email inválido");
  checkFormValidity();
});

numeroInput.addEventListener("blur", function () {
  validateInput(numeroInput, "Número de telefone inválido");
  checkFormValidity();
});

nomeInput.addEventListener("blur", function () {
  validateInput(nomeInput, "Nome inválido");
  checkFormValidity();
});

dataInput.addEventListener("blur", function () {
  aplicarMascara(dataInput, "data");
  validateInput(dataInput, "Data de nascimento inválida");
  checkFormValidity();
});

cepInput.addEventListener("blur", function () {
  aplicarMascara(cepInput, "cep");
  validateInput(cepInput, "CEP inválido");
  checkFormValidity();
});

passwordInput.addEventListener("blur", function () {
  senhaValida(passwordInput);
  checkFormValidity();
});

entrarButton.addEventListener("click", function (e) {
  e.preventDefault();
  validateInput(emailInput, "Email inválido");
  validateInput(numeroInput, "Número de telefone inválido");
  validateInput(nomeInput, "Nome inválido");
  aplicarMascara(dataInput, "data");
  validateInput(dataInput, "Data de nascimento inválida");
  aplicarMascara(cepInput, "cep");
  validateInput(cepInput, "CEP inválido");
  senhaValida(passwordInput);
  checkFormValidity();
});

function checkFormValidity() {
  var isEmailValid = validateInput(emailInput, "Email inválido");
  var isNumeroValid = validateInput(numeroInput, "Número de telefone inválido");
  var isNomeValid = validateInput(nomeInput, "Nome inválido");
  var isDataValid = validateInput(dataInput, "Data de nascimento inválida");
  var isCepValid = validateInput(cepInput, "CEP inválido");
  var isSenhaValid = senhaValida(passwordInput);

  if (isEmailValid === "valido" && isNumeroValid === "valido" && isNomeValid === "valido" && isDataValid === "valido" && isCepValid === "valido" && isSenhaValid === "valido") {
    // Todos os campos estão preenchidos corretamente, redirecione para a página de sucesso.
    window.location.href = "../../HTML/Publicacao/NovoPerfil/index.html";
  }
}

function validateInput(input, errorMessage) {
  var inputValue = input.value.trim();
  if (inputValue !== "") {
    input.style.border = "";
    input.nextElementSibling.textContent = "";
    return "valido";
  } else {
    input.style.border = "1px solid red";
    input.nextElementSibling.textContent = errorMessage;
    input.nextElementSibling.style.color = "red";
    return "invalido";
  }
}

function senhaValida(password) {
  var passwordValue = password.value;
  if (passwordValue.length < 8) {
    password.style.border = "1px solid red";
    password.nextElementSibling.textContent = "Senha inválida";
    password.nextElementSibling.style.color = "red";
    return "invalido";
  } else {
    password.style.border = "";
    password.nextElementSibling.textContent = "";
    return "valido";
  }
}
