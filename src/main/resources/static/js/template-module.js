const album = (album) => {
    return `
    <div class="album">
        <h1>${album.name}</h1>    
        <a href="./artist.html?id=${album.artist.id}"><h2 id="artistID-${album.artist.id}" class="artistID">${album.artist.name}</h2></a>
        <img src="${album.cover}">
        <button id="delete">Delete</button>
    </div>`;
}

const albumListItem = (album) => {
    return `
    <div id=${album.id} class="album search-tag">
        <h1>${album.name}</h1>
        <h2>${album.artist.name}</h2>
        <img src="${album.cover}">
        <input type="button" onclick="location.href='album.html?id='+${album.id};" value="View More" />  
    </div>`;
}

const artist = (artist) => {
    return `
    <div class="artist">
        <h1>${artist.name}</h1>
        <button id="delete">Delete</button>
    </div>`;
}

const artistListItem = (artist) => {
    return `
    <div class="artist search-tag"> 
        <h1>${artist.name}</h1>
        <input type="button" onclick="location.href='artist.html?id='+${artist.id};" value="View real" />
    </div>`;
}

const artistAlbumItem = (album) => {
    return `
    <div id=${album.id} class="album">
        <h1>${album.name}</h1>
        <img src="${album.cover}">
        <input type="button" onclick="location.href='album.html?id='+${album.id};" value="View More" />  
    </div>`;
}

const track = (track) => {
    return `
    <div class="track"> 
        <h1>${track.name}</h1>
        <h3>Duration: ${track.duration}s</h3>
        <h4>Lyrics: ${track.lyrics}</h4>
        <button id="delete">Delete</button>
    </div>`;
}

const trackListItem = (track) => {
    return `
    <div class="track search-tag">
        <h1>${track.name}</h1>
        <h3>Duration: ${track.duration}s</h3>
        <h4>Lyrics: ${track.lyrics}</h4>  
        <input type="button" onclick="location.href='track.html?id='+${track.id};" value="View real" />        
    </div>`;
}

const shortTrackItem = (track) => {
    return `
    <div class="track">
        <h1>${track.name}</h1>
        <h3>Duration: ${track.duration}s</h3>
        <input type="button" onclick="location.href='track.html?id='+${track.id};" value="View More" />        
    </div>`;
}

const genre = (genre) => {
    return `
    <div class="genre">  
        <h1>${genre.name}</h1>
        <h3>Description: ${genre.description} </h3>
        <button id="delete">Delete</button>
    </div> `;
}
const genreListItem = (genre) => {
    return `
    <div class="genre">
        <h1>${genre.name}</h1>
        <h3>Description: ${genre.description} </h3>
        <input type="button" onclick="location.href='genre.html?id='+${genre.id};" value="View real" />
    </div>`;
}

const playlist = (playlist) => {
    return `
    <div class="playlist">
        <h1>${playlist.name}</h1>
        <h3>Description: ${playlist.description}</h3>
        <img src="${playlist.artwork}">
        <button id="delete">Delete</button>
    </div>`;
}

const playlistListItem = (playlist) => {
    return `
    <div class="playlist">
        <h1>${playlist.name}</h1>
        <h3>Description: ${playlist.description}</h3>
        <img src="${playlist.artwork}">
        <input type="button" onclick="location.href='playlist.html?id='+${playlist.id};" value="View real" />
    </div>`;
}

const navbar = () => {
    return `
    <div>
        <ul>
            <li>
                <a href="/html/welcome.html">Home</a>
            </li>
            <li>
                <a href="/html/tracks.html">Tracks</a>
            </li>
            <li>
                <a href="/html/artists.html">Artists</a>
            </li>
            <li>
                <a href="/html/albums.html">Albums</a>
            </li>
            <li>
                <a href="/html/playlists.html">Playlists</a>
            </li>
            <li>
                <a href="/html/genres.html">Genres</a>
            </li>
            <li>
                <a href="/logout">Logout</a>
            </li>
        </ul>
    </div>`;
}

const dropdownItem = (data) => {
    return `<option value="${data.id}">${data.name}</option>`
}

export {
    navbar, dropdownItem,
    album, albumListItem,
    artist, artistListItem, artistAlbumItem,
    track, trackListItem, shortTrackItem,
    genre, genreListItem,
    playlist, playlistListItem
};