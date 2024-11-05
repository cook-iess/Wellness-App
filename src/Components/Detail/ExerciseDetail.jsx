import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import { Card, CardContent, CardMedia, Typography, Chip, Button, Stack } from "@mui/material"; // Import Material UI components
import EditIcon from '@mui/icons-material/Edit'; // Import Edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import Back icon
import { sampleExercises } from "../SampleData/sampleExercises";

function ExerciseDetail() {
  const { id } = useParams();
  const exerciseId = Number(id); // Convert id to a number
  const exercise = sampleExercises.find(ex => ex.id === exerciseId); // Find the exercise by id
  const navigate = useNavigate(); // Hook for navigation

  if (!exercise) return <p>Exercise not found!</p>;

  // Handler for delete action
  const handleDelete = () => {
    // Implement delete logic here (e.g., make an API call to delete the exercise)
    console.log(`Delete exercise with id: ${exerciseId}`);
  };

  // Handler for edit action
  const handleEdit = () => {
    navigate(`/edit-exercise/${exerciseId}`); // Redirect to edit page (make sure this route exists)
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
          image={exercise.images?.[0]} // Use the first image, safe access
          alt={exercise.imageDescription || "Exercise image"}
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {exercise.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {exercise.description}
          </Typography>
          <Typography variant="h6">Details</Typography>
          <Typography>
            <strong>Category:</strong> {exercise.category}
          </Typography>
          <Typography>
            <strong>Intensity:</strong> {exercise.intensity}
          </Typography>
          <Typography>
            <strong>Calories Burned:</strong> {exercise.caloriesBurned}
          </Typography>
          <Typography>
            <strong>Goal Type:</strong> {exercise.goalType}
          </Typography>
          <Typography>
            <strong>Fitness Level:</strong> {exercise.fitnessLevel}
          </Typography>
          <Typography>
            <strong>BMI Range:</strong> {exercise.bmiRange?.min} - {exercise.bmiRange?.max}
          </Typography>
          <Typography>
            <strong>Age Range:</strong> {exercise.ageRange?.min} - {exercise.ageRange?.max}
          </Typography>
          <Typography>
            <strong>Duration:</strong> {exercise.duration} minutes
          </Typography>
          <Typography>
            <strong>Reps:</strong> {exercise.reps}
          </Typography>
          <Typography>
            <strong>Sets:</strong> {exercise.sets}
          </Typography>
          <Typography>
            <strong>Image Description:</strong> {exercise.imageDescription}
          </Typography>
          <Typography>
            <strong>Target Areas:</strong>
            {exercise.targetAreas?.map((area, index) => (
              <Chip key={index} label={area} variant="outlined" className="m-1" />
            ))}
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

export default ExerciseDetail;
