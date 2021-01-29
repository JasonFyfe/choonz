import * as crud from "./crud-module.js";
import * as utils from "./utils.js";
import {playlistListItem as template} from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = 'http://localhost:8082/api/playlists'

const create = async () => {
    let data = await getData();
    await crud.create(URL, data);
    location.reload();
}

const read = async () => {
    document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
    let model = await crud.readAll(URL);
    document.querySelector('#main').innerHTML =  `${model._embedded.playlists.map(template).join('')}`
}

const getData = async () => {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const artwork = document.querySelector('#artwork').value;

    const data = {
        "name": name,
        "description": utils.nullable(description),
        "artwork": utils.nullable(artwork)
    }

    return data;
}

window.onload = read();
document.querySelector('#create').addEventListener("click", create);