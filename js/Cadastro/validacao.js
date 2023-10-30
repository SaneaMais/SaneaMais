/* Máscaras */
function mascaraData(input) {
  input.addEventListener("input", function () {
    if (/\D/.test(input.value)) input.value = input.value.replace(/\D/g, "");
    var v = input.value.replace(/\D/g, "").slice(0, 8);
    if (v.length >= 2) {
      v = v.replace(/(\d{2})(\d)/, "$1/$2");
    }
    if (v.length >= 5) {
      v = v.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2$3");
    }
    input.value = v;
  });
}

function mascaraCEP(input) {
  input.addEventListener("input", function () {
    if (/\D/.test(input.value)) input.value = input.value.replace(/\D/g, "");
    var v = input.value.replace(/\D/g, "").slice(0, 8);
    if (v.length >= 5) {
      v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    }
    input.value = v;
  });
}
function mascaraTelefone(input) {
  input.addEventListener("input", function () {
    var v = input.value.replace(/\D/g, "");
    if (v.length <= 10) {
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    input.value = v.slice(0, 15);
  });
}

var password = document.getElementById("password");
var messageSenha = document.getElementById("textPassword");
var entrar = document.querySelector("button");
var inputEmail = document.getElementById("email");
var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
var messageEmail = document.getElementById("textEmail");
var numero = document.getElementById("numero");
var messageNumero = document.getElementById("textNumero");
var nome = document.getElementById("nome");
var messageNome = document.getElementById("textNome");
var data = document.getElementById("data");
var messageData = document.getElementById("textData");
var cep = document.getElementById("cep");
var messageCep = document.getElementById("textCep");

mascaraData(data);
mascaraCEP(cep);
mascaraTelefone(numero);

function validateInput() {
  var inputValue = inputEmail.value;
  var numeroValue = numero.value;
  var nomeValue = nome.value;
  var dataValue = data.value;
  var cepValue = cep.value;

  var valid = true;

  if (inputEmail.value === "") {
    messageEmail.textContent = "Campo obrigatório";
    messageEmail.style.color = "red";
    inputEmail.style.border = "1px solid red";
    valid = false;
  } else if (emailRegex.test(inputValue)) {
    messageEmail.textContent = "";
    messageEmail.style.color = "";
    inputEmail.style.border = "";
  }

  if (numero.value === "") {
    messageNumero.textContent = "Campo obrigatório";
    messageNumero.style.color = "red";
    numero.style.border = "1px solid red";
    valid = false;
  } else if (/^\d{12}$/.test(numeroValue)) {
    messageNumero.textContent = "";
    messageNumero.style.color = "";
    numero.style.border = "";
  }

  if (nome.value === "") {
    messageNome.textContent = "Campo obrigatório";
    messageNome.style.color = "red";
    nome.style.border = "1px solid red";
    valid = false;
  } else if (nomeValue.trim().length >= 3) {
    messageNome.textContent = "";
    messageNome.style.color = "";
    nome.style.border = "";
  }

  if (data.value === "") {
    messageData.textContent = "Campo obrigatório";
    messageData.style.color = "red";
    data.style.border = "1px solid red";
    valid = false;
  } else if (/^\d{8}$/.test(dataValue)) {
    messageData.textContent = "";
    messageData.style.color = "";
    data.style.border = "";
  }

  if (cep.value === "") {
    messageCep.textContent = "Campo obrigatório";
    messageCep.style.color = "red";
    cep.style.border = "1px solid red";
    valid = false;
  } else if (/^\d{8}$/.test(cepValue)) {
    messageCep.textContent = "";
    messageCep.style.color = "";
    cep.style.border = "";
  }

  return valid;
}

function senhaValida() {
  if (password.value.length >= 8) {
    messageSenha.textContent = "";
    messageSenha.style.color = "";
    password.style.border = "";
    return true;
  } else {
    messageSenha.textContent = "Senha inválida (mínimo 8 caracteres)";
    messageSenha.style.color = "red";
    password.style.border = "1px solid red";
    return false;
  }
}

entrar.addEventListener("click", function (event) {
  event.preventDefault();

  var inputIsValid = validateInput();
  var senhaIsValid = senhaValida();

  if (inputIsValid && senhaIsValid) {
    document.getElementById("msgError").textContent = "";
    alert("Formulário válido. Você pode prosseguir.");
  } else {
    document.getElementById("msgError").textContent = "Por favor, corrija os erros no formulário.";
  }
});

inputEmail.addEventListener("input", function () {
  if (emailRegex.test(inputEmail.value)) {
    messageEmail.textContent = "";
    messageEmail.style.color = "";
    inputEmail.style.border = "";
  }
});

numero.addEventListener("input", function () {
  if (/^\d{12}$/.test(numero.value)) {
    messageNumero.textContent = "";
    messageNumero.style.color = "";
    numero.style.border = "";
  }
});

nome.addEventListener("input", function () {
  if (nome.value.trim().length >= 3) {
    messageNome.textContent = "";
    messageNome.style.color = "";
    nome.style.border = "";
  }
});

data.addEventListener("input", function () {
  if (/^\d{8}$/.test(data.value)) {
    messageData.textContent = "";
    messageData.style.color = "";
    data.style.border = "";
  }
});

cep.addEventListener("input", function () {
  if (/^\d{8}$/.test(cep.value)) {
    messageCep.textContent = "";
    messageCep.style.color = "";
    cep.style.border = "";
  }
});
