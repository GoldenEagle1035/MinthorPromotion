import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import CommingSoon from "./pages/CommingSoon";
import NoPage from "./pages/NoPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/features" element={<Layout />}>
          <Route index element={<Features />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/team" element={<Layout />}>
          <Route index element={<Team />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/comming_soon" element={<Layout />}>
          <Route index element={<CommingSoon />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
