const URL = 'http://localhost:8082/api/albums/'

// template
albumTemplate = (album) => {
    return `
            <div id=${album.id} class ="album">
                <h1>${album.id}</h1>    
                <h2>${album.name}</h2>
                <h4>Tracks: ${album.tracks}</h4>
                <p>Cover: ${album.cover}</p>
                <p>Artist: ${album.artist.name}</p>
                <button onclick="remove(${album.id})">Delete</button>
                <input type="button" onclick="location.href='album.html?id='+${album.id};" value="View real" />  
            </div>`
}

// create
create = () => {

    const name = document.querySelector('#name').value;
    const cover = document.querySelector('#cover').value;
    const artistid = document.querySelector('#artistid').value;

    const data = {
        "name": name,
        "cover": cover,
        "artist": {
            "id": artistid
        }
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
                console.log(data)
                document.querySelector('#main').innerHTML =
                    `${data._embedded.albums.map(albumTemplate).join('')}`
            });
        }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

// update
update = (data) => {
    fetch(URL + id, {
        method: 'put',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
}

// delete
remove = (id) => {

    document.getElementById(id).remove();

    const settings = {
        method: 'delete',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    fetch(URL + id, settings)
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




