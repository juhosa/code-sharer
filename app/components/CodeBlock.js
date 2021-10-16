const CodeBlock = ({ data }) => {
  return (
    <div>
      <span>Creator: {data.creator}</span>
      <br />
      <textarea
        value={data.data}
        name=""
        id=""
        cols="30"
        rows="10"
        readOnly
      ></textarea>
    </div>
  );
};

export default CodeBlock;
