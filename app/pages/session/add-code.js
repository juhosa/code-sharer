import { useState } from "react";
const AddCode = () => {
  const [username, setUsername] = useState("");
  const [sessionhash, setSessionhash] = useState("");
  const [codedata, setCodedata] = useState("");

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
        <button>Save</button>
      </div>
    </div>
  );
};

export default AddCode;
