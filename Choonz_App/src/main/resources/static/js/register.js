import * as crud from "./crud-module.js";
const URL = 'http://localhost:8082/users'

const create = async () => {
    let data = getData();
    await crud.create(URL, data);
    window.location = 'http://localhost:8082/login';
}

function getData() {
    
    let username = document.querySelector('#usernameReg').value;
    let password = document.querySelector('#passwordReg').value;

    let data = {
        "username": username,
        "password": password
    }

    return data;
} 

document.querySelector('#create').addEventListener('click', create);