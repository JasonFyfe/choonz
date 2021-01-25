fetch('http://localhost:8082/playlists')
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

                document.getElementById("main").innerHTML = `

          ${data._embedded.playlists.map(playlistTemplate).join('')}


  
  `

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
                <button onclick="deleteByid(${playlist.id})">Delete</button>
                <input type="button" onclick="location.href='playlist.html?id='+${playlist.id};" value="View real" />
                </div> 
                `

}

function deleteByid(id){
    fetch("http://localhost:8082/playlists/"+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      
      
    }
