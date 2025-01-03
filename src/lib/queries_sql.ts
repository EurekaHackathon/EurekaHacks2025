import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const incrementVisitsCountQuery = `-- name: IncrementVisitsCount :exec
update public.stats
    set value = value + 1
where name = 'visits'`;

export async function incrementVisitsCount(client: Client): Promise<void> {
    await client.query({
        text: incrementVisitsCountQuery,
        values: [],
        rowMode: "array"
    });
}

