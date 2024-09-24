export function loadHomePage() {
    document.querySelector('#home').innerHTML = `
    <div class="home">
        <h1 class="home__title">Welcome to the NASA App!</h1>
        <p class="home__text">Explore the Astronomy Picture of the Day and learn about amazing space content.</p>
        <p class=home__text-lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
        <a href="index.html" class="home__button">Start Exploring</a>
        </div>
    `;
}