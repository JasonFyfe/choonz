create table artist (
	id bigint auto_increment,
	name varchar(100) not null unique,
	primary key (id)
);

create table album (
	id bigint auto_increment,
	name varchar(100) not null unique,
	cover varchar(255),
	artist_id bigint,
	primary key (id),
	foreign key (artist_id) references artist
);

create table genre (
	id bigint auto_increment,
	name varchar(100) not null unique,
	description varchar(250) not null unique,
	primary key (id)
);

create table playlist (
	id bigint auto_increment,
	name varchar(100) not null unique,
	description varchar(500) not null,
	artwork varchar(1000) not null,
	primary key (id)
);

create table track (
	id bigint auto_increment,
	name varchar(100) not null unique,
	duration integer not null, 
	lyrics varchar(255),
	album_id bigint,
	genre_id bigint,
	playlist_id bigint,
	primary key (id),
	foreign key (album_id) references album,
	foreign key (genre_id) references genre,
	foreign key (playlist_id) references playlist
);

INSERT INTO artist (name) VALUES ('Calibre');
INSERT INTO artist (name) VALUES ('MJ Cole');

INSERT INTO album (name, cover, artist_id)
VALUES ('Shelflife 4', 'https://via.placeholder.com/150', 1);
INSERT INTO album (name, cover, artist_id)
VALUES ('Sincere', 'https://via.placeholder.com/151', 2);

INSERT INTO genre (name, description)
VALUES ('Drum and Bass', 'Sweet sweet basslines');
INSERT INTO genre (name, description)
VALUES ('Garage', 'Bo selectaaaaaa');

INSERT INTO playlist (name, description, artwork)
VALUES ('Bangers', 'Classic tunes to get you in the groove''', 'https://via.placeholder.com/150');
INSERT INTO playlist (name, description, artwork)
VALUES ('More Bangers', 'More classic tunes to get you in the groove''', 'https://via.placeholder.com/151');

INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Spacetime', 338, 'I imagine myself large as the universe...', 1, 1, 1);
INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Hold The Light', 289, 'Livin'' ain''t easy...', 1, 1, 2);
INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Love Worn Soul', 347, 'Oooooooooooo...', 1, 1, 1);

INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Tired Games', 299, 'It gets darker as we walk your mind...', 2, 2, 1);
INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Bandelero Desperado', 238, 'This how I do my ting undisputed cinema slum king...', 2, 2, 2);
INSERT INTO track (name, duration, lyrics, album_id, genre_id, playlist_id)
VALUES ('Crazy Love', 280, 'I don''t know you as I should, no to be here talking, love love...', 2, 2, 1);