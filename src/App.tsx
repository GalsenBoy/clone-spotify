import "./App.css";
import Aside from "./pages/Aside";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/aside"} element={<Aside />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
