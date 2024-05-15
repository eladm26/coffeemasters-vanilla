const Router = {
    init: function init() {
        document.querySelectorAll("a.navlink").forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                this.go(url);
            });
        });
        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });
        this.go(location.pathname);
    },
    go: function (route, addToHistory = true) {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        var pageElement = null;

        switch (route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;

            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order";
                break;
            default:
                if (route.startWith("/product-")) {
                    pageElement = document.createElement("h1");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }

        if (pageElement) {
            const cache = document.querySelector("main");
            if (cache.children.length > 0) {
                cache.children[0].remove();
            }
            document.querySelector("main").appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    },
};

export default Router;
