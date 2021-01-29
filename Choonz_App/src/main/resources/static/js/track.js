import * as crud from "./crud-module.js";
import * as template from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = "http://localhost:8082/api/tracks";
const genresURL = "http://localhost:8082/api/genres";
const playlistsURL = "http://localhost:8082/api/playlists";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const name = document.querySelector("input#name");
const duration = document.querySelector("input#duration");
const lyrics = document.querySelector("input#lyrics");
const genreSelect = document.querySelector("#genre");
const playlistSelect = document.querySelector("#playlist");

const populateDropDowns = async () => {
    let genres = await crud.readAll(genresURL);
    let playlists = await crud.readAll(playlistsURL);

    for(let genre of genres._embedded.genres) {
        genreSelect.options[genreSelect.options.length] = new Option(genre.name, genre.id);
    }
    for(let playlist of playlists._embedded.playlists) {
        playlistSelect.options[playlistSelect.options.length] = new Option(playlist.name, playlist.id);
    }
}

const read = async () => {
	document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
	let model = await crud.readOne(URL, id);
	await populateDropDowns();
	setInputs(model);
	document.querySelector("#main").innerHTML = template.track(model);
	document.querySelector("#delete").addEventListener("click", remove);
	document.querySelector("#update").addEventListener("click", update);
}

const update = async () => {
	let inputs = getInputs();
	let albumID = document.querySelector(".albumID").id.replace( /^\D+/g, '');

	let data = {
		"id": id,
		"name": inputs.name,
		"duration": inputs.duration,
		"lyrics": inputs.lyrics,
		"album": {
			"id": albumID
		}
	};
	if (inputs.genreId != "null") {
        data["genre"] = { "id": inputs.genreId}
    }
    if (inputs.playlistId != "null") {
        data["playlist"] = { "id": inputs.playlistId}
    }
	await crud.update(URL, id, data);
    location.reload();
}

const remove = async () => {
	await crud.remove(URL, id);
	window.location.replace("./tracks.html");
}

function setInputs(model) {
	name.value = model.name;
	duration.value = model.duration;
	lyrics.value = model.lyrics;

	if (typeof model.genre.id !== 'undefined') {
		genreSelect.value = model.genre.id;
	}
	if (typeof model.playlist.id !== 'undefined') {
		playlistSelect.value = model.playlist.id;
	}
}

function getInputs() {
	return {
		"name":name.value,
		"duration":duration.value,
		"lyrics":lyrics.value, 
		"genreId":genreSelect.value,
		"playlistId":playlistSelect.value}
}

window.onload = read();