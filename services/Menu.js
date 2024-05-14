import API from "./API.js";

export async function loadData(params) {
    app.store.menu = await API.fetchMenu();
}