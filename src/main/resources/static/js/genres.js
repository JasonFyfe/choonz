fetch('http://localhost:8082/genres')
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
                console.log(data._embedded.genres);
                console.log(data._embedded.genres[0]);

                document.getElementById("main").innerHTML = `

          ${data._embedded.genres.map(genreTemplate).join('')}


  
  `

            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function genreTemplate(genre) {
    return `
                <div class ="genre">
                <h1>${genre.id}</h1>    
                <h2>${genre.name}</h2>
                <h3>Description: ${genre.description} </h3>
                <h4>Tracks: ${genre.tracks} </h4>
                <button onclick="deleteByid(${genre.id})">Delete</button>
                <input type="button" onclick="location.href='genre.html?id='+${genre.id};" value="View real" />
                </div> 
                `

}

function deleteByid(id){
    fetch("http://localhost:8082/genres/"+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      
      
    }
