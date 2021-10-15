import { useRouter } from "next/router";
import CodeBlock from "../../components/CodeBlock";

const SessionList = () => {
  const router = useRouter();
  const { hash } = router.query;
  return (
    <div>
      <h2>Session name: {hash}</h2>

      <div>
        <CodeBlock data={{ creator: "UI-Juho", data: "superkoodia" }} />
        <CodeBlock data={{ creator: "Ei-UI-Juho", data: "tylsää koodia" }} />
      </div>
    </div>
  );
};

export default SessionList;
