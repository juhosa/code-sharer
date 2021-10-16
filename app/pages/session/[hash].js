import CodeBlock from "../../components/CodeBlock";
import { createClient } from "@supabase/supabase-js";

export async function getServerSideProps(context) {
  const { params } = context;
  const { hash } = params;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_DB_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
