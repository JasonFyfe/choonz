    const URL = 'http://localhost:8082/api/genres/'

    // template
    genreTemplate = (genre) => {
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
    
    // create
    create = () => {
    
        const name = document.querySelector('#name').value;
        const description = document.querySelector('#description').value;
    
        const data = {
            "name": name,
            "description": description
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
                        `${data._embedded.genres.map(genreTemplate).join('')}`
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
    
        document.getElementById(id).remove();
    
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