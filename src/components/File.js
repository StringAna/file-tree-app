import { React } from "react";

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

export default File;
