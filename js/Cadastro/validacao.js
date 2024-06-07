document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
  });

  const emailInput = document.getElementById("email");
  const numeroInput = document.getElementById("numero");
  const nomeInput = document.getElementById("nome");
  const dataInput = document.getElementById("data");
  const cepInput = document.getElementById("cep");
  const passwordInput = document.getElementById("senha");

  passwordInput.addEventListener("input", function () {
      validatePassword(passwordInput);
  });

  // Ajustando os eventos de entrada
  emailInput.addEventListener("input", function () {
      emailInput.value = emailInput.value.toLowerCase();
  });

  numeroInput.addEventListener("input", function () {
      numeroInput.value = numeroInput.value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  });

  dataInput.addEventListener("input", function () {
      dataInput.value = dataInput.value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  });

  cepInput.addEventListener("input", function () {
      cepInput.value = cepInput.value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d{3})/, '$1-$2');
  });

  nomeInput.addEventListener("input", function () {
      nomeInput.value = nomeInput.value.replace(/[^a-zA-Z0-9]/g, '');
  });

  // Adicionando eventos de validação aos inputs
  emailInput.addEventListener("blur", function () {
      validateEmail(emailInput);
  });

  numeroInput.addEventListener("blur", function () {
      validatePhoneNumber(numeroInput);
  });

  nomeInput.addEventListener("blur", function () {
      validateUsername(nomeInput);
  });

  dataInput.addEventListener("blur", function () {
      validateDate(dataInput);
  });

  cepInput.addEventListener("blur", function () {
      validateCep(cepInput);
  });

  passwordInput.addEventListener("blur", function () {
      validatePassword(passwordInput);
  });

  // Função de validação do email
  function validateEmail(input) {
      const email = input.value;
      if (email.includes("@")) {
          clearValidation(input);
      } else {
          setValidation(input, "Email inválido");
      }
  }

  // Função de validação do número de telefone
  function validatePhoneNumber(input) {
      const phoneNumber = input.value.replace(/\D/g, "");
      if (phoneNumber.length === 11) {
          clearValidation(input);
      } else {
          setValidation(input, "Número de telefone inválido");
      }
  }

  // Função de validação do nome de usuário
  function validateUsername(input) {
      const username = input.value;
      if (username.length >= 3) {
          clearValidation(input);
      } else {
          setValidation(input, "Nome inválido");
      }
  }

  // Função de validação da data de nascimento
  function validateDate(input) {
      const date = input.value.replace(/\D/g, "");
      if (date.length === 8) {
          clearValidation(input);
      } else {
          setValidation(input, "Data de nascimento inválida");
      }
  }

  // Função de validação do CEP
  function validateCep(input) {
      const cep = input.value.replace(/\D/g, "");
      if (cep.length === 8) {
          clearValidation(input);
      } else {
          setValidation(input, "CEP inválido");
      }
  }

  // Função de validação da senha
  function validatePassword(input) {
      const password = input.value;
      if (password.length === 0) {
          setValidation(input, "Campo obrigatório");
      } else if (password.length < 8) {
          setValidation(input, "A senha deve ter pelo menos 8 caracteres");
      } else if (!checkPasswordStrength(password)) {
          setValidation(input, "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais");
      } else {
          clearValidation(input);
      }
  }

  // Função para verificar a força da senha
  function checkPasswordStrength(password) {
      // Defina seus critérios de senha forte aqui
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);

      // Verifique se a senha atende a todos os critérios
      return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  }

  // Limpar validação
  function clearValidation(input) {
      input.style.border = "";
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = "";
  }

  // Definir validação
  function setValidation(input, message) {
      input.style.border = "1px solid red";
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.style.color = "red";
  }

  // Validar formulário
  function validateForm() {
      let isValid = true;
      const inputs = [emailInput, numeroInput, nomeInput, dataInput, cepInput, passwordInput];

      inputs.forEach(function (input) {
          if (input.value.trim() == "") {
              setValidation(input, "Campo obrigatório");
              isValid = false;
          }
      });

      if (isValid) {
          form.submit();
      }
  }
});

// Adicionando o script para alternar a visibilidade da senha
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelectorAll(".input__field");
  const inputIcon = document.querySelectorAll(".input__icon");

  inputIcon.forEach((item, i) => {
      item.addEventListener("click", (e) => {
          e.preventDefault();
          item.setAttribute(
              'src',
              input[i].getAttribute('type') === 'password' ?
                  '../../img/Login/eye.svg'
                  : '../../img/Login/eye-off.svg'
          );

          input[i].setAttribute(
              'type',
              input[i].getAttribute('type') === 'password' ?
                  'text'
                  :
                  'password'
          );
      });
  });
});
