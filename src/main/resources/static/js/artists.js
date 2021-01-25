var URL = 'http://localhost:8082/artists/'

// template
artistTemplate = (artist) => {
    return `
                <div class ="artist">
                <h1>${artist.id}</h1>    
                <h2>${artist.name}</h2>
                <button onclick="remove(${artist.id})">Delete</button>
                <input type="button" onclick="location.href='artist.html?id='+${artist.id};" value="View real" />
                </div> 
            `
}

// create
create = () => {
    let name = document.querySelector('#name').value;

    const data = {
        "name": name
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

// read
read = () => {
    fetch(URL)
    .then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(data => {
                document.getElementById("main").innerHTML = 
                    `${data._embedded.artists.map(artistTemplate).join('')}`
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

// update
update = (data) => {
    fetch(URL+id, {
        method: 'put',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
}

// delete
remove = (id) => {
    const settings = {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    }

    fetch(URL+id, settings)
    .then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
            return;
        }
    })
    .then(read());
}

window.onload = read();