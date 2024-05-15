import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/ouniverso", "/pages/ouniverso.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

//const routes = {
//    "/": "pages/home.html",
//    "/about": "pages/about.html",
//    "/contact": "pages/contact.html",
//    404: "pages/404.html"
// }




//handle()
router.handle()

//window.onpopstate = () => handle()
window.onpopstate = () => router.handle()

//window.route = () => route()
window.route = () => router.route()

// Função para mudar a classe do corpo com base na rota
function changeBackground(route) {
    const body = document.getElementById('main-body');

    // Remove todas as classes de rota existentes do corpo
    body.classList.remove('home', 'exploracao', 'ouniverso');

    // Adiciona a classe de rota correspondente ao corpo
    body.classList.add(route);
}

