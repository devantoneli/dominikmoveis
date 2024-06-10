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
//   document.addEventListener('DOMContentLoaded', function() {
//     //USA QUERY SELECTOR PARA CAPTURAR OS ELEMENTOS
//     const carrMoveis = document.querySelector('.carr-moveis');
//     const carrItem = document.querySelectorAll('.carr-item');
//     const anterior = document.querySelector('#anterior');
//     const proximo = document.querySelector('#proximo');
//     let index = 0;

//     function motreSlide(newIndex) {
//         if (newIndex < 0) {
//             index = carrItem.length - 1;
//         } else if (newIndex >= carrItem.length) {
//             index = 0;
//         } else {
//             index = newIndex;
//         }
//         carrMoveis.style.transform = `translateX(-${index * 100}%)`;
//     }

//     anterior.addEventListener('click', function() {
//         motreSlide(index - 1);
//     });

//     proximo.addEventListener('click', function() {
//         motreSlide(index + 1);
//     });

//     motreSlide(index); // Initialize the first slide
// });

//CADASTRO
class novoUsuario {
  constructor(nomeCompleto, usuario, senha){
    this.nomeCompleto = nomeCompleto
    this.usuario = usuario
    this.senha = senha
  }
}

class user extends novoUsuario {
}

//CADASTRO
function cadastrar() {
  //pega as informações que o usuário escreveu
  const nome = document.getElementById('nomeCompleto').value.trim();
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  //verifica se de fato está preenchido
  if (nome && usuario && senha) {
      const usu = new user(nome, usuario, senha);
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

//LOGIN
function entrar() {
  var usuariol = document.getElementById("usuariol").value;
  let senhal = document.getElementById("senhal").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.usuario === usuariol && usuario.senha === senhal;
  });

  if (usuarioEncontrado) {
    let infoUsuario = {"usuario": usuariol, "carrinho": []};
    login(infoUsuario);
    window.location.href = "logado.html";
  } else {
    alert("Usuário ou senha incorreto");
  }
}

//ADICIONANDO USUARIO LOGADO AO REGISTRO
function login(info){
    // Verifica se há um usuário existente na sessão
    const usuarioExistente = JSON.parse(sessionStorage.getItem('usuario'));

    // Se houver um usuário existente, remove-o
    if (usuarioExistente) {
        sessionStorage.removeItem('usuario');
    }

    // Adiciona o novo usuário
    sessionStorage.setItem('usuario', JSON.stringify(info));
}

//ABRI E FECHAR CADASTRO/LOGIN
function botaoCad(acao){
  switch(acao){
    case 'abrirCad':{
      document.getElementsByClassName('baseCadastro')[0].style.display = 'block'
      break;
    }
    case 'fecharCad':{
      document.getElementsByClassName('baseCadastro')[0].style.display = 'none'
      let inputsCad = document.getElementsByClassName('baseCadastro')[0].getElementsByTagName("input");
      for (let i = 0; i < inputsCad.length; i++) {
        inputsCad[i].value = '';
      }
      break;
    }
    case 'abrirLog':{
      document.getElementsByClassName('baseCadastro')[1].style.display = 'block'
      break;
    }
    case 'fecharLog':{
      document.getElementsByClassName('baseCadastro')[1].style.display = 'none'
      let inputsLog = document.getElementsByClassName('baseCadastro')[1].getElementsByTagName("input");
      for (let i = 0; i < inputsLog.length; i++) {
        inputsLog[i].value = '';
      }
      break;
    }
    default :{
      break;
    }
  }
}

//ANIMA LABEL
function animaLabel(label){
  let sele = label ? label : null;
  let nC = document.getElementById('nC');
  let uS = document.getElementById('uS');
  let sE = document.getElementById('sE');
  let uSl = document.getElementById('uSl');
  let sEl = document.getElementById('sEl');
  let labels = [nC, uS, sE, uSl, sEl];

  labels.forEach(element => {
    let input = element.id == 'nC' ? document.getElementById('nomeCompleto') : element.id == 'uS' ? document.getElementById('usuario') : element.id == 'sE' ? document.getElementById('senha') : element.id == "uSl" ? document.getElementById('usuariol') : element.id == "sEl" ? document.getElementById('senhal') : null;
    if(element.id == sele){
      element.style.animation = 'upLabel 1s forwards'
    }else {
      if (element.style.animation == '1s ease 0s 1 normal forwards running upLabel' && (input.name == element.id && input.value == '')){
        element.style.animation = 'downLabel 1s forwards'
      }
    }
  });
}

//CATALOGO MOVEIS
class infoMovel {
  constructor(img, desc, vl){
    this.img = img;
    this.desc = desc;
    this.vl = vl
  }
}
var moveis = [];

var sofa1 = new infoMovel("img/sofá.png", "SOFÁ 3 LUGARES CLEAN COM TECIDO MACIO", 1259.90);
var sofa2 = new infoMovel("img/sofá2.png", "SOFÁ MORDERNO CLÁSSICO COM 3 ALMOFADAS", 2890);
var sofa3 = new infoMovel("img/sofá3.png", "SOFÁ ELEGANTE COM QUATRO ALMOFADAS", 4199.90);

var armario1 = new infoMovel("img/armario.png", "ARMÁRIO COZINHA JULIETE", 2569);
var armario2 = new infoMovel("img/armario2.png", "ARMÁRIO COZINHA ARIZONA", 4029);
var armario3 = new infoMovel("img/armario3.png", "ARMÁRIO COZINHA MADESA", 1299);

var cama1 = new infoMovel("img/cama.png", "CAMA MODERNA SIMPLES", 2250);
var cama2 = new infoMovel("img/cama2.png", "CAMA DINA ELEGANTE", 10742.22);
var cama3 = new infoMovel("img/cama3.png", "CAMA JACQUELINE", 5629.90);

