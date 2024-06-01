window.onload = function() {
    // FUNÇÃO DE APARECER OS MÓVEIS
    let luzes = document.getElementById("luzes");
    luzes.style.opacity = 1;
    luzes.style.top = "-110px";
    //SOFÁ
    let sofa = document.getElementById("sofa");
    sofa.style.opacity = 1;
    sofa.style.top = "190px";
    sofa.style.width = "900px";
    //MESA
    let mesa = document.getElementById("mesa");
    mesa.style.opacity = 1;
    mesa.style.right = "300px";
  };

  //CARROSSEL DE MOVEIS
  document.addEventListener('DOMContentLoaded', function() {
    //USA QUERY SELECTOR PARA CAPTURAR OS ELEMENTOS
    const carrMoveis = document.querySelector('.carr-moveis');
    const carrItem = document.querySelectorAll('.carr-item');
    const anterior = document.querySelector('#anterior');
    const proximo = document.querySelector('#proximo');
    let index = 0;

    function motreSlide(newIndex) {
        if (newIndex < 0) {
            index = carrItem.length - 1;
        } else if (newIndex >= carrItem.length) {
            index = 0;
        } else {
            index = newIndex;
        }
        carrMoveis.style.transform = `translateX(-${index * 100}%)`;
    }

    anterior.addEventListener('click', function() {
        motreSlide(index - 1);
    });

    proximo.addEventListener('click', function() {
        motreSlide(index + 1);
    });

    motreSlide(index); // Initialize the first slide
});

//CADASTRO
class novoUsuario {
  constructor(nomeCompleto, usuario, senha){
    this.nomeCompleto = nomeCompleto
    this.usuario = usuario
    this.senha = senha
  }
}

//CADASTRO
function cadastrar() {
  //pega as informações que o usuário escreveu
  const nome = document.getElementById('nomeCompleto').value.trim();
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  //verifica se de fato está preenchido
  if (nome && usuario && senha) {
      const usu = new novoUsuario(nome, usuario, senha);
      saveToLocalStorage(usu);
      document.getElementById('nomeCompleto').value = '';
      document.getElementById('usuario').value = '';
      document.getElementById('senha').value = '';
      alert(`Nome ${nome} cadastrado com sucesso!`);
  } else {
      alert('Por favor, preencha todos os campos.');
  }
}

//salva no local storage
function saveToLocalStorage(usuario) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
