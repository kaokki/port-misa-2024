export class FooterSite extends HTMLElement {
    constructor() {
        super();

        let template = document.createElement('template');
        

        fetch('portfolio.json').then(resposta =>{
            return resposta.json();
        }).then ((informacoes)=>{


            template.innerHTML += `
                    <footer>
                        <div class="container">
                            <div class="left">
                                <p>${informacoes.footer.email}</p>
                                <p>${informacoes.footer.phone}</p> 
                            </div>
                            <div class="right socialmedia">
                                <a href="${informacoes.footer.socialmedias.linkedin}" target="_blank"><span class="linkedin">Linkedin</span></a>
                                <a href="${informacoes.footer.socialmedias.behance}" target="_blank"><span class="behance">Behance</span></a>
                                <a href="${informacoes.footer.socialmedias.dribbble}" target="_blank"><span class="dribbble">Dribbble</span></a>
                            </div>
                        </div>
                        
                    </footer>
                `;

                this.appendChild(template.content.cloneNode(true)); 
                
        })
}}
