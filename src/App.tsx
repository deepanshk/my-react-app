import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const PageOne = React.lazy(() => import("./pages/PageOne"));
const PageTwo = React.lazy(() => import("./pages/PageTwo"));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="sided-widget" placementId="1" clientId="1"></div>
            }
          />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
