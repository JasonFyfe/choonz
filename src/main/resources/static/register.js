const URL = "localhost:8082/api/users"

//create
create = () => {

    const usernamne = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const data = {
        "username": username,
        "password": password
    }

    const settings = {
        method: 'post',
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    }

    fetch(URL, settings)
        .then(response => {
            if (response.status !== 201) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
        })
        .then(read());
}