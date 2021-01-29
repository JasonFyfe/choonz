import * as crud from "./crud-module.js";
import * as utils from "./utils.js";
import {playlistListItem as template} from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = 'http://localhost:8082/api/playlists';

const read = async () => {
    document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
    let model = await crud.readAll(URL);
    if (typeof model !== 'undefined') {
		document.querySelector('#main').innerHTML =  `${model._embedded.playlists.map(template).join('')}`
	}
}

window.onload = read();
document.querySelector("#search").addEventListener("keyup", utils.search);