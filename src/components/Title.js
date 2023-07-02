const Title = () => (
  <img
    className="h-28 p-2"
    alt="logo"
    src="data:image/png;base64,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"
  />
  // <h1 id="title" key="h2">
  //   Food Villa
  // </h1>
);

export default Title;
