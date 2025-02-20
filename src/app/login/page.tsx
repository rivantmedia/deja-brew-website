"use server";

import { signIn} from "next-auth/react";

export default function LoginPage() {

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => signIn()}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
