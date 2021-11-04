import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Link from "next/link";

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };
  }

  return { props: { user } };
}

const CreateSession = ({ user }) => {
  // console.log({ user });
  const [username, setUsername] = useState(user.email);
  const [sessionName, setSessionName] = useState("");
  const [hash, setHash] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [msg, setMsg] = useState("");

  const save = async () => {
    if (username === "" || hash === "" || startTime === "" || endTime === "") {
      return;
    }

    const { data, error } = await supabase.from("sessions").insert({
      creator: username,
      name: sessionName,
      hash: hash,
      start_time: startTime,
      end_time: endTime,
    });

    if (data) {
      setMsg("Created!");
    }
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
          disabled
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

        {msg && (
          <div>
            <p>{msg}</p>
            <p>
              The link for the session is{" "}
              <Link href={`/session/${hash}`}>{`/session/${hash}`}</Link>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateSession;
