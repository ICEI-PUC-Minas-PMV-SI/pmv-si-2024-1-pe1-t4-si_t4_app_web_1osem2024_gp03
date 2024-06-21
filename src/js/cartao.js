$(document).ready(function() {
    // Evento para salvar os dados do cartão
    $('#salvarCartaoBtn').click(function() {
        var nome = $('#nomeInput').val();
        var cpf = $('#cpfInput').val();
        var cep = $('#cepInput').val();

        // Validar se os campos estão preenchidos
        if (nome !== '' && cpf !== '' && cep !== '') {
            var cartao = {
                nome: nome,
                cpf: cpf,
                cep: cep
            };

            // Salvar no LocalStorage
            localStorage.setItem('cartaoVacina', JSON.stringify(cartao));

            // Fechar o modal após salvar (assumindo que está usando Bootstrap para o modal de solicitação)
            $('#solicitarModal').modal('hide');

            // Limpar os campos do formulário
            $('#cartaoForm')[0].reset();

            // Mostrar mensagem de sucesso (opcional)
            alert('Cartão de vacinação salvo com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Evento para visualizar o cartão salvo
    $('#visualizarCartaoBtn').click(function() {
        var cartaoSalvo = localStorage.getItem('cartaoVacina');
        if (cartaoSalvo) {
            var cartao = JSON.parse(cartaoSalvo);
            
            // Preencher as informações no modal
            $('#nome').text(cartao.nome);
            $('#cpf').text(cartao.cpf);
            $('#cep').text(cartao.cep);
            
            // Exibir o modal usando Bootstrap
            $('#modalCartao').modal('show');
        } else {
            alert('Você ainda não salvou seu cartão de vacinação.');
        }
    });

    // Fechar o modal quando o botão de fechar (X) do Bootstrap é clicado
    $('#modalCartao .close').click(function() {
        $('#modalCartao').modal('hide');
    });

    // Fechar o modal clicando fora da área do modal usando Bootstrap
    $(document).on('click', function(event) {
        if ($(event.target).hasClass('modal')) {
            $('#modalCartao').modal('hide');
        }
    });
    $('#downloadCartaoBtn').click(function() {
        var cartaoSalvo = localStorage.getItem('cartaoVacina');
        if (cartaoSalvo) {
            var cartao = JSON.parse(cartaoSalvo);
            
            // Gerar o conteúdo para download
            var conteudo = 'Cartão de Vacinação\n\n';
            conteudo += 'Nome: ' + cartao.nome + '\n';
            conteudo += 'CPF: ' + cartao.cpf + '\n';
            conteudo += 'CEP: ' + cartao.cep + '\n';
            // Adicione mais informações conforme necessário
            
            // Criar um elemento <a> para iniciar o download
            var elementoA = document.createElement('a');
            elementoA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(conteudo));
            elementoA.setAttribute('download', 'cartao_vacinacao.txt');
            elementoA.style.display = 'none';
            document.body.appendChild(elementoA);
            elementoA.click();
            document.body.removeChild(elementoA);
        } else {
            alert('Você ainda não salvou seu cartão de vacinação para baixar.');
        }
    });
})

