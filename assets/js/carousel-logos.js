function procurandoCarousel(carouselContainer) {
    let lastScrollLeft = 0;
    const observer = new MutationObserver(() => {
        const scrollContainer = document.getElementById(carouselContainer);
        if (scrollContainer) {
            observer.disconnect(); // Para de observar quando o elemento for encontrado
        }
        scrollContainer.addEventListener('scroll', () => {
            const currentScrollLeft = scrollContainer.scrollLeft;
            const angleLeft = document.getElementById("angle-left");
            const angleRight = document.getElementById("angle-right");


            if (currentScrollLeft > lastScrollLeft) {
                console.log('Scrolling to the right');
                angleLeft.setAttribute("style", "background: rgba(0,0,0,0.5);");
            } else if (currentScrollLeft < lastScrollLeft) {
                console.log('Scrolling to the left');
                angleRight.setAttribute("style", "background: rgba(0,0,0,0.5);");
            }
        
            lastScrollLeft = currentScrollLeft; // Atualiza a posição anterior

            clearTimeout(lastScrollLeft);
            lastScrollLeft = setTimeout(() => {
                console.log('Scroll horizontal parado');
                angleLeft.setAttribute("style", "background: none;");
                angleRight.setAttribute("style", "background: none;");
            }, 200);
            });
    });
    // Configura o observer para monitorar alterações no DOM
    observer.observe(document.body, { childList: true, subtree: true });
}

procurandoCarousel("scrollContainer");