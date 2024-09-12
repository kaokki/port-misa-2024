export class FooterSite extends HTMLElement {
    constructor() {
        super();

        let template = document.createElement('template');
        template.innerHTML = `
        <footer>
            <div class="container">
                <div class="left">
                    <p>luiza@yakistudio.com</p>
                    <p>+55 11 986899408</p> 
                </div>
                <div class="right socialmedia">
                    <a href="#"><span class="linkedin">Linkedin</span></a>
                    <a href="#"><span class="behance">Behance</span></a>
                    <a href="#"><span class="dribbble">Dribbble</span></a>
                </div>
            </div>
            
        </footer>
        `;

        //const shadowRoot = this.attachShadow({ mode: "open" });
        this.appendChild(template.content.cloneNode(true));
}}
