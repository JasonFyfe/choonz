import * as crud from "../js/crud-module.js";
import * as template from "../js/template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = "http://localhost:8082/api/artists";
const albumURL = "http://localhost:8082/api/albums";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const read = async () => {
  document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
  let model = await crud.readOne(URL, id);
  document.querySelector("#artistName").value = model.name;
  document.querySelector("#main").innerHTML = template.artist(model);
  document.querySelector("#delete").addEventListener("click", remove);
  document.querySelector("#updateArtist").addEventListener("click", update);
  document.querySelector("#createAlbum").addEventListener("click", createAlbum);
  populateAlbums(model.albums);
}

const update = async () => {
  let name = document.querySelector("#name").value;
  let data = {
    "name": name
  };
  await crud.update(URL, id, data);
  location.reload();
}

const remove = async () => {
  await crud.remove(URL, id);
  window.location.replace("./artists.html");
}

const createAlbum = async () => {
  let albumName = document.querySelector("#albumName").value;
  let albumCover = document.querySelector("#albumCover").value;
  let data = {
    "name": albumName,
    "cover": albumCover,
    "artist": {
      "id": id
    }
  };
  await crud.create(albumURL, data);
  location.reload();
}

const populateAlbums = (albums) => {
  document.querySelector("#albums").innerHTML = (`${albums.map(template.artistAlbumItem).join('')}`);
}

window.onload = read();