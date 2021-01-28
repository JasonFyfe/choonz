import * as crud from "./crud-module.js";
import * as template from "./template-module.js";
import {navbar as navbar} from "./template-module.js";

const URL = "http://localhost:8082/api/genres";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const read = async () => {
  document.querySelector("nav").insertAdjacentHTML("afterbegin", navbar());
  let model = await crud.readOne(URL, id);
  document.querySelector("input#name").value = model.name;
  document.querySelector("input#description").value = model.description;
  document.querySelector("#main").innerHTML = template.genre(model);
  document.querySelector("#delete").addEventListener("click", remove);
  document.querySelector("#update").addEventListener("click", update);
  populateTracks(model.tracks);
}

const update = async () => {
  let name = document.querySelector("#name").value;
  let description = document.querySelector("#description").value;

  let data = {
    "id": id,
    "name": name,
    "description": description
  };
  await crud.update(URL, id, data);
  location.reload();
}

const remove = async () => {
  await crud.remove(URL, id);
  window.location.replace("./genres.html");
}

const populateTracks = (tracks) => {
  document.querySelector("#tracks").innerHTML = (`${tracks.map(template.shortTrackItem).join('')}`);
}

window.onload = read();