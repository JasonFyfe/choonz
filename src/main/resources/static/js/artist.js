const params = new URLSearchParams(window.location.search);

for(let param of params ){
    console.log("here i am",param)
    let id = param[1];
    console.log(id);
    getData(id)
}

function getData(id){
    fetch('http://localhost:8082/artists/'+id)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data);

            

            document.getElementById("main").innerHTML =  `
                <div class ="artistone">
                <h1>${data.id}</h1>    
                <h2>${data.name}</h2>
                <button onclick="deleteByid(${data.id})">Delete</button>
                
                </div> 
                
            `     
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }


    function deleteByid(id){
        fetch("http://localhost:8082/artists/"+id, {
            method: 'delete',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
          })
          
          
        }

