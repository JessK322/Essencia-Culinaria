let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function changeSlide(direction) {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add("active");
}



// Função de busca
function buscar(event) {
    event.preventDefault();

    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();

    // Verifica se a busca está sendo feita dentro de uma página específica
    if (!document.querySelector('.container')) {
        // Redireciona para a página principal de receitas antes de buscar
        window.location.href = "receitas.html?search=" + encodeURIComponent(searchQuery);
        return;
    }

    // Se estiver na página de receitas, realiza a busca normalmente
    const receitas = document.querySelectorAll('.box');
    let encontrou = false;

    receitas.forEach((receita) => {
        const receitaNome = receita.querySelector('.recipe-name').textContent.toLowerCase().trim();

        if (receitaNome.includes(searchQuery)) {
            const linkReceita = receita.getAttribute("onclick").match(/'([^']+)'/)[1];
            window.location.href = linkReceita; // Redireciona para a página correta
            encontrou = true;
        }
    });

    if (!encontrou) {
        alert("Receita não encontrada!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search");

    if (searchQuery) {
        document.getElementById("searchInput").value = searchQuery; // Preenche o campo de busca com o termo digitado
        buscar(new Event("submit")); // Executa a busca automaticamente
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se está na página do menu
    if (window.location.pathname.includes("receitas.html")) {
        const searchForm = document.querySelector("form");
        if (searchForm) {
            searchForm.style.display = "none"; // Oculta o formulário de busca
        }
    }
});