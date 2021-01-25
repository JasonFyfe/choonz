const URL = 'http://localhost:8082/playlists/'

fetch(URL)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }


            response.json().then(function (data) {
                console.log(data);
                console.log(data._embedded);
                console.log(data._embedded.playlists);
                console.log(data._embedded.playlists[0]);

                document.getElementById("main").innerHTML =
                    `${data._embedded.playlists.map(playlistTemplate).join('')}`
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function playlistTemplate(playlist) {
    return `
                <div class ="playlist">
                <h1>${playlist.id}</h1>    
                <h2>${playlist.name}</h2>
                <h3>Description: ${playlist.description}</h3>
                <h4>Artwork: ${playlist.artwork}</h4>
                <h5>Tracks: ${playlist.tracks}</h5>
                <button onclick="remove(${playlist.id})">Delete</button>
                <input type="button" onclick="location.href='playlist.html?id='+${playlist.id};" value="View real" />
                </div> 
            `

}

// create
document.getElementById("create").onclick = function() {

    let name = document.querySelector('#name').value;
    let description = document.querySelector('#description').value;
    let artwork = document.querySelector('#artwork').value;

    const data = {
        "name": name,
        "description": description,
        "artwork": artwork
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
    .then(location.reload());
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
    .then(location.reload());
}
