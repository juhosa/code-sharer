import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const App = () => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    setUser(supabase.auth.session().user.email);

    supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
    });
  }, []);
  return (
    <div>
      <h1>ze app</h1>
      <h3>user:{user} </h3>
      <Link href="/session/create">Create session</Link>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default App;
