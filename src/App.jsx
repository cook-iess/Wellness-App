import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Bars from "./Components/Shared/bars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import Exercises from "./Components/exercises";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bars />}>
          <Route index element={<Dashboard />} />
          <Route path="Exercises" element={<Exercises />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
