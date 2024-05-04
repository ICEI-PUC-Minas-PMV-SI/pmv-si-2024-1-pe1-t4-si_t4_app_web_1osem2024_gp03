// Get the modal
var modal = document.getElementById("exampleModal");

// Get the button that opens the modal
var btn = document.querySelector("[data-bs-toggle='modal']");

// Get the <span> element that closes the modal
var span = document.querySelector(".btn-close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Supondo que você tenha um objeto para armazenar o diálogo
var dialogo = {
  mensagens: []
};

// Função para mostrar o texto do textarea na modal e chamar o chatbot
function mostrarTexto() {
  var texto = document.getElementById('campoTexto').value;
  document.getElementById('textoModal').innerText = texto;

  // Salva a mensagem enviada no objeto de diálogo
  dialogo.mensagens.push({ usuario: texto });

  // Chama o chatbot e passa o texto como parâmetro
  chamarChatbot(texto);
}

// Função para simular a chamada do chatbot
function chamarChatbot(mensagem) {
  // Simulação de resposta do chatbot
  var respostaChatbot = "Resposta do chatbot para '" + mensagem + "'";

  // Salva a resposta do chatbot no objeto de diálogo
  dialogo.mensagens.push({ chatbot: respostaChatbot });

  // Atualiza a interface com a resposta do chatbot
  atualizarInterfaceComRespostaChatbot(respostaChatbot);
}

// Função para atualizar a interface com a resposta do chatbot
function atualizarInterfaceComRespostaChatbot(resposta) {
  var elementoResposta = document.createElement('p');
  elementoResposta.innerText = resposta;
  document.querySelector('.modal-body').appendChild(elementoResposta);
}

function enviarMensagem() {
  // Obter o valor do campo de texto
  let mensagem = document.getElementById('campoTexto').value;

  // Salvar a mensagem no localStorage
  salvarMensagem('dialogos', mensagem);

  // Atualizar a modal com a nova mensagem
  mostrarMensagens('dialogos');

  // Limpar o campo de texto
  document.getElementById('campoTexto').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  // Adicionar ouvinte de eventos ao botão enviar
  let botaoEnviar = document.querySelector('.bt-enviar');
  botaoEnviar.addEventListener('click', enviarMensagem);
});

document.addEventListener('DOMContentLoaded', function() {
  // Adicionar ouvinte de eventos ao botão que abre a modal
  let botaoModal = document.querySelector('[data-bs-toggle="modal"]');
  botaoModal.addEventListener('click', function() {
    mostrarMensagens('dialogos');
  });
});

function salvarMensagem(chave, mensagem) {
  // Obter o array de mensagens atual do localStorage, ou iniciar um novo array se não existir
  let mensagens = JSON.parse(localStorage.getItem(chave)) || [];
  // Adicionar a nova mensagem ao array
  mensagens.push(mensagem);
  // Salvar o array atualizado de volta ao localStorage
  localStorage.setItem(chave, JSON.stringify(mensagens));
}

function mostrarMensagens(chave) {
  // Obter o array de mensagens do localStorage
  let mensagens = JSON.parse(localStorage.getItem(chave)) || [];
  // Encontrar ou criar o elemento que vai conter as mensagens na modal
  let containerMensagens = document.getElementById('containerMensagens') || document.createElement('div');
  containerMensagens.id = 'containerMensagens';

  // Limpar mensagens anteriores
  containerMensagens.innerHTML = '';

  // Adicionar cada mensagem ao container
  mensagens.forEach(mensagem => {
    let elementoMensagem = document.createElement('div');
    elementoMensagem.textContent = mensagem;
    containerMensagens.appendChild(elementoMensagem);
  });

  // Adicionar o container de mensagens à modal
  let modal = document.getElementById('exampleModal');
  modal.appendChild(containerMensagens);
}
