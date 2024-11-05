import React from "react";
// import { Button } from "@/components/ui/button";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ExerciseTable from "../Table/ExerciseTable";

function exercises() {
  return (
    <div>
      <div className="flex justify-between px-3 items-center">
        <h3 className="text-3xl text-sky-900 font-bold">Exercises Management</h3>
        <Button variant="contained" endIcon={<AddIcon />} size="small" color="primary" className="py-2">ADD EXERCISES</Button>
      </div>

      <ExerciseTable />
    </div>
  );
}

export default exercises;
