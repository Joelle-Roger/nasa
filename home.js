export function loadHomePage() {
    document.querySelector('#home').innerHTML = `
        <h1>Welcome to the NASA API App!</h1>
        <p>Explore the Astronomy Picture of the Day and learn about amazing space content.</p>
        <a href="index.html" class="button">Start Exploring</a>
    `;
}
