import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log({ user });
    console.log({ session });
    if (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Sign up</h2>
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

        <button onClick={register}>register!</button>
      </div>
    </div>
  );
};

export default SignUp;
