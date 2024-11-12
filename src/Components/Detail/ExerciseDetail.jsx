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
import { sampleExercises } from "../SampleData/sampleExercises";
import CategoryIcon from '@mui/icons-material/Category';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CakeIcon from "@mui/icons-material/Cake";
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import ReplayIcon from '@mui/icons-material/Replay';
import EmergencyIcon from '@mui/icons-material/Emergency';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';

function ExerciseDetail() {
  const { id } = useParams();
  const exerciseId = Number(id);
  const exercise = sampleExercises.find((ex) => ex.id === exerciseId);
  const navigate = useNavigate();

  if (!exercise) return <p>Exercise not found!</p>;

  const handleDelete = () => {
    console.log(`Delete exercise with id: ${exerciseId}`);
  };

  const handleEdit = () => {
    navigate(`/edit-exercise/${exerciseId}`);
  };

  const handleBack = () => {
    navigate("/");
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
            {exercise.name}
          </Box>
          <Box mb={2}>{exercise.description}</Box>
          
          <Box fontWeight="medium" fontSize="1.2rem" mb={1}>Details</Box>
          <Box className="tracking-wide">
            <Box><CategoryIcon className="text-yellow-400"/> <span className="font-bold">Category:</span> {exercise.category}</Box>
            <Box><MonitorHeartOutlinedIcon color="primary"/> <span className="font-bold">Intensity:</span> {exercise.intensity}</Box>
            <Box><WhatshotSharpIcon className="text-red-600"/> <span className="font-bold">Calories Burned:</span> {exercise.caloriesBurned}</Box>
            <Box><FlagSharpIcon className="text-green-700"/> <span className="font-bold">Goal Type:</span> {exercise.goalType}</Box>
            <Box><FitnessCenterSharpIcon className="text-black"/> <span className="font-bold">Fitness Level:</span> {exercise.fitnessLevel}</Box>
            <Box><EmojiPeopleIcon className="text-gray-600"/> <span className="font-bold">BMI Range:</span> {exercise.bmiRange?.min} - {exercise.bmiRange?.max}</Box>
            <Box><CakeIcon className="text-orange-600"/> <span className="font-bold">Age Range:</span> {exercise.ageRange?.min} - {exercise.ageRange?.max}</Box>
            <Box><AlarmOnIcon className="text-red-600 text-sm"/> <span className="font-bold">Duration:</span> {exercise.duration} minutes</Box>
            <Box><ReplayIcon className="text-gray-600"/> <span className="font-bold">Reps:</span> {exercise.reps}</Box>
            <Box><EmergencyIcon className="text-gray-600"/> <span className="font-bold">Sets:</span> {exercise.sets}</Box>
            <Box><ImageOutlinedIcon className="text-green-600"/> <span className="font-bold">Image Description:</span> {exercise.imageDescription}</Box>
            <Box mt={1}>
              <ModeStandbyOutlinedIcon className="text-red-600"/> <span className="font bold">Target Areas:</span>
              {exercise.targetAreas?.map((area, index) => (
                <Chip key={index} label={area} variant="outlined" className="m-1" />
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
        className="object-c"
          component="img"
          image={exercise.images?.[0]}
          alt={exercise.imageDescription || "Exercise image"}
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "cover", objectContain: "right", objectPosition: "center"}}
        />
      </Card>
    </Box>
  );
}

export default ExerciseDetail;
