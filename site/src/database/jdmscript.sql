create database jdm;
use jdm;

create table usuario (
idusuario int primary key,
nome varchar(45),
email varchar(45),constraint chkemail check (email like '%_@__%.__%'),
senha varchar(45)
);

create table ingresso(
idingresso int primary key,
evento varchar(45),
dataevento varchar(45),
fkusuario int,
foreign key (fkusuario) references usuario(idusuario)





);