"use server";

import { db } from "./db";
import { z } from 'zod'

const schema = z.object({
    email: z.string().email()
})

export async function subscribe(formData: FormData) {
    const data = {
        email: formData.get("email") as string
    }

    if (!schema.safeParse(data).success) {
        return
    }
    
    const sub = await db.subscriber.findFirst({
        where: {
            email: data.email
        }}
    );

    if (!sub) {
        await db.subscriber.create({ data });
    }
}