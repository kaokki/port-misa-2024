import { HeaderSite } from "/src/js/header.js";
import { FooterSite } from "/src/js/footer.js";
import { PostSection } from "/src/js/post.js";
import { AboutPage } from "/src/js/about.js";
import { InternaProjeto } from "/src/js/project.js";
import { InternaRelacionados } from "/src/js/relacionados.js";

customElements.define('header-site', HeaderSite);
customElements.define('footer-site', FooterSite);
customElements.define('post-section', PostSection);
customElements.define('about-page', AboutPage);
customElements.define('project-page', InternaProjeto);
customElements.define('projeto-relacionado', InternaRelacionados);



// MENU

const btnMenu = document.querySelector('.menu-btn');
const header = document.querySelector('header');
const menuWorks = document.querySelector('header .works-btn');
//const menuLinks = document.querySelector('.menu ul');
const menuBg = document.querySelector('.menu_bg');

btnMenu.addEventListener("click", () => {
    header.classList.toggle('on');
});

menuWorks.addEventListener("click", function(e){
  header.classList.toggle('on');
});

menuBg.addEventListener("click", function(e){
  header.classList.toggle('on');
});


// animaçao de ancora

// document.querySelectorAll('a[href^="#"]').forEach(a => {
//     a.addEventListener('click', function (e) {
//         e.preventDefault();
//         var href = this.getAttribute("href");
//         var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
//         window.scroll({
//             top: elem.offsetTop, 
//             left: 0, 
//             behavior: 'smooth' 
//         });
//     });
// });


  // efeito de animaçao

  // function animationEffect(){
  //   // Create the observer like the examples above
  //   const animationObserver = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('on');
  //         return;
  //       }
  //     });
  //   });

  //   // Get multiple elements instead of a single one using "querySelectorAll"
  //   const animacao = document.querySelectorAll('.animation');

  //   // Loop over the elements and add each one to the observer
  //   animacao.forEach((element) => animationObserver.observe(element));

  // }




//carregar js das paginas

const url_atual = window.location.href;
const parts_url = url_atual.split('/');
const url_path = parts_url.pop() || parts_url.pop();
//console.log(url_path == '127.0.0.1:5500' || url_path.includes('index'));

if (url_path.includes('about')){
    console.log("this is about page");
    

} else if(url_path.includes('project')){
    console.log("this is project page");

    

} else {
    console.log("this is index page");

    

    
}
