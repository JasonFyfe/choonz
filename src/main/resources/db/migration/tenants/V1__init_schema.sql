create table artist (
	id bigint auto_increment,
	name varchar(100) not null unique,
	primary key (id)
);

create table album (
	id bigint auto_increment,
	cover varchar(255),
	name varchar(100) not null unique,
	artist_id bigint, primary key (id),
	foreign key (artist_id) references artist
);

create table genre (
	id bigint auto_increment,
	description varchar(250) not null unique,
	name varchar(100) not null unique,
	primary key (id)
);

create table playlist (
	id bigint auto_increment,
	artwork varchar(1000) not null,
	description varchar(500) not null,
	name varchar(100) not null unique,
	primary key (id)
);

create table track (
	id bigint auto_increment,
	duration integer not null, lyrics varchar(255),
	name varchar(100) not null unique, 
	album_id bigint,
	genre_id bigint,
	playlist_id bigint,
	primary key (id),
	foreign key (album_id) references album,
	foreign key (genre_id) references genre,
	foreign key (playlist_id) references playlist
);