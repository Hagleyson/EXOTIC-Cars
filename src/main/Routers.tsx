import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Details, NotFound } from "@screens/index";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/notFound" />} />
      </Routes>
    </>
  );
}

export default Routers;
