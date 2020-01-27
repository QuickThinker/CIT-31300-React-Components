import React from 'react';

import Name from "./components/inputs/Name.js";
import NavBar from "./components/nav/navbar.js";
import Post from "./components/home/post";


function App() {
  return (
      <div className="App">
        <NavBar></NavBar>
        <Name firstName={"Bailey"} lastName={" Lester"}></Name>
        <br></br>
        <Post name={"Joe "}  start={23} color={"Blue"}/>
        <br></br>
        <Post name={"Billy "} start={20} color={"Green"}/>
        <br></br>
        <Post name={"Jimmy "}  start={18} color={"Yellow"}/>
      </div>
  );
}
export default App;