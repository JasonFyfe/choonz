var URL = "http://localhost:8082/artists"

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
                console.log(data._embedded.artists);
                console.log(data._embedded.artists[0]);

                document.getElementById("main").innerHTML = 
                    `${data._embedded.artists.map(artistTemplate).join('')}`
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function artistTemplate(artist) {
    return `
                <div class ="artist">
                <h1>${artist.id}</h1>    
                <h2>${artist.name}</h2>
                <button onclick="deleteByid(${artist.id})">Delete</button>
                <input type="button" onclick="location.href='artist.html?id='+${artist.id};" value="View real" />
                </div> 
            `
}

document.getElementById("create").onclick = function() {

    var firstname = document.querySelector('#First_Name').input;

    const data = {
        "name": firstname
    }

    const settings = {
        method: 'POST',
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
        }
    ).then(location.reload());
}

update = (data) => {
    fetch(URL+id, {
        method: 'update',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
}

remove = (id) => {
    fetch(URL+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
    })
}