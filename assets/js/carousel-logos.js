const items = Array.from(Array(12).keys());
// Função para agrupar os itens em slides
function createCarouselItems(items, itemsPerSlide) {
    const carouselContent = document.getElementById("carouselContent");
    carouselContent.innerHTML = ""; // Limpa o conteúdo anterior

    let currentSlide;
    items.forEach((item, index) => {
        if (index % itemsPerSlide === 0) {
            // Cria um novo slide
            currentSlide = document.createElement("div");
            currentSlide.classList.add("carousel-item");
            if (index === 0) currentSlide.classList.add("active", "px-5"); // Primeiro slide ativo
            carouselContent.appendChild(currentSlide);
        }

        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","col");

        // Cria o elemento do item
        const itemDivImg = document.createElement("img");
        itemDivImg.setAttribute("src",`/nome-produto/imagens/primeira_sect/logo_${item}.png`);
        itemDivImg.setAttribute("style", "width: 11vw; height: 10vh;");
        itemDivImg.setAttribute("alt", "package");
        itemDivImg.setAttribute("id","logo-LP");

        // Adiciona o item ao slide atual
        itemDiv.appendChild(itemDivImg);
        currentSlide.appendChild(itemDiv);
    });
}

// Função para atualizar o carousel com base na largura da tela
function updateCarousel() {
    const screenWidth = window.innerWidth;
    let itemsPerSlide;

    if (screenWidth <= 992 && screenWidth >=720) {
        itemsPerSlide = 6; // Telas grandes
    } else if (screenWidth <= 719 && screenWidth >= 572) {
        itemsPerSlide = 5; // Telas médias
    } else if (screenWidth <= 571 && screenWidth >= 472) {
        itemsPerSlide = 4; // Telas pequenas
    } else if (screenWidth <= 471 && screenWidth >= 372) {
        itemsPerSlide = 3; // Telas pequenas
    } else if (screenWidth <= 371 && screenWidth >= 272) {
        itemsPerSlide = 2; // Telas pequenas
    } else {
        itemsPerSlide = 1; // Telas extra pequenas
    }

    createCarouselItems(items, itemsPerSlide);
}

// Atualiza o carousel ao carregar a página e ao redimensionar a janela
window.addEventListener("load", updateCarousel);
window.addEventListener("resize", updateCarousel);
