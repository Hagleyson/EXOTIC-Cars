import { Route, Routes } from "react-router-dom";
import { Home, Details } from "@screens/index";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default Routers;
