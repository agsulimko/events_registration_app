import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import { Suspense, lazy } from "react";

import Loader from "./Loader/Loader";

// const Home = lazy(() => import("../pages/Home"));
const Events = lazy(() => import("../pages/Events"));
const Register = lazy(() => import("../pages/Register"));
const View = lazy(() => import("../pages/View"));
export const App = () => {
  return (
    <>
      <Suspense fallback={<div>{Loader()}</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view" element={<View />} />

            <Route path="*" element={<Events />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
