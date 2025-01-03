import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const incrementVisitsCountQuery = `-- name: IncrementVisitsCount :one
update public.stats
    set value = value + 1
where name = 'visits' returning id, name, value`;

export interface IncrementVisitsCountRow {
    id: number;
    name: string;
    value: number;
}

export async function incrementVisitsCount(client: Client): Promise<IncrementVisitsCountRow | null> {
    const result = await client.query({
        text: incrementVisitsCountQuery,
        values: [],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        name: row[1],
        value: row[2]
    };
}

export const addEmailToMailingListQuery = `-- name: AddEmailToMailingList :one
insert into public.mailing_list (email)
    values ($1)
    on conflict (email) do update set email = excluded.email
    returning id, email`;

export interface AddEmailToMailingListArgs {
    email: string;
}

export interface AddEmailToMailingListRow {
    id: number;
    email: string;
}

export async function addEmailToMailingList(client: Client, args: AddEmailToMailingListArgs): Promise<AddEmailToMailingListRow | null> {
    const result = await client.query({
        text: addEmailToMailingListQuery,
        values: [args.email],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        email: row[1]
    };
}

