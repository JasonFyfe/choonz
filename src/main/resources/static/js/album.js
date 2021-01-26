const params = new URLSearchParams(window.location.search);

for (let param of params) {
    //console.log("here i am", param)
    let id = param[1];
    //console.log(id);
    getData(id)
}

function getData(id) {
    fetch('http://localhost:8082/api/albums/' + id)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    //console.log(data);
                    
                    document.querySelector("input#id").value = data.id;
                  
                    document.querySelector("input#name").value = data.name;
                    document.querySelector("input#cover").value = data.cover;

                document.getElementById("main").innerHTML = `
                <div class ="albumone">
                <h1>${data.id}</h1>    
                <h2>${data.name}</h2>
                <h4>Tracks: ${data.tracks[0].name}</h4>
                <p>Cover: ${data.cover}</p>
                <button onclick="deleteByid(${data.id})">Delete</button>
                
                </div> 
                
            `
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


    document.getElementById("update").onclick = function() {myFunction()};

    function myFunction() {
        var id = document.querySelector('#id').value;
        var namealbum = document.querySelector('#name');
        var cover = document.querySelector('#cover');


    
        let data = {
            "name" :  namealbum.value,
            "cover": cover.value


              
          }
          console.log("Data to post",data)   
          console.log(id)     
            console.log(namealbum.value);
            console.log(cover.value);
            console.log("Data to post",data)
            sendData(data, id)
            
  
      }

      function sendData(data, id){
        fetch("http://localhost:8082/api/albums/"+ id, {
            method: 'put',
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
          //location.reload()
        }

function deleteByid(id) {
    fetch("http://localhost:8082/api/albums/" + id, {
        method: 'delete',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })


}