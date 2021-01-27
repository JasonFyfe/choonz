const URL = 'http://localhost:8082/users';

//create
create = () => {

    console.log(URL);

    const username = document.querySelector('#username').value;
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
}