// // App.jsx
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import { Suspense, lazy } from "react";
// import Loader from "./Loader/Loader";

// const Events = lazy(() => import("../pages/Events"));
// const Register = lazy(() => import("../pages/Register"));
// const View = lazy(() => import("../pages/View"));

// export const App = () => {
//   return (
//     <>
//       <Suspense fallback={<div>{Loader()}</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Events />} />
//             <Route path="/register" element={<Register />} />{" "}
//             {/* Исправленный путь */}
//             <Route path="/view" element={<View />} />
//             <Route path="*" element={<Events />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default App;

// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const Events = lazy(() => import("../pages/Events"));
const Register = lazy(() => import("../pages/Register"));
const View = lazy(() => import("../pages/View"));
// const ViewDetails = lazy(() => import("../components/ViewDetails")); // Новый компонент для деталей мероприятия
// const ViewDetails = lazy(() => import("./ViewDetails"));
// const RegisterForm = lazy(() => import("./RegisterForm"));

export const App = () => {
  return (
    <Suspense fallback={<div>{Loader()}</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Events />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/view" element={<View />} /> */}
          {/* <Route path=":viewId" element={<ViewDetails />} />
          <Route path=":registerId" element={<RegisterForm />} /> */}
          <Route path="/view/:viewId" element={<View />} />
          {/* <Route path="/view/:viewId" element={<ViewDetails />} /> */}
          <Route path="/register/:registerId" element={<Register />} />
          <Route path="*" element={<Events />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
