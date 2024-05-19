// Obtém o modal
var modal = document.getElementById("meuModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("meuBotao");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];

// Quando o usuário clica no botão, abre o modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Obtém os elementos do chatbot
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Adiciona evento de escuta ao formulário de entrada
inputForm.addEventListener('submit', function(event) {
  // Previne a submissão do formulário
  event.preventDefault();

  // Obtém a entrada do usuário
  const input = inputField.value;

  // Limpa o campo de entrada
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Adiciona a entrada do usuário à conversa
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Gera a resposta do chatbot
  const response = generateResponse(input);

  // Adiciona a resposta do chatbot à conversa
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Função para gerar resposta do chatbot
function generateResponse(input) {
    // Adicione a lógica do chatbot aqui
    const responses = [
      "Olá, como posso ajudar você hoje? 😊",
      "Desculpe, não entendi sua pergunta. Você poderia reformular? 😕",
      "Estou aqui para ajudar com quaisquer dúvidas ou preocupações que você possa ter. 📩",
      "Desculpe, não posso navegar na internet ou acessar informações externas. Há algo mais em que posso ajudar? 💻",
      "O que você gostaria de saber? 🤔",
      "Desculpe, não estou programado para lidar com linguagem ofensiva ou inapropriada. Por favor, evite usar tal linguagem em nossa conversa. 🚫",
      "Estou aqui para ajudar com quaisquer dúvidas ou problemas que você possa ter. Como posso ajudar você hoje? 🚀",
      "Há algo específico sobre o qual você gostaria de falar? 💬",
      "Estou feliz em ajudar com quaisquer dúvidas ou preocupações que você possa ter. Apenas me informe como posso ajudar. 😊",
      "Estou aqui para ajudar com quaisquer dúvidas ou problemas que você possa ter. Com o que posso ajudar hoje? 🤗",
      "Há algo específico que você gostaria de perguntar ou discutir? Estou aqui para ajudar com quaisquer dúvidas ou preocupações que você possa ter. 💬",
      "Estou aqui para ajudar com quaisquer dúvidas ou problemas que você possa ter. Como posso ajudar você hoje? 💡",
      "A dengue é uma doença transmitida pelo mosquito Aedes aegypti. É importante eliminar água parada para prevenir a proliferação do mosquito. 🦟",
      "Existem quatro tipos de vírus da dengue. É possível ser infectado mais de uma vez. Proteja-se usando repelente e roupas que cubram a maior parte do corpo. 🧴👕",
      "Os sintomas da dengue incluem febre alta, dor de cabeça, dor atrás dos olhos, fadiga, dor nas articulações e manchas vermelhas na pele. Se sentir esses sintomas, procure atendimento médico. 🤒🏥"
    ];
    
    // Retorna uma resposta aleatória
    return responses[Math.floor(Math.random() * responses.length)];
}
