import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Details } from "@screens/index";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate replace to="/notFound" />} />
      </Routes>
    </>
  );
}

export default Routers;
