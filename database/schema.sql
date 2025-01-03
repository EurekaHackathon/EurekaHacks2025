create table if not exists public.stats (
    id serial primary key,
    name varchar(255) not null,
    value integer not null
);

create table if not exists public.mailing_list (
    id serial primary key,
    email varchar(255) unique not null
);