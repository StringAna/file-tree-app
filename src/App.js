import React from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" />
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  console.log(props);
  return <h4>{props.name}</h4>;
};

export default App;
