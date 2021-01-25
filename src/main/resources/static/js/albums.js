fetch('http://localhost:8082/albums')
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
                <input type="button" onclick="location.href='album.html?id='+${album.id};" value="View real" />
                
                </div> 
                `

}

function deleteByid(id){
    fetch("http://localhost:8082/albums/"+id, {
        method: 'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      
      
    }

      
    var namealbum = document.querySelector('#Name');
    var track = document.querySelector('#Track');
    var cover = document.querySelector('#Cover');


    document.getElementById("create").onclick = function() {myFunction()};

    function myFunction() {

    
        let data = {
            "name" :  namealbum.value,
            "track": track.value,
            "cover": cover.value


              
          }
          console.log("Data to post",data)         
            console.log(namealbum.value);
            console.log(track.value);
            console.log(cover.value);
            console.log("Data to post",data)
            sendData(data)
            
  
      }

      function sendData(data){
        fetch("http://localhost:8082/albums", {
            method: 'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(data)
          })
          .then(function (data) {
            console.log('Request succeeded with JSON response', data);
          })
          .catch(function (error) {
            console.log('Request failed', error);
          });
          location.reload()
        }


    

