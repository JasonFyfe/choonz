import * as crud from "./crud-module.js";
import * as template from "./template-module.js";
import {navbar as navbar} from "./template-module.js";
const URL = "http://localhost:8082/api/albums";
const tracksURL = "http://localhost:8082/api/tracks";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const inputListeners = (data) => {
    document.querySelector("#albumName").value = data.name;
    document.querySelector("#albumCover").value = data.cover;
    document.querySelector("#updateAlbum").addEventListener("click", update);
}

const read = async () => {
    document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
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
    console.log(genre);
    console.log(playlist);
    let data = {
      "name": trackName,
      "duration": trackDuration,
      "lyrics": trackLyrics,
      "album": {
        "id": id
      }
    };
    if (genre != "null") {
        data[""]
    }
    await crud.create(tracksURL, data);
    // location.reload();
  }

const populateTracks = (tracks) => {
    document.querySelector("#tracks").innerHTML = (`${tracks.map(template.shortTrackItem).join('')}`);
}

window.onload = read();
