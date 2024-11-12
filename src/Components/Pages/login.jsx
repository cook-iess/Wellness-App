import React from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent } from "../ui/card";
import logo from "../../assets/logo.png";
import { useState } from "react";

const login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-secondary_color to-white">
      <Card className="w-[40%] py-14 bg-white/30 rounded-3xl ">
        <CardContent>
          <div className="flex justify-center items-center mb-6">
            <img src={logo} alt="Logo" className="w-20 mb-2" />
            <h1 className="text-2xl font-semibold text-sky-800">WellUP</h1>
          </div>

          <form className="flex flex-col space-y-4 px-9 pt-1">
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                },
              }}
              label="Email"
              variant="outlined"
              fullWidth
              required
              className="bg-white/30"
            />
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                },
              }}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              className="bg-white/30"
            />
            <div className="pt-1"></div>

            <button
              type="button"
              onClick={handleClick}
              className="bg-primary_color text-white p-2 rounded w-56 hover:bg-sky-950 transition duration-500 mx-auto flex justify-center items-center"
            >
              {isLoading ? (
                <svg
                  className="spinner w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M4 12a8 8 0 0116 0" />
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default login;
