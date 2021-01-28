import * as crud from "./crud-module.js";
import * as template from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = "http://localhost:8082/api/tracks";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const name = document.querySelector("input#name");
const duration = document.querySelector("input#duration");
const lyrics = document.querySelector("input#lyrics");
const albumId = document.querySelector("input#albumId");
const genreId = document.querySelector("input#genreId");
const playlistId = document.querySelector("input#playlistId");

const read = async () => {
	document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
	let model = await crud.readOne(URL, id);
	setInputs(model);
	document.querySelector("#main").innerHTML = template.track(model);
	document.querySelector("#delete").addEventListener("click", remove);
	document.querySelector("#update").addEventListener("click", update);
}

const update = async () => {

	let inputs = getInputs();

	let data = {
		"id": id,
		"name": inputs.name,
		"duration": inputs.duration,
		"lyrics": inputs.lyrics,
		"album": {"id":inputs.albumId},
		"genre": {"id":inputs.genreId},
		"playlist": {"id":inputs.playlistId}
	};

}

const remove = async () => {
	await crud.remove(URL, id);
	window.location.replace("./tracks.html");
}

function setInputs(model) {
	name.value = model.name;
	duration.value = model.duration;
	lyrics.value = model.lyrics;
	albumId.value = model.album.id;
	genreId.value = model.genre.id;
	playlistId.value = model.playlist.id;
}

function getInputs() {
	return {"name":name.value, "duration":duration.value, "lyrics":lyrics.value, 
	"albumId":albumId.value, "genreId":genreId.value, "playlistId":playlistId.value}
}

window.onload = read();