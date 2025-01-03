create table if not exists public.stats (
    id serial primary key,
    name varchar(255) not null,
    value integer not null
);