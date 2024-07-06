import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoomWrapper from "./pages/SingleRoomWrapper"
import Error from "./pages/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./layout/Layout";
import Login from "./pages/login";
import { useEffect, useState } from "react";
import PrivateRoute from "./Routes/privateRoute";

function App() {
  let localAuth = JSON.parse(localStorage.getItem("authantacited")) || false;

  const [authenticated ,setAuthanticatied] = useState(localAuth)

 useEffect(()=>{
  setAuthanticatied(localAuth)
 })
  return (
    <Routes>
      <Route path="/login" element={<Login setAuthanticatied={setAuthanticatied} authenticated={authenticated}/>}> </Route> 
      <Route  element={<PrivateRoute authenticated ={authenticated}/>}>
      <Route path="/" element={<SharedLayout setAuthanticatied={setAuthanticatied}/>}>
        <Route index element={<Home />} />
        
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:slug" element={<SingleRoomWrapper  />} />
        <Route path="*" element={<Error />} />
      </Route>
      </Route>
     
    </Routes>
  );
}

export default App;