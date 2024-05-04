if(localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "/html/login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;


function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = ""
}



var db = {
    dados: [
        {
            titulo: 'Peixe a milanesa',
            descricao: 'receita peixe',
            imagem: '/imagens/prato1.jpg',
            categoria: 'carnes',
            preco: 120.00
        }, {

            titulo: 'Agua com gas',
            descricao: 'receita agua',
            imagem: '/imagens/prato2.jpg',
            categoria: 'bebidas',
            preco: 8.00

        }, {

            titulo: 'bife de cavalo',
            descricao: 'receita bife',
            imagem: '/imagens/prato3.jpg',
            categoria: 'carnes',
            preco: 96.00

        }, {

            titulo: 'refrigerante guarana',
            descricao: 'receita guarana',
            imagem: '/imagens/prato4.jpg',
            categoria: 'bebidas',
            preco: 9.00

        }, {

            titulo: 'pudim',
            descricao: 'receita pudim',
            imagem: '/imagens/prato5.jpg',
            categoria: 'sobremesas',
            preco: 13.00

        }
    ]
}