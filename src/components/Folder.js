import { React, useState } from "react";

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
export default Folder;
