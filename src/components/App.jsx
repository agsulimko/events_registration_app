// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const Events = lazy(() => import("../pages/Events"));
const Register = lazy(() => import("../pages/Register"));
const View = lazy(() => import("../pages/View"));

export const App = () => {
  return (
    <Suspense fallback={<div>{Loader()}</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Events />} />

          <Route path="/view/:viewId" element={<View />} />

          <Route path="/register/:registerId" element={<Register />} />
          <Route path="*" element={<Events />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