var dec1 = new infoMovel("img/estante.png", "ESTANTE INDUSTRIAL RAVENA", 3419.90);
var dec2 = new infoMovel("img/escultura.png", "ESCULTURA DECORATIVA ABSTRATA", 305.91);
var dec3 = new infoMovel("img/vaso.png", "KIT 3 VASOS ESPIRAIS MODERNO", 220);

moveis.push(sofa1, sofa2, sofa3, armario1, armario2, armario3, cama1, cama2, cama3, dec1, dec2, dec3);

//ADICIONANDO MOVEIS AO CARRINHO

function add(movel){
    // Recupera o usuário da sessão
    var usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
    // Adiciona o novo item ao carrinho do usuário
    usuario.carrinho.push(moveis[movel]);
    
    // Atualiza o usuário na sessão
    sessionStorage.setItem('usuario', JSON.stringify(usuario));

    console.log(moveis)
    console.log(moveis[movel])
    showCarrinho();
}

//SOMAR VALORES DO CARRINHO
function somaValoresCarrinho() {
  // Recupera o objeto usuario da sessionStorage
  var usuario = JSON.parse(sessionStorage.getItem('usuario'));
  
  // Verifica se o objeto usuario e o carrinho existem
  if (usuario && usuario.carrinho && Array.isArray(usuario.carrinho)) {
      // Calcula a soma dos valores da propriedade 'vl' no carrinho
      var soma = usuario.carrinho.reduce(function(total, item) {
          return total + item.vl;
      }, 0);
      
      return soma;
  } else {
      // Se o carrinho não existe ou está vazio, retorna 0
      return 0;
  }
}


//MOSTRAR CARRINHO
function showCarrinho(){
    var carrinho = document.getElementsByClassName('showCarrinho')[0];
    var aElement = document.querySelector('.showCarrinho a');
    var h1Element = document.querySelector('.showCarrinho h1');
    // Recupera o usuário da sessão
    var usuario = JSON.parse(sessionStorage.getItem('usuario'));
  
    // Verifica se o carrinho está vazio
    if (usuario && usuario.carrinho && usuario.carrinho.length === 0) {
        carrinho.style.display = "none";
    } else {
        var totalCarrinho = somaValoresCarrinho();
        carrinho.style.display = "block";
        h1Element.textContent = totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aElement.textContent = usuario.carrinho.length;
    } 
}

//VERIFICAR SE A PAGINA É A CORRETA PARA CARREGAR PARCIAL CARRINHO
function isPaginaLogado() {
  return window.location.pathname == '/dominkMoveis/logado.html';
}

function isPaginaCarrinho(){
  return window.location.pathname == '/dominkMoveis/carrinho.html';
}

function loadPaginaLogado() {
  if (isPaginaLogado()) {
      parcialCarrinho();
  } else if (isPaginaCarrinho()){
      caCarrinho();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadPaginaLogado();
});


//MOSTRAR PARCIALMENTE NO INICIO LOGADO
function parcialCarrinho(){
  var logadoList = document.getElementById('logadoList');

  var usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
  if (usuario && usuario.carrinho && Array.isArray(usuario.carrinho) && usuario.carrinho.length != 0) {
      // Itera sobre cada item no carrinho
      for (var i = 0; i < 3; i++) {
          var item = usuario.carrinho[i];
          logadoList.innerHTML += `<div class="movel">
          <div class="imgQuadro">
              <img class="sofa" src="${item.img}" alt="Sofá" style="height: 200px !important;">
          </div>
          <div class="cores">
              <img src="img/verde.png" alt="Verde">
              <img src="img/vermelho.png" alt="Vermelho">
              <img src="img/cinza.png" alt="Cinza">
              <img src="img/bege.png" alt="Bege">
          </div>
          <div class="descrição">
              <h2>${item.desc}</h2>
              <p>${item.vl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
      </div>`
      }
  } else {
      document.getElementsByClassName("geral2")[0].style.display = "none";
      document.getElementsByClassName("geral")[0].style.display = "block";
  }
}

//MOSTRAR NA TELA DE CARRINHO
function caCarrinho(){
  var logadoList = document.getElementById('caCarrinho');
  var i = 0;
  var usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
  if (usuario && usuario.carrinho && Array.isArray(usuario.carrinho) && usuario.carrinho.length != 0) {
   
      do {
          i++
          var item = usuario.carrinho[i];
          logadoList.innerHTML += `<div class="movel">
          <div class="imgQuadro">
              <img class="sofa" src="${item.img}" alt="Sofá" style="height: 200px !important;">
          </div>
          <div class="cores">
              <img src="img/verde.png" alt="Verde">
              <img src="img/vermelho.png" alt="Vermelho">
              <img src="img/cinza.png" alt="Cinza">
              <img src="img/bege.png" alt="Bege">
          </div>
          <div class="descrição">
              <h2>${item.desc}</h2>
              <p>${item.vl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div class="carrinho">
          <button onclick="excluir(${i})"><img src="img/lixeira.png" alt="Carrinho"></button>
          </div>
      </div>`
      } while (i < usuario.carrinho.length)
  }
}

// function excluir(){}

function excluir(indice){
  var usuario = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario && usuario.carrinho && Array.isArray(usuario.carrinho) && indice >= 0 && indice < usuario.carrinho.length) {
      usuario.carrinho.splice(indice, 1);
      
      sessionStorage.setItem('usuario', JSON.stringify(usuario));

      console.log('Item removido com sucesso.');
      location.reload();
    } else {
        console.log('Erro: O carrinho está vazio ou o índice é inválido.');
    }
}