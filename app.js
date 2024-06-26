import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
// Link my web component
import { MenuPage } from "./components/MenuPage.js";
import { OrdersPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});

const $ = function (args) {
    return document.querySelector(args);
};
const $$ = function (args) {
    return document.querySelectorAll(args);
};

HTMLElement.prototype.on = function (a, b, c) {
    return this.addEventListener(a, b, c);
};
HTMLElement.prototype.off = function (a, b) {
    return this.removeEventListener(a, b);
};
HTMLElement.prototype.$ = function (s) {
    return this.querySelector(s);
};
HTMLElement.prototype.$$ = function (s) {
    return this.querySelectorAll(s);
};
