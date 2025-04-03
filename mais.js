// Função para gerenciar a seleção de estrelas
document.querySelectorAll('.estrela').forEach(function(estrela) {
    estrela.addEventListener('click', function() {
        let valor = this.getAttribute('data-value');
        selecionarEstrelas(valor);
    });
});

// Função para alterar a cor das estrelas de acordo com a avaliação
function selecionarEstrelas(valor) {
    let estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach(function(estrela) {
        if (estrela.getAttribute('data-value') <= valor) {
            estrela.style.color = 'gold';
        } else {
            estrela.style.color = '#ccc';
        }
    });
}

// Função para enviar a avaliação
function enviarAvaliacao() {
    let comentario = document.getElementById('comentario').value;
    let estrelasSelecionadas = document.querySelectorAll('.estrela');
    let estrelasValor = 0;
    
    // Verificar quantas estrelas foram selecionadas
    estrelasSelecionadas.forEach(function(estrela) {
        if (estrela.style.color === 'gold') {
            estrelasValor = estrela.getAttribute('data-value');
        }
    });
    
    if (comentario.trim() === '') {
        alert('Por favor, escreva um comentário.');
        return;
    }

    if (estrelasValor === 0) {
        alert('Por favor, selecione uma avaliação de estrelas.');
        return;
    }

    // Aqui você pode enviar os dados para um servidor ou processar de outra forma
    alert(`Avaliação Enviada! Comentário: "${comentario}" | Estrelas: ${estrelasValor}`);
}
// Carrossel de Imagens - Trocar imagens automaticamente a cada 5 segundos
let indiceImagem = 0;
const imagens = document.querySelectorAll('.carrossel-imagem');
const totalImagens = imagens.length;

function trocarImagem() {
    indiceImagem = (indiceImagem + 1) % totalImagens;
    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${indiceImagem * 100}%)`;
}

// Trocar imagens a cada 5 segundos
setInterval(trocarImagem, 5000);
function voltarPagina() {
    window.history.back();
}