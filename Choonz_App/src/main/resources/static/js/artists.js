import * as crud from "./crud-module.js";
import * as utils from "./utils.js";
import {artistListItem as template} from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = 'http://localhost:8082/api/artists'

const create = async () => {
    let data = await getData();
    await crud.create(URL, data);
    location.reload();
}

const read = async () => {
    document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
    let model = await crud.readAll(URL);
    document.querySelector('#main').innerHTML =  `${model._embedded.artists.map(template).join('')}`
}

const getData = async () => {
    const name = document.querySelector('#name').value;

    const data = {
        "name": name
    }

    return data;
}

window.onload = read();
document.querySelector('#create').addEventListener("click", create);
document.querySelector("#search").addEventListener("keyup", utils.search);