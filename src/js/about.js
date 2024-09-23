export class AboutPage extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');

        fetch('portfolio.json').then(resposta =>{
            return resposta.json();
        }).then ((informacoes)=>{

            //console.log(informacoes.posts[projetoNum].titulo);

            // const ProjInfos = informacoes.posts[projetoNum];
            

            const listaSkill = document.createElement('ul');

            for (let i = 0; i < informacoes.about.skills.length; i++){
                listaSkill.innerHTML += `
                <li>
                    <p>${informacoes.about.skills[i].name}</p>
                    <span style="--skill: ${informacoes.about.skills[i].percent};"></span>
                </li>
                `;
            }

            const listaExperience = document.createElement('ul');

            for (let i = 0; i < informacoes.about.experience.length; i++){
                listaExperience.innerHTML += `
                <li>
                    <small>${informacoes.about.experience[i].date}</small>
                    <p>${informacoes.about.experience[i].position}</p>
                    <span>@ ${informacoes.about.experience[i].employer}</span>
                </li>
                `;
            }

            const listaEducation = document.createElement('ul');

            for (let i = 0; i < informacoes.about.education.length; i++){
                listaEducation.innerHTML += `
                <li>
                    <small>${informacoes.about.education[i].year}</small>
                    <p>${informacoes.about.education[i].course_name}</p>
                    <span>@ ${informacoes.about.education[i].school}</span>
                </li>
                `;
            }

            //console.log(informacoes.about.resume);

            template.innerHTML += `
            <section class="container about-me_intro">
                <img src="${informacoes.about.image}" alt="" class="about-me_intro_img">
                <h2>Hello, I'm Luiza <span>Senior User Interface designer</span></h2>
                <a href="${informacoes.about.resume}" target="_blank" class="more"><span data-text="See my resume">See my resume</span><img src="src/imgs/more.svg" alt="more"></a>
            </section>

            <section class="about-me_text">
                <div class="about-me_text_descripton">
                    <h6>${informacoes.about.descricao.titulo}</h6>
                    <p>${informacoes.about.descricao.texto}</p>
                </div>
                <div class="about-me_text_skills">
                    <ul>
                    ${listaSkill.innerHTML}
                    </ul>
                </div>
            </section>

            <section class="about-me_grid">
                <div class="about-me_grid_experience animation up">
                    <h4>Experience</h4>
                    <ul>
                    ${listaExperience.innerHTML}
                    </ul>
                </div>
                <div class="about-me_grid_education animation up">
                    <h4>Education</h4>
                    <ul>
                    ${listaEducation.innerHTML}
                    </ul>
                </div>
            </section>
                `;

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
    });

    // Get multiple elements instead of a single one using "querySelectorAll"
    const animacao = document.querySelectorAll('.animation');

    // Loop over the elements and add each one to the observer
    animacao.forEach((element) => animationObserver.observe(element));

  }
  
  setTimeout(function() {
    animationEffect();

  // efeito animaçao barras skills
  // Create the observer like the examples above
  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        return;
      }
    });
  });

  // Get multiple elements instead of a single one using "querySelectorAll"
  const skillBars = document.querySelectorAll('.about-me_text_skills ul li');

  // Loop over the elements and add each one to the observer
  skillBars.forEach((element) => skillsObserver.observe(element));
  }, 500);

    
}

}