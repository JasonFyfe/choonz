fetch('http://localhost:8082/api/albums')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            //   "id": 3,
            // "name": "In League With Dragons",
            // "tracks": [],
            // "cover": "some other other url",
            // "_links": {
            //     "self": {
            //         "href": "http://localhost:8082/api/albums/3"
            //     },
            //     "albums": {
            //         "href": "http://localhost:8082/api/albums"
            //     }

            response.json().then(function (data) {
                console.log(data);
                console.log(data._embedded);
                console.log(data._embedded.albums);
                console.log(data._embedded.albums[0]);

                document.getElementById("main").innerHTML = `

          ${data._embedded.albums.map(albumTemplate).join('')}


  
  `

            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function albumTemplate(album) {
    return `
                <div class ="album">
                <h1>${album.id}</h1>    
                <h2>${album.name}</h2>
                <h4>Tracks: ${album.tracks}</h4>
                <p>Cover: ${album.cover}</p>
                <button onclick="deleteByid(${album.id})">Delete</button>
                
                </div> 
                `

}

function deleteByid(id){
    fetch("http://localhost:8082/api/albums/"+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      
      
    }

