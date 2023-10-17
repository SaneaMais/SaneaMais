/* let email = document.getElementById("email");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let data = document.querySelector('#data')
let labelData = document.querySelector('#labelData')
let validData = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let senha = document.getElementById("senha");
let textPassword = document.getElementById("textPassword");

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


email.addEventListener("keyup", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.style.color = 'red';
    email.style.borderColor = 'red';
    textEmail.textContent = "O formato do email deve ser Ex:name@abc.com";
  } else {
    textEmail.textContent = "";
    email.style.borderColor = 'blue'; // Redefinir a cor da borda quando a validação passar.
  }
});


function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}


numero.addEventListener('keyup', () => {
  if (numero.value.length < 15) {
    textNumero.setAttribute('style', 'color: red', 'boder-color: red')
    textNumero.textContent = "Insira até 11 números";
  } else {
    textNumero.textContent = "";
  }
})

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 4) {
    textNome.setAttribute('style', 'color: red', 'boder-color: red')
    textNome.textContent = "Insira no minímo 5 caracteres";
  } else {
    textNome.textContent = "";
  }
})

data.addEventListener('keyup', () => {
  if (data.value.length <= 8) {
    textData.setAttribute('style', 'color: red', 'boder-color: red')
    textData.textContent = "Preencha corretamente o campo";
  } else {
    textData.textContent = "";
  }
})

endereco.addEventListener('keyup', () => {
  if (endereco.value.length <= 4) {
    textEndereco.setAttribute('style', 'color: red', 'boder-color: red')
    textEndereco.textContent = "Insira no minímo 3 caracteres, número e complemento";
  } else {
    textEndereco.textContent = "";
  }
})

cep.addEventListener('keyup', () => {
  if (cep.value.length < 9) {
    textCep.setAttribute('style', 'color: red', 'boder-color: red')
    textCep.textContent = "Insira corretamente 8 números";
  } else {
    textCep.textContent = "";
  }
})

password.addEventListener("keyup", () => {
  if (validatorPassword(password.value) !== true) {
    textPassword.setAttribute('style', 'color: red', 'boder-color: red')
    textPassword.textContent =
      "O formato da senha deve ser no min 6 digitos";
  } else {
    textPassword.textContent = "";
  }
});

function validatorPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}
function cadastrar() {
  form.addEventListener("submit", (e) => {
    if (email.value == "" || password.value == "" || !validNumero || !validNome || !validData || !validEndereco || !validCep) {
      textForm.textContent = "Você precisa preencher todos os campos!";
      e.preventDefault(); // Impedir o envio do formulário
    } else if (validatorEmail(email.value) === true && validatorPassword(password.value) === true) {
      console.log(email.value);
      textForm.textContent = "";
      textEmail.textContent = "";
      console.log(password.value);
      textPassword.textContent = "";

      setTimeout(() => {
        window.location.href = 'file:///C:/Users/carol/OneDrive/Anexos/login/index.html';
      }, 2000);
    } else {
      console.log("Requisição não atendida");
      e.preventDefault(); // Impedir o envio do formulário
    }
  });
}


/* function cadastrar(){
form.addEventListener("submit", (e) => {
  if (email.value == "" && password.value == "") {
    textForm.textContent = "Você precisa preencher todos os campos!";
  } else if (
    validatorEmail(email.value) === true &&
    validatorPassword(password.value) === true 
  ) {
    console.log(email.value);
    textForm.textContent = "";
    textEmail.textContent = "";
    console.log(password.value);
    textPassword.textContent = "";


    setTimeout(()=>{
      window.location.href = 'file:///C:/Users/carol/OneDrive/Anexos/login/index.html'
  }, 2000)

  } else {
    console.log("Requisição não atendida");
  }

  e.preventDefault();
});
} */ 