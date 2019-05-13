use burger_db;

insert into burgers(burger_name,devoured) values ("Cheese burger",false);
insert into burgers(burger_name,devoured) values ("Turkey burger",true);
insert into burgers(burger_name,devoured) values ("Pesto burger",false);

select * from burgers;

update burgers
set devoured=0 where id in (1,3);