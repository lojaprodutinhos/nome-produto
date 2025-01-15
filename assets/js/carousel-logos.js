function procurandoCarousel(carouselContainer) {
    // let lastScrollLeft = 0;
    const observer = new MutationObserver(() => {
        const scrollContainer = document.getElementById(carouselContainer);
        if (scrollContainer) {
            observer.disconnect(); // Para de observar quando o elemento for encontrado
        }
        const leftIndicator = document.getElementById("angle-left");
        const rightIndicator = document.getElementById("angle-right");
        let lastScrollLeft = 0;
        let scrollTimeout;
        scrollContainer.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout); // Reset the timeout on every scroll event
            const currentScrollLeft = scrollContainer.scrollLeft;
            if (currentScrollLeft > lastScrollLeft) {
                // Scrolling to the right
                // rightIndicator.style.backgroundColor = 'rgba(0,0,0,0.4)';
                // leftIndicator.style.backgroundColor = 'transparent';
                rightIndicator.style.color = 'rgba(0,0,0,0.1)';
                leftIndicator.style.color = 'transparent';
            } else if (currentScrollLeft < lastScrollLeft) {
                // Scrolling to the left
                // leftIndicator.style.backgroundColor = 'rgba(0,0,0,0.4)';
                // rightIndicator.style.backgroundColor = 'transparent';
                leftIndicator.style.color = 'rgba(0,0,0,0.1)';
                rightIndicator.style.color = 'transparent';
            }
            lastScrollLeft = currentScrollLeft;
            // Reset the background colors when scrolling stops
            scrollTimeout = setTimeout(() => {
                // leftIndicator.style.backgroundColor = 'transparent';
                // rightIndicator.style.backgroundColor = 'transparent';
                rightIndicator.style.color = 'transparent';
                leftIndicator.style.color = 'transparent';
            }, 200); // Adjust the delay as needed
        });
    });
    // Configura o observer para monitorar alterações no DOM
    observer.observe(document.body, { childList: true, subtree: true });
}
procurandoCarousel("scrollContainer");
