import React from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop">
        <h3>some stuff</h3>
        <h4>other things</h4>
      </Folder>
      <Folder name="Applications" />
      <File name="Dogs.jpeg" />
      <File name="Cats.jpeg" />
    </div>
  );
}

//An entity containing more things
const Folder = (props) => {
  console.log(props);
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );
};

//An individual entity
const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
