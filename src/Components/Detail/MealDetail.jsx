import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import { Card, CardContent, CardMedia, Typography, Chip, Button, Stack } from "@mui/material"; // Import Material UI components
import EditIcon from '@mui/icons-material/Edit'; // Import Edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import Back icon
import { sampleMeals } from "../SampleData/sampleMeals"; // Import sample meals data

function MealDetail() {
  const { id } = useParams();
  const mealId = Number(id); // Convert id to a number
  const meal = sampleMeals.find(meal => meal.id === mealId); // Find the meal by id
  const navigate = useNavigate(); // Hook for navigation

  if (!meal) return <p>Meal not found!</p>;

  // Handler for delete action
  const handleDelete = () => {
    // Implement delete logic here (e.g., make an API call to delete the meal)
    console.log(`Delete meal with id: ${mealId}`);
  };

  // Handler for edit action
  const handleEdit = () => {
    navigate(`/edit-meal/${mealId}`); // Redirect to edit page (make sure this route exists)
  };

  // Handler for back action
  const handleBack = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="container mx-auto px-4 pt-2 pb-4">
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        className="mb-4" // Margin bottom for spacing
      >
        Back
      </Button>
      <Card variant="outlined" className="shadow-lg">
        <CardMedia
          component="img"
          height="200" // Adjust height for a more manageable image size
          image={meal.images?.[0]} // Use the first image, safe access
          alt={meal.name || "Meal image"}
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {meal.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {meal.description}
          </Typography>
          <Typography variant="h6">Nutrition Content</Typography>
          <Typography>
            <strong>Calories:</strong> {meal.calorieContent} kcal
          </Typography>
          <Typography>
            <strong>Protein:</strong> {meal.nutritionContent.protein} g
          </Typography>
          <Typography>
            <strong>Carbs:</strong> {meal.nutritionContent.carbs} g
          </Typography>
          <Typography>
            <strong>Fat:</strong> {meal.nutritionContent.fat} g
          </Typography>
          <Typography>
            <strong>Fiber:</strong> {meal.nutritionContent.fiber} g
          </Typography>
          <Typography variant="h6">Ingredients</Typography>
          <Typography>
            {meal.ingredients.map((ingredient, index) => (
              <Chip key={index} label={`${ingredient.quantity} ${ingredient.ingredient}`} variant="outlined" className="m-1" />
            ))}
          </Typography>
          <Typography variant="h6">Preparation</Typography>
          <Typography>{meal.preparation}</Typography>
          <Typography variant="h6">Details</Typography>
          <Typography>
            <strong>Meal Type:</strong> {meal.mealType}
          </Typography>
          <Typography>
            <strong>Goal Type:</strong> {meal.goalType.join(', ')}
          </Typography>
          <Typography>
            <strong>BMI Range:</strong> {meal.bmiRange?.min} - {meal.bmiRange?.max}
          </Typography>
          <Typography>
            <strong>Age Range:</strong> {meal.ageRange?.min} - {meal.ageRange?.max}
          </Typography>
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
      </Card>
    </div>
  );
}

export default MealDetail;
