import * as crud from "./crud-module.js";
import * as utils from "./utils.js";
import {albumListItem as template} from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = 'http://localhost:8082/api/albums'

const read = async () => {
    document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
    let model = await crud.readAll(URL);
    document.querySelector('#main').innerHTML =  `${model._embedded.albums.map(template).join('')}`
}

window.onload = read();
document.querySelector("#search").addEventListener("keyup", utils.search);