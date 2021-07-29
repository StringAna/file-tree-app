import React from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="song1.mp4" />
          <File name="song2.mp4" />
        </Folder>
        <File name="Dogs.jpeg" />
        <File name="Cats.jpeg" />
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

//An entity containing more things
const Folder = (props) => {
  console.log(props);
  return (
    <div>
      {props.name}
      <div style={{ marginLeft: "17px" }}>{props.children}</div>
    </div>
  );
};

//An individual entity
const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
