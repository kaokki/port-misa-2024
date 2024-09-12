export class PostSection extends HTMLElement {
    constructor() {
        super();


        const template = document.createElement('template');
        fetch('portfolio.json').then(resposta =>{
            return resposta.json();
        }).then ((informacoes)=>{
            //console.log(informacoes.posts);
            for (let i = 0; i < informacoes.posts.length; i++) {
                // let classReverse = '';
                // informacoes.posts[i].reverse ? classReverse = 'reverse' : classReverse = '';

                //console.log(informacoes.posts[i].descricao_home);

                template.innerHTML += `
                    <div class="project" data-color="${informacoes.posts[i].bg_color}">
                        <a href="/project.html?name=${informacoes.posts[i].url}&id=${i}">
                        <div class="img animation up"><img src="${informacoes.posts[i].img_thumb}"></div>
                        <div class="description animation up">
                            <h2 class="title">${informacoes.posts[i].titulo}</h2>
                            <p class="text">${informacoes.posts[i].descricao_home}</p>
                            <div class="more"><span data-text="See more">See more</span><img src="src/imgs/more.svg" alt="more"></div>
                        </div>
                        </a>
                    </div>
                `;
            }

                this.appendChild(template.content.cloneNode(true)); 
        })
}

connectedCallback(){
    
}


}