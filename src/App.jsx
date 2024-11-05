import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Bars from "./Components/Shared/bars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./Components/Pages/exercises";
import Meals from "./Components/Pages/meals";
import Users from "./Components/Pages/users"
import ExerciseDetail from "./Components/Detail/ExerciseDetail";
import MealDetail from "./Components/Detail/MealDetail";

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
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/meals/:id" element={<MealDetail />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
