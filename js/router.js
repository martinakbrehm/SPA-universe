export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href);
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];

            // Remove a classe 'active' de todos os links no nav
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link correspondente à rota atual
        const currentLink = document.querySelector(`nav a[href="${pathname}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }


        // Define a classe a ser aplicada ao body com base na rota atual
        let bodyClass;
        switch (pathname) {
            case "/":
                bodyClass = "home";
                break;
            case "/ouniverso":
                bodyClass = "ouniverso";
                break;
            case "/exploracao":
                bodyClass = "exploracao";
                break;
            default:
                bodyClass = "home"; // Define uma classe padrão se a rota não for encontrada
                break;
        }

        // Adiciona a classe ao body
        document.body.className = bodyClass;

        // Fetch e renderiza a página correspondente à rota atual
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html;
        });
    }
}