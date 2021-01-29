create table user (
    id bigint auto_increment,
    username varchar(255) unique,
    password varchar(255),
    primary key (id)
);

create table role (
	id bigint auto_increment,
	name varchar(255) not null unique,
	primary key(id)
);

create table users_roles (
	user_id bigint,
	role_id bigint,
	foreign key (user_id) references user,
	foreign key (role_id) references role
);
