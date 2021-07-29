import React from "react";

function App() {
  return (
    <div className="App">
      <Folder />
      <Folder />
      <Folder />
    </div>
  );
}

const Folder = () => {
  return <h4>Folder</h4>;
};

export default App;
