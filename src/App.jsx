import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Bars from "./Components/Shared/bars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./Components/exercises";
import Meals from "./Components/meals";
import Users from "./Components/users"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bars />}>
          <Route index element={<Exercises />} />
          <Route path="/" element={<Exercises />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
