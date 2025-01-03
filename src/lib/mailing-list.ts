"use server";

import { db } from "@/lib/database";
import { addEmailToMailingList } from "@/lib/queries_sql";

export const subscribeToMailingList = async (prevState: any, formData: FormData) => {
    const email = formData.get("email");
    if (!email) {
        return { error: "Email is required" };
    }

    // Check if email is valid
    const emailRegex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/;
    if (!emailRegex.test(email.toString())) {
        return { error: "Invalid email" };
    }

    // Add email to mailing list
    const result = await addEmailToMailingList(db, {
        email: email.toString(),
    });

    if (!result) {
        return { error: "Failed to add subscribe" };
    }

    return { success: true };
};