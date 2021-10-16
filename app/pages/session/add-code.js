import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const AddCode = () => {
  const [username, setUsername] = useState("");
  const [sessionhash, setSessionhash] = useState("");
  const [codedata, setCodedata] = useState("");

  const save = async () => {
    if (username === "" || sessionhash === "" || codedata === "") {
      return;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_DB_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase
      .from("codes")
      .insert({ creator: username, session_hash: sessionhash, data: codedata });
  };

  return (
    <div>
      <div>
        <label htmlFor="">Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="">Session hash</label>
        <br />
        <input
          type="text"
          value={sessionhash}
          onChange={(e) => setSessionhash(e.target.value)}
        />
        <br />

        <label htmlFor="">Data</label>
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={codedata}
          onChange={(e) => setCodedata(e.target.value)}
        ></textarea>

        <br />
        <button onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default AddCode;
