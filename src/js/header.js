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
                    <li><a href="/#work" class="works-btn"><span data-text="Work">Work</span></a></li>
                    <li><a href="/src/luiza_cv.pdf" target="_blank"><span data-text="Resume">Resume</span></a></li>
                </ul>
            </nav>
            <div class="menu_bg"></div>
        </header>
        <div class="scroll">
            <div class="scroll__ico">
                <span></span>
                <span></span>
            </div>
            <p>scroll</p>
        </div>
        `;

        //const shadowRoot = this.attachShadow({ mode: "open" });
        this.appendChild(template.content.cloneNode(true));
}

connectedCallback(){
    setTimeout(function() {

        window.addEventListener("scroll", () => {
            const elemento = document.querySelector('.scroll');
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - 100;
            console.log(scrollPosition, documentHeight);

            if (scrollPosition >= documentHeight) {
                elemento.classList.add("hide");
            } else {
                elemento.classList.remove("hide");
            }
          });
      }, 500);
}


}
