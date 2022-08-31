import "./router.css";
import React from "react";
function Router() {
  return (
    <div className="router">
      <h1>ROUTER-COMPONENT</h1>
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="/Football" element={<Football />}></Route>
        <Route path="/Basketball" element={<Basketball />}></Route>
        <Route path="/Page-not-found" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default Router;