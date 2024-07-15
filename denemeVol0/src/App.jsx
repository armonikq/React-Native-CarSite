import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App