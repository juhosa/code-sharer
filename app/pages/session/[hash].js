import CodeBlock from "../../components/CodeBlock";
import { supabase } from "../../utils/supabaseClient";

export async function getServerSideProps(context) {
  const { params } = context;
  const { hash } = params;

  const { data, error } = await supabase
    .from("codes")
    .select()
    .eq("session_hash", hash);

  return {
    props: { hash: hash, data },
  };
}

const SessionList = ({ hash, data }) => {
  return (
    <div>
      <h2>Session name: {hash}</h2>
      <div>
        {data.map((c, i) => {
          return <CodeBlock key={i} data={c} />;
        })}
      </div>
    </div>
  );
};

export default SessionList;
