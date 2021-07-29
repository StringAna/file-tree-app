import React from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" isOpen={false}>
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
  //destructuring the props object
  const { name, isOpen, children } = props;
  return (
    <div>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

//An individual entity
const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
