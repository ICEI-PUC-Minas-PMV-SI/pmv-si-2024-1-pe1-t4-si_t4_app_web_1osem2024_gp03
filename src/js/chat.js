$(document).ready(function(){
    // Mensagem inicial
    appendMessage('bot', 'Olá! Tudo bem? Escreva sua dúvida sobre o vírus da dengue :');

    // Lista de palavras-chave e respostas correspondentes
    const keywords = {
        'dengue': 'Parece que você mencionou dengue. Posso ajudar com informações sobre isso.',
        'sintomas': 'Os sintomas da dengue incluem febre alta, dores musculares e articulares, dor de cabeça, dor atrás dos olhos e erupções cutâneas.',
        'tratamento': 'O tratamento da dengue inclui repouso, hidratação e medicamentos para aliviar a dor e a febre. Consulte um médico para orientações específicas.',
        'prevenção': 'A prevenção da dengue envolve evitar a proliferação do mosquito Aedes aegypti, utilizando repelentes, telas e eliminando focos de água parada.',
        'transmissão': 'A dengue é transmitida pela picada do mosquito Aedes aegypti infectado.',
        'vacina': 'Existe uma vacina contra a dengue chamada Dengvaxia, que é recomendada para pessoas que já tiveram dengue anteriormente.',
        'diagnóstico': 'O diagnóstico da dengue é feito através de exames de sangue específicos, como o teste NS1 e sorologia.',
        'mosquito': 'O mosquito Aedes aegypti é o principal vetor da dengue. Ele se reproduz em água parada e tem hábitos diurnos.',
        'complicações': 'As complicações da dengue podem incluir dengue hemorrágica e síndrome do choque da dengue, que são condições graves e necessitam de atendimento médico imediato.',
        'epidemia': 'A dengue pode causar epidemias, especialmente em regiões tropicais e subtropicais onde o mosquito vetor é comum.',
        'casos': 'Os casos de dengue podem variar ao longo do ano, com picos durante as estações chuvosas devido ao aumento dos criadouros de mosquitos.',
        'incubação': 'O período de incubação da dengue, ou seja, o tempo entre a picada do mosquito infectado e o aparecimento dos sintomas, geralmente varia de 4 a 10 dias.',
        'hidratação': 'Manter-se hidratado é crucial para pacientes com dengue, pois a doença pode causar desidratação severa.',
        'medicamentos': 'É importante evitar o uso de medicamentos como aspirina e ibuprofeno em caso de dengue, pois podem aumentar o risco de sangramentos.',
        'febre': 'A febre alta é um dos primeiros sintomas da dengue, muitas vezes acompanhada por calafrios e sudorese intensa.',
        'erupção': 'Erupções cutâneas podem aparecer durante o curso da dengue, geralmente entre o segundo e o quinto dia após o início da febre.',
        'plaquetas': 'A contagem de plaquetas pode diminuir significativamente em pacientes com dengue, o que requer monitoramento constante.',
        'hospitalização': 'Casos graves de dengue podem necessitar de hospitalização para tratamento intensivo e monitoramento contínuo.',
        'dores': 'Dores intensas nos músculos e articulações, frequentemente descritas como "quebra-ossos", são sintomas comuns da dengue.',
        'repelente': 'O uso regular de repelentes de insetos é uma medida eficaz para prevenir a picada do mosquito Aedes aegypti.',
        'piscinas': 'Manter piscinas limpas e tratadas com cloro é essencial para evitar a proliferação do mosquito Aedes aegypti.',
        'educação': 'Programas de educação e conscientização comunitária são fundamentais para controlar e prevenir surtos de dengue.',
        'pesticidas': 'A aplicação de pesticidas pode ser utilizada para controlar a população de mosquitos, mas deve ser feita de maneira segura e eficaz.',
        'sangramento': 'O sangramento gengival ou nasal pode ser um sinal de alerta para formas graves da dengue e deve ser tratado imediatamente.',
        'teste rápido': 'Testes rápidos para dengue podem ser utilizados para detectar a presença do vírus ou anticorpos em poucos minutos.',
        'notificação': 'A notificação de casos de dengue às autoridades de saúde é importante para monitorar e controlar a disseminação da doença.',
        'larvas': 'Inspecionar e eliminar locais onde as larvas do mosquito possam se desenvolver é uma medida preventiva eficaz contra a dengue.'
    };
    // Quando o botão "Enviar" é clicado
    $("#sendBtn").click(function(){
        sendMessage(); // Chama a função sendMessage para enviar a mensagem digitada
    });

    // Quando uma tecla é pressionada no campo de entrada de mensagem
    $("#chatInput").keypress(function(event){
        if(event.which == 13){ // Se a tecla pressionada for "Enter"
            sendMessage(); // Chama a função sendMessage para enviar a mensagem digitada
        }
    });

    // Função para enviar mensagem
    function sendMessage(){
        var message = $("#chatInput").val(); // Obtém o texto digitado pelo usuário
        if (message != "") { // Verifica se a mensagem não está vazia
            appendMessage('self', message); // Adiciona a mensagem ao chatbox como mensagem própria (do usuário)
            $("#chatInput").val(""); // Limpa o campo de entrada de mensagem

            // Verifica se a mensagem contém alguma palavra-chave
            let foundKeyword = false;
            for (const keyword in keywords) {
                if (message.toLowerCase().includes(keyword.toLowerCase())) {
                    setTimeout(function(){
                        appendMessage('bot', keywords[keyword]);
                    }, 1000); // Responde após 1 segundo
                    foundKeyword = true;
                    break; // Interrompe o loop após encontrar a primeira palavra-chave
                }
            }

            // Se nenhuma palavra-chave foi encontrada, responde com uma mensagem padrão
            if (!foundKeyword) {
                setTimeout(function(){
                    appendMessage('bot', 'Obrigado por sua mensagem! Se precisar de mais informações, não hesite em perguntar.');
                }, 1000); // 1000 milissegundos = 1 segundo
            }
        }
    }

    // Função para adicionar mensagem ao chatbox
    function appendMessage(user, message){
        var userClass = (user === 'self') ? 'self' : 'bot'; // Determina a classe CSS com base no remetente da mensagem
        var userPhoto = (user === 'self') ? 'user-photo-self' : 'user-photo-bot'; // Determina a classe CSS para a foto do usuário com base no remetente da mensagem
        $(".chatlogs").append('<div class="chat ' + userClass + '"><div class="' + userPhoto + '"></div><p class="chat-message">' + message + '</p></div>'); // Adiciona a mensagem ao chatbox
        $(".chatlogs").scrollTop($(".chatlogs")[0].scrollHeight); // Rola o chatbox para o final, para exibir a mensagem mais recente
    }
});

const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Adicionar listener para a mudança no input de arquivo
fileInput.addEventListener('change', handleFile);

// Função para lidar com a mudança no input de arquivo
function handleFile(event) {
    const files = event.target.files;
    if (files.length === 0) {
        console.error('Nenhum arquivo selecionado.');
        return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const colors = analyzeColors(imageData);
            const hasDengue = checkForDengue(colors);
            displayResult(hasDengue);
        }
        img.src = e.target.result;
    }

    reader.readAsDataURL(file);
}
