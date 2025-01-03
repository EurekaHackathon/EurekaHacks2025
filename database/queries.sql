-- name: IncrementVisitsCount :one
update public.stats
    set value = value + 1
where name = 'visits' returning *;

-- name: AddEmailToMailingList :one
insert into public.mailing_list (email)
    values ($1)
    on conflict (email) do update set email = excluded.email
    returning *;