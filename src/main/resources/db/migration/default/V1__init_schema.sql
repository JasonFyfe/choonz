create table user (
    id bigint auto_increment,
    username varchar(255) unique,
    password varchar(255)
);