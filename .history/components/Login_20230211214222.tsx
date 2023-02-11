"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[]">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button>Sign In to use ChatCPT</button>
    </div>
  );
}

export default Login;