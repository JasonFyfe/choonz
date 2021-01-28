import * as crud from "./crud-module.js";
import * as template from "./template-module.js";
import {navbar as navbar} from "./template-module.js";
const URL = "http://localhost:8082/api/albums";
const tracksURL = "http://localhost:8082/api/tracks";
const genresURL = "http://localhost:8082/api/genres";
const playlistsURL = "http://localhost:8082/api/playlists";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const inputListeners = (data) => {
    document.querySelector("#albumName").value = data.name;
    document.querySelector("#albumCover").value = data.cover;
    document.querySelector("#updateAlbum").addEventListener("click", update);
}

const populateDropDowns = async () => {
    let genreSelect = document.querySelector("#genre");
    let playlistSelect = document.querySelector("#playlist");
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
    populateDropDowns();
    let model = await crud.readOne(URL, id);
    inputListeners(model);
    document.querySelector("#main").innerHTML = template.album(model);
    document.querySelector("#delete").addEventListener("click", remove);
    populateTracks(model.tracks);
    document.querySelector("#createTrack").addEventListener("click", createTrack);
}

const update = async () => {
    let name = document.querySelector("#albumName").value;
    let cover = document.querySelector("#albumCover").value;
    let artistID = document.querySelector(".artistID").id.replace( /^\D+/g, '');
    let data = {
        "name": name,
        "cover": cover,
        "artist": {
            "id": artistID
        }
    };
    await crud.update(URL, id, data);
    location.reload();
}

const remove = async () => {
    await crud.remove(URL, id);
    window.location.replace("./albums.html");
}

const createTrack = async () => {
    let trackName = document.querySelector("#trackName").value;
    let trackDuration = document.querySelector("#trackDuration").value;
    let trackLyrics = document.querySelector("#trackLyrics").value;
    let genre = document.querySelector("#genre").value;
    let playlist = document.querySelector("#playlist").value;

    let data = {
      "name": trackName,
      "duration": trackDuration,
      "lyrics": trackLyrics,
      "album": {
        "id": id
      }
    };
    if (genre != "null") {
        data["genre"] = { "id": genre}
    }
    if (playlist != "null") {
        data["playlist"] = { "id": playlist}
    }

    await crud.create(tracksURL, data);
    location.reload();
  }

const populateTracks = (tracks) => {
    document.querySelector("#tracks").innerHTML = (`${tracks.map(template.shortTrackItem).join('')}`);
}

window.onload = read();
