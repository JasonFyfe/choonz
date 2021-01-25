const URL = 'http://localhost:8082/tracks/'

// template
trackTemplate = (track) => {
    return `
            <div id="test" class ="tracks" tagName="testing">
                <h1>${track.id}</h1>    
                <h2>${track.name}</h2>
                <h3>Duration: ${track.duration}</h3>
                <h4>Lyrics: ${track.lyrics}</h4>  
                <button onclick="remove(${track.id})">Delete</button>
                <input type="button" onclick="location.href='track.html?id='+${track.id};" value="View real" />        
            </div>`

}

// create
create = () => {

    var nametrack = document.querySelector('#name');
    var duration = document.querySelector('#duration');
    var lyrics = document.querySelector('#lyrics');
    var albumid = document.querySelector('#albumId');
    var genreid = document.querySelector('#genreId');
    var playlistid = document.querySelector('#playlistId');

    let data = {
        "name": nametrack.value,
        "duration": duration.value,
        "lyrics": lyrics.value,
        "album": {
            "id": albumid.value
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
                document.querySelector('#main').innerHTML =
                    `${data._embedded.artists.map(trackTemplate).join('')}`
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



