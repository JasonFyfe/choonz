fetch('http://localhost:8082/artists')
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

                document.getElementById("main").innerHTML = `

          ${data._embedded.artists.map(artistTemplate).join('')}


  
  `

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
            
                </div> 
                `

}

function deleteByid(id){
    fetch("http://localhost:8082/artists/"+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      
      
    }

