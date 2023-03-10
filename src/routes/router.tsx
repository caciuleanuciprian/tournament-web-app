import { Route, Routes, useNavigate } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Tournaments from "../pages/Tournaments";

import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/about" element={<Tournaments />} />
      <Route path="/contact" element={<div>CONTACT</div>} />
      <Route path="/support" element={<div>Support</div>} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
    </Routes>
  );
};

export default Router;
