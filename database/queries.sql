-- name: IncrementVisitsCount :exec
update public.stats
    set value = value + 1
where name = 'visits';