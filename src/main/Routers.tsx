import { Route, Routes, Navigate } from "react-router-dom";



import { Home,  } from "../screens/index";
function Routers() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default Routers;