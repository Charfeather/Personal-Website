import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Button, outlinedInputClasses } from "@mui/material";
import Navbar from "./Navbar";

function App() {

  
  return(
  <div className="h-screen bg-stone-300">
    <Navbar/>
    <h1>Hello :3</h1>
  </div>
  )
}

export default App;
