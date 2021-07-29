import React from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" />
      <Folder name="Applications" />
      <File name="Dogs.jpeg" />
    </div>
  );
}

//An entity containing more things
const Folder = (props) => {
  console.log(props);
  return <h4>{props.name}</h4>;
};

//An individual entity
const File = (props) => {
  return <h5>{props.name}</h5>;
};
export default App;
