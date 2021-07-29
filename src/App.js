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
  const { name } = props;
  //split on . , take the second element
  const fileExtension = name.split(".")[1];

  //object to map the file extenstion to the type of icon
  const fileIcons = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};
export default App;
