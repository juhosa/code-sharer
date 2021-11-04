import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleAuthChange(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  const login = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });
    // console.log({ user });
    // console.log({ session });
    // if (error) {
    //   console.error(error);
    //   throw error;
    // }
    // router.push("/app");
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={login}>login!</button>
      </div>
    </div>
  );
};

export default SignUp;
