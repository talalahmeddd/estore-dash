import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Navbar />} />{" "}
//         <Route path="blogs" element={<Dashboard />} />{" "}
//         <Route path="contact" element={<Customers />} />{" "}
//       </Routes>{" "}
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < App / > );