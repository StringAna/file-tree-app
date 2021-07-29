import { React } from "react";
import Folder from "./components/Folder";
import File from "./components/File";

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
export default App;
