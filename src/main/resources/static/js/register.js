import * as crud from "./crud-module.js";
const URL = 'http://localhost:8082/users'

const create = async () => {
    let data = await getData();
    await crud.create(URL, data);
    window.location.replace("/login");
}