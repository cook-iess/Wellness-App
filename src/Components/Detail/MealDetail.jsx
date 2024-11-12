import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Stack,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { sampleMeals } from "../SampleData/sampleMeals";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CakeIcon from "@mui/icons-material/Cake";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import EggAltIcon from "@mui/icons-material/EggAlt";
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

function MealDetail() {
  const { id } = useParams();
  const mealId = Number(id);
  const meal = sampleMeals.find((m) => m.id === mealId);
  const navigate = useNavigate();

  if (!meal) return <p>Meal not found!</p>;

  const handleDelete = () => {
    console.log(`Delete meal with id: ${mealId}`);
  };

  const handleEdit = () => {
    navigate(`/edit-meal/${mealId}`);
  };

  const handleBack = () => {
    navigate("/meals");
  };

  return (
    <Box className="container mx-auto px-4">
      <Button
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        className="mb-4"
      >
        Back
      </Button>
      <Card variant="outlined" className="shadow-lg mt-0" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/* Details */}
        <CardContent sx={{ flex: "1 1 40%", p: 3 }} className="mt-0">
          <Box fontSize="1.5rem" fontWeight="bold" mb={1}>
            {meal.name}
          </Box>
          <Box mb={2}>{meal.description}</Box>
          
          <Box fontWeight="medium" fontSize="1.2rem" mb={1}>Details</Box>
          <Box className="tracking-wide">
            <Box><LocalDiningIcon className="text-yellow-400"/> <span className="font-bold">Meal Type:</span> {meal.mealType}</Box>
            <Box><WhatshotIcon color="error"/> <span className="font-bold">Calories:</span> {meal.calorieContent}</Box>
            <Box><FitnessCenterIcon color="primary"/> <span className="font-bold">Goal Type:</span> {meal.goalType.join(", ")}</Box>
            <Box><EmojiPeopleIcon className="text-green-700"/> <span className="font-bold">BMI Range:</span> {meal.bmiRange.min} - {meal.bmiRange.max}</Box>
            <Box><CakeIcon className="text-orange-600"/> <span className="font-bold">Age Range:</span> {meal.ageRange.min} - {meal.ageRange.max}</Box>
            <Box><EggAltIcon color="secondary"/> <span className="font-bold">Protein:</span> {meal.nutritionContent.protein}g</Box>
            <Box><LocalFireDepartmentIcon className="text-red-500"/> <span className="font-bold">Fat:</span> {meal.nutritionContent.fat}g</Box>
            <Box><WhatshotIcon className="text-yellow-700"/> <span className="font-bold">Carbs:</span> {meal.nutritionContent.carbs}g</Box>
            <Box><InvertColorsOutlinedIcon className="text-green-700"/> <span className="font-bold">Fiber:</span> {meal.nutritionContent.fiber}g</Box>
            <Box><MenuBookOutlinedIcon className="text-blue-600"/> <span className="font-bold">Preparation:</span> {meal.preparation}</Box>
            <Box mt={1}>
              {/* <ShoppingBagOutlinedIcon className="text-red-600"/> */}
              <svg className="text-red-600 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
               <span className="font bold"> Ingredients:</span>
              {meal.ingredients.map((ingredient, index) => (
                <Chip key={index} label={`${ingredient.ingredient} - ${ingredient.quantity}`} variant="outlined" className="m-1" />
              ))}
            </Box>
          </Box>

          {/* Action Buttons */}
          <Stack spacing={2} direction="row" className="flex justify-end mt-4">
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </CardContent>

        {/* Image */}
        <CardMedia
          component="img"
          image={meal.images?.[0]}
          alt={`${meal.name} image`}
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "cover", objectPosition: "center" }}
        />
      </Card>
    </Box>
  );
}

export default MealDetail;
