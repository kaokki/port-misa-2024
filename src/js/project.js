export class InternaProjeto extends HTMLElement {
    constructor() {
        super();

        // pegando o numero do projeto
        const url_atual = window.location.href;
        const parts = url_atual.split('id=');
        const projetoNum = parts.pop() || parts.pop();

        const template = document.createElement('template');

        fetch('portfolio.json').then(resposta =>{
            return resposta.json();
        }).then ((informacoes)=>{

            const ProjInfos = informacoes.posts[projetoNum];

            //listas descrições

            const listRole = document.createElement('ul');
            const divRole = document.createElement('div');

            if(ProjInfos.role) {
                for (let i = 0; i < ProjInfos.role.length; i++){
                    listRole.innerHTML += `
                    <li>${ProjInfos.role[i]}</li>
                    `;
                }

                divRole.innerHTML=`
                    <div class="role animation up">
                        <h4>Role</h4>
                        <ul>
                            ${listRole.innerHTML}
                        </ul>
                    </div>
                `
            }

            const listTools = document.createElement('ul');
            const divTools = document.createElement('div');

            if(ProjInfos.tools) {
                for (let i = 0; i < ProjInfos.tools.length; i++){
                    listTools.innerHTML += `
                    <li>${ProjInfos.tools[i]}</li>
                    `;
                }

                divTools.innerHTML=`
                    <div class="tools animation up">
                        <h4>Tools</h4>
                        <ul>
                            ${listTools.innerHTML}
                        </ul>
                    </div>
                `
            }
            
            const listClient = document.createElement('ul');
            const divClient = document.createElement('div');

            if(ProjInfos.Client) {
                for (let i = 0; i < ProjInfos.Client.length; i++){
                    listClient.innerHTML += `
                    <li>${ProjInfos.Client[i]}</li>
                    `;
                }

                divClient.innerHTML=`
                    <div class="client animation up">
                        <h4>Client</h4>
                        <ul>
                            ${listClient.innerHTML}
                        </ul>
                    </div>
                `
            }

            const listDate = document.createElement('ul');
            const divDate = document.createElement('div');

            if(ProjInfos.Date) {
                for (let i = 0; i < ProjInfos.Date.length; i++){
                    listDate.innerHTML += `
                    <li>${ProjInfos.Date[i]}</li>
                    `;
                }

                divDate.innerHTML=`
                    <div class="date animation up">
                        <h4>Date</h4>
                        <ul>
                            ${listDate.innerHTML}
                        </ul>
                    </div>
                `
            }

            //listas descrições fim

            //galeria
            const divGaleria = document.createElement('div');
            let classCenter = '';

            //ProjInfos.center ? classCenter = 'center' : classCenter = '';

            for (let i = 0; i < ProjInfos.galeria.length; i++){
                ProjInfos.galeria[i].center ? classCenter = 'center' : classCenter = '';
                divGaleria.innerHTML += `
                <div class="loading"></div>
                <img src="" data-image="${ProjInfos.galeria[i].img}" alt="${ProjInfos.titulo}" class="${classCenter}">
                `;
            }


            //galeria fim

            document.title = `Portfolio Luiza Formiga - ${ProjInfos.titulo}`;
            //console.log(titlePage);

            template.innerHTML += `
            <section class="project_details">
                <h2 class="animation up">${ProjInfos.titulo}</h2>
                <h3 class="animation up">${ProjInfos.categoria}</h3>
                <p class="animation up">${ProjInfos.descricao_interna}</p>

                <div class="project_details_grid">
                    ${divRole.innerHTML}
                    ${divTools.innerHTML}
                    ${divClient.innerHTML}
                    ${divDate.innerHTML}
                </div>
            </section>
            <section class="gallery date animation up">
                ${divGaleria.innerHTML}
            </section>
                `;

                this.appendChild(template.content.cloneNode(true));    
        })
}

connectedCallback(){
    
}

}