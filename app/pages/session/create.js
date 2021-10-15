import { useState } from "react";
const CreateSession = () => {
  const [username, setUsername] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [hash, setHash] = useState("");

  const save = () => {
    console.log(username, sessionName, hash);
  };

  return (
    <div>
      <h2>Create a new session</h2>

      <div>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="">Session name</label>
        <input
          type="text"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
        />
        <br />

        <label htmlFor="">Session hash</label>
        <input
          type="text"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        />
        <br />

        <button onClick={save}>Create</button>

        <p>INFO</p>
      </div>
    </div>
  );
};

export default CreateSession;
