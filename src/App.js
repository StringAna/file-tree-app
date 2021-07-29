import { React, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //for arrow direction on click changing
  const direction = isOpen ? "down" : "right";
  //destructuring the props object
  const { name, children } = props;
  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
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
