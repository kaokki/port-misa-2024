export class PostSection extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        fetch('portfolio.json').then(resposta =>{
            return resposta.json();
        }).then ((informacoes)=>{
            //console.log(informacoes.posts);
            this.innerHTML = '';
            for (let i = 0; i < informacoes.posts.length; i++) {
                let classTextLight = '';
                informacoes.posts[i].cor_texto_claro ? classTextLight = 'text-light' : classTextLight = '';

                //console.log(informacoes.posts[i].cor_texto_claro);

                template.innerHTML += `
                    <div class="project ${classTextLight}" data-color="${informacoes.posts[i].bg_color}">
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

    // efeito de animaçao

  function animationEffect(){
    // Create the observer like the examples above
    const animationObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          return;
        }
      });
    }, {
      rootMargin: '150px'
    });

    // Get multiple elements instead of a single one using "querySelectorAll"
    const animacao = document.querySelectorAll('.animation');

    // Loop over the elements and add each one to the observer
    animacao.forEach((element) => animationObserver.observe(element));

  }

    //scroll color home
    var windowHeight =  -window.innerHeight/2;

    setTimeout(function() {
      // Create the observer like the examples above
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.body.style.backgroundColor = entry.target.getAttribute('data-color');
            document.querySelector('header').style.backgroundColor = entry.target.getAttribute('data-color');
            if(entry.target.classList.contains('text-light')){
              document.body.classList.add('text-light');
            } else {
              document.body.classList.remove('text-light');
            }
            return;
          }
        });
      }, {
        rootMargin: `${windowHeight}px`
      });
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const projects = document.querySelectorAll('.project');
      
      // Loop over the elements and add each one to the observer
      projects.forEach((project) => observer.observe(project));

      const projetosDiv = document.querySelector(".works");


    const worksObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            document.body.style.backgroundColor = '#F7F9FA';
            document.body.classList.remove('text-light');
            document.querySelector('header').style.backgroundColor = '#F7F9FA';
            return;
          }
        });
      }, {
        rootMargin: `${windowHeight}px`
      });

      worksObserver.observe(projetosDiv);

      animationEffect();
    }, 500);
    
}


}