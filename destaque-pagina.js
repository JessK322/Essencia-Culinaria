document.addEventListener("DOMContentLoaded", function() {
    // Animação de entrada
    const destaqueBox = document.querySelector(".destaque-box");
    destaqueBox.style.opacity = 0;
    destaqueBox.style.transform = "translateY(20px)";
    setTimeout(() => {
        destaqueBox.style.transition = "all 0.5s ease";
        destaqueBox.style.opacity = 1;
        destaqueBox.style.transform = "translateY(0)";
    }, 300);

    // Efeito de zoom nas imagens
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "transform 0.3s";
        });
        box.addEventListener("mouseout", () => {
            box.style.transform = "scale(1)";
        });
    });
});
