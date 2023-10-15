function entrar() {
  let email = document.querySelector('#email').value.trim().toLowerCase();
  let senha = document.querySelector('#senha').value;
  let labelEmail = document.querySelector('#labelEmail');
  let labelSenha = document.querySelector('#labelSenha');
  let msgError = document.querySelector('#msgError');
  let userValid = null;

  
  let listaUserJSON = localStorage.getItem('listaUser');
  let listaUser = listaUserJSON ? JSON.parse(listaUserJSON) : [];

  if (email === '' || senha === '') {
    msgError.style.color = 'red';
    msgError.style.display = 'block';
    msgError.textContent = 'Preencha todos os campos';
    return;
  }

  listaUser.forEach((item) => {
    if (email === item.userCad && senha === item.senhaCad) {
      console.log('Email armazenado: ' + item.userCad);
      console.log('Senha armazenada: ' + item.senhaCad);

      userValid = {
        email: item.userCad,
        senha: item.senhaCad
      };
    }
  });

  if (userValid !== null) {
    setTimeout(() => {
      window.location.href = "../NOVOPERFIL/index.html";
    }, 2000);
    
    
  } else {
    labelEmail.style.color = 'red';
    labelSenha.style.color = 'red';
    msgError.style.color = 'red';
    msgError.style.display = 'block';
    msgError.textContent = 'Usuário ou senha incorretos';

    document.querySelector('#senha').value = '';
    document.querySelector('#email').focus();
  }
}
