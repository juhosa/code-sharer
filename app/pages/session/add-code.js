import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const AddCode = () => {
  const [username, setUsername] = useState("");
  const [sessionhash, setSessionhash] = useState("");
  const [codedata, setCodedata] = useState("");

  const save = async () => {
    if (username === "" || sessionhash === "" || codedata === "") {
      return;
    }

    const { data, error } = await supabase
      .from("codes")
      .insert({ creator: username, session_hash: sessionhash, data: codedata });

    console.error(error);
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
