const Router = {
    init: function init() {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                console.log("this", this);
                this.go(url);
            })
        });
    },
    go: function(route, addToHistory=true) {
        console.log(`Going to ${route}`);
    }
}

export default Router;