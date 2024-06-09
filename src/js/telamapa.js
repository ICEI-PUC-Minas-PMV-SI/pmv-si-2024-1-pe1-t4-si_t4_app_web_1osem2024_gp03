document.getElementById('enderecoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cep = document.getElementById('cep').value;

    fetch('https://viacep.com.br/ws/'+ cep +'/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('endereco').value = data.logradouro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('uf').value = data.uf;

            // API do OpenCage, esta chave tem limite de uma região
            var enderecoCompleto = data.logradouro + ', ' + data.localidade + ', ' + data.uf;
            fetch('https://api.opencagedata.com/geocode/v1/json?q=' + encodeURIComponent(enderecoCompleto) + '&key=6d0e711d72d74daeb2b0bfd2a5cdfdba')
                .then(response => response.json())
                .then(data => {
                    var lat = data.results[0].geometry.lat;
                    var lng = data.results[0].geometry.lng;

                    
                    mapa.setView([lat, lng], 13);
                    L.marker([lat, lng]).addTo(mapa);
                })
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
});

var mapa = L.map('mapa').setView([-15.77972, -47.92972], 4); // Coordenadas de Brasília

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mapa);
