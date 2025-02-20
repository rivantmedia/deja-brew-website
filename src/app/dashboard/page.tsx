"use server"

import { auth } from "@/server/auth";

export default async function dashboard() {

    const session = await auth();

    if (!session) return <p>User not logged in</p>;

    return (
        <div>
            <h1>Welcome, {session.user?.name}</h1>
            <p>Email: {session.user?.email}</p>
        </div>
    );

}