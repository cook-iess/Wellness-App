import { useState } from "react";
import { Link } from "react-router-dom";
import { sampleMeals } from "../SampleData/sampleMeals"; // Adjust the import based on your file structure
import { Table } from "@/components/ui/table"; // Adjust the import based on your file structure
import { TextField } from "@mui/material";

function Meals() {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMeals = sampleMeals.filter(
    (meal) =>
      meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.mealType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMeals = [...filteredMeals].sort((a, b) => {
    const modifier = sortConfig.direction === "ascending" ? 1 : -1;
    if (a[sortConfig.key] < b[sortConfig.key]) return -1 * modifier;
    if (a[sortConfig.key] > b[sortConfig.key]) return 1 * modifier;
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto p-3 mt-3 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-2xl font-light mb-4 text-sky-900 my-auto">Meal List</h2>
        <TextField
          className="w-64"
          label="Search"
          color="primary"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-auto mt-2" style={{ maxHeight: '430px' }}>
        <Table>
          <thead className="bg-sky-100 text-sky-700">
            <tr>
              <th
                className="py-3 px-4 border-b cursor-pointer "
                onClick={() => requestSort("name")}
              >
                Name{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th className="py-3 px-4 border-b">Description</th>
              <th
                className="py-3 px-4 border-b cursor-pointer"
                onClick={() => requestSort("mealType")}
              >
                Meal Type{" "}
                {sortConfig.key === "mealType" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="py-3 px-4 border-b cursor-pointer text-center"
                onClick={() => requestSort("calorieContent")}
              >
                Calorie Content{" "}
                {sortConfig.key === "calorieContent" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th className="py-3 px-4 border-b text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedMeals.map((meal, index) => (
              <tr key={index} className="border-t hover:bg-sky-50">
                <td className="py-3 px-4 text-sky-800">{meal.name}</td>
                <td className="py-3 px-4 text-sky-800">
                  {meal.description.length > 20
                    ? `${meal.description.slice(0, 25)}...`
                    : meal.description}
                </td>
                <td className="py-3 px-4 text-sky-800">{meal.mealType}</td>
                <td className="py-3 px-4 text-sky-800 text-center">
                  {meal.calorieContent}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/meals/${meal.id}`}
                    className="text-sky-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Meals;
