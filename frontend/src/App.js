import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import RegisterUser from "./components/RegisterUser";

// pages
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup/person" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
