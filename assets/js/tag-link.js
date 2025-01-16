// Função para carregar conteúdo de outro arquivo
async function loadHTML(selector, file) {
const element = document.querySelector(selector);
const response = await fetch(file);
    if (response.ok) {
        element.innerHTML = await response.text();
    } else {
        console.error(`Erro ao carregar ${file}: ${response.statusText}`);
    }
}

loadHTML("#header-site", "../sections/header.html");
loadHTML("#footer-site", "../sections/footer.html");
loadHTML("#primeira-sect", "../sections/primeira-section-index.html");
loadHTML("#segunda-sect", "../sections/segunda-section-index.html");
loadHTML("#terceira-sect", "../sections/terceira-section-index.html");
