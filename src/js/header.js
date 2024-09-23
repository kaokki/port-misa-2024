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
        //console.log("carregou header", document.body.scrollHeight);
        // var pageHeight = document.body.scrollHeight;
        // var scrollPosition = document.querySelector('.works').offsetTop;

        window.addEventListener("scroll", () => {
            const elemento = document.querySelector('.scroll');
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - 100;
            console.log(scrollPosition, documentHeight);

            // Verifica se o usuário chegou ao final da página
            if (scrollPosition >= documentHeight) {
                console.log("é maior");
                //elemento.style.display = 'none'; // Faz o elemento desaparecer
                elemento.classList.add("hide");
            } else {
                console.log("é menor");
                //elemento.style.display = 'flex'; // Garante que o elemento apareça novamente
                elemento.classList.remove("hide");
            }
          });
      }, 500);
}


}
