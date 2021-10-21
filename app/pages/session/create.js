import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const CreateSession = () => {
  const [username, setUsername] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [hash, setHash] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const save = async () => {
    if (username === "" || hash === "" || startTime === "" || endTime === "") {
      return;
    }

    const { data, error } = await supabase.from("sessions").insert({
      creator: username,
      hash: hash,
      start_time: startTime,
      end_time: endTime,
    });
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

        <label htmlFor="starttime">Start time</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          name="starttime"
          id="starttime"
        />
        <br />

        <label htmlFor="endtime">End time</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          name="endtime"
          id="endtime"
        />
        <br />

        <button onClick={save}>Create</button>

        <p>INFO</p>
      </div>
    </div>
  );
};

export default CreateSession;
