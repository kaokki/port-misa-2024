export class HeaderSite extends HTMLElement {
    constructor() {
        super();

        let template = document.createElement('template');
        template.innerHTML = `
        <header>
            <a href="/" class="logo">
                <img src="src/imgs/ico-logo.svg" alt=""> Luiza Formiga
            </a>

            <button class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav class="menu">
                <ul>
                    <li><a href="/about.html"><span data-text="About">About</span></a></li>
                    <li><a href="/#works" class="works-btn"><span data-text="Works">Works</span></a></li>
                    <li><a href="/src/luiza_cv.pdf" target="_blank"><span data-text="Resume">Resume</span></a></li>
                </ul>
            </nav>
            <div class="menu_bg"></div>
        </header>
        `;

        //const shadowRoot = this.attachShadow({ mode: "open" });
        this.appendChild(template.content.cloneNode(true));
}}
