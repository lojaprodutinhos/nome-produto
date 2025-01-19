// Função para carregar conteúdo de outro arquivo
async function loadHTML(selector, file) {
    try {
        const element = document.querySelector(selector);
        if (element === null) {
            return;
        } else if(!element) {
            throw new TypeError(`Elemento com o seletor "${selector}" não encontrado.`);
        }
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
        }
        element.innerHTML = await response.text();
    } catch (error) {
        console.error(`Erro ao carregar ${file}: ${error.message}`);
    }
}

loadHTML("#header-site", "../sections/header.html");
loadHTML("#footer-site", "../sections/footer.html");
loadHTML("#primeira-sect", "../sections/primeira-section-index.html");
loadHTML("#segunda-sect", "../sections/segunda-section-index.html");
loadHTML("#terceira-sect", "../sections/terceira-section-index.html");
loadHTML("#primeira-sect-cursos", "../sections/primeira-section-cursos.html")
loadHTML("#filtro-segunda-sect-cursos", "../sections/filtro-segunda-section-cursos.html")
loadHTML("#area-cursos-segunda-sect-cursos", "../sections/area-cursos-segunda-section-cursos.html")