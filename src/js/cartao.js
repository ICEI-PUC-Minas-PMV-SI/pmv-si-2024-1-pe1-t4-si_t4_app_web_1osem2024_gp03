$(document).ready(function () {
  // Evento para salvar os dados do cartão
  $("#salvarCartaoBtn").click(function () {
    var nome = $("#nomeInput").val();
    var cpf = $("#cpfInput").val();
    var cep = $("#cepInput").val();
    var vacina = $('input[name="vaccine"]:checked').val();
    var vaxDate = $("#vaxDate").val();

    // formatando data
    if (vaxDate !== "") {
      var parts = vaxDate.split("-");
      var formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
    }

    // calculo da proxima dose
    var dayDate = new Date(vaxDate);
    dayDate.setDate(dayDate.getDate() + 90);
    var day = ("0" + dayDate.getDate()).slice(-2);
    var month = ("0" + (dayDate.getMonth() + 1)).slice(-2);
    var year = dayDate.getFullYear();
    var nextDate = day + "/" + month + "/" + year;

    // Validar se os campos estão preenchidos
    if (
      nome !== "" &&
      cpf !== "" &&
      cep !== "" &&
      vacina !== undefined &&
      vaxDate !== ""
    ) {
      var cartao = {
        nome: nome,
        cpf: cpf,
        cep: cep,
        vacina: vacina,
        vaxDate: formattedDate,
        nextDose: nextDate,
      };

      // Salvar no LocalStorage
      localStorage.setItem("cartaoVacina", JSON.stringify(cartao));

      // Fechar o modal após salvar (assumindo que está usando Bootstrap para o modal de solicitação)
      $("#solicitarModal").modal("hide");

      // Limpar os campos do formulário
      $("#cartaoForm")[0].reset();

      // Mostrar mensagem de sucesso (opcional)
      alert("Cartão de vacinação salvo com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

  // Evento para visualizar o cartão salvo
  $("#visualizarCartaoBtn").click(function () {
    var cartaoSalvo = localStorage.getItem("cartaoVacina");
    if (cartaoSalvo) {
      var cartao = JSON.parse(cartaoSalvo);

      // Preencher as informações no modal
      $("#nome").text(cartao.nome);
      $("#cpf").text(cartao.cpf);
      $("#cep").text(cartao.cep);
      $("#vaccine").text(cartao.vacina);
      $("#date").text(cartao.vaxDate);
      $("#nextDose").text(cartao.nextDose);

      // Exibir o modal usando Bootstrap
      $("#modalCartao").modal("show");
    } else {
      alert("Você ainda não salvou seu cartão de vacinação.");
    }
  });

  // Fechar o modal quando o botão de fechar (X) do Bootstrap é clicado
  $("#modalCartao .close").click(function () {
    $("#modalCartao").modal("hide");
  });

  // Fechar o modal clicando fora da área do modal usando Bootstrap
  $(document).on("click", function (event) {
    if ($(event.target).hasClass("modal")) {
      $("#modalCartao").modal("hide");
    }
  });
  $("#downloadCartaoBtn").click(function () {
    var cartaoSalvo = localStorage.getItem("cartaoVacina");
    if (cartaoSalvo) {
      var cartao = JSON.parse(cartaoSalvo);

      // Gerar o conteúdo para download
      var conteudo = "Cartão de Vacinação\n\n";
      conteudo += "Nome: " + cartao.nome + "\n";
      conteudo += "CPF: " + cartao.cpf + "\n";
      conteudo += "CEP: " + cartao.cep + "\n";
      conteudo += "VACINA: " + cartao.vacina + "\n";
      conteudo += "DATA DA DOSE: " + cartao.vaxDate + "\n";
      conteudo += "PRÓXIMA DOSE: " + cartao.nextDose + "\n";
      // Adicione mais informações conforme necessário

      // Criar um elemento <a> para iniciar o download
      var elementoA = document.createElement("a");
      elementoA.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(conteudo)
      );
      elementoA.setAttribute("download", "cartao_vacinacao.txt");
      elementoA.style.display = "none";
      document.body.appendChild(elementoA);
      elementoA.click();
      document.body.removeChild(elementoA);
    } else {
      alert("Você ainda não salvou seu cartão de vacinação para baixar.");
    }
  });
});
