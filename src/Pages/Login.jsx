import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import {
  useLoginMutation,
} from "../Slices/AuthSlice/AuthInjection";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "./SnackbarProvider";

const Login = () => {
  const [formValues, setFormValues] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { showSnackbar } = useSnackbar();


  const validate = () => {
    const newErrors = {};
    if (!formValues.name) {
      newErrors.name = "Name is required.";
    } else if (formValues.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 3) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      showSnackbar("Please fix the form errors.", "error");
      return;
    }

    const res = await login(formValues).unwrap();
    if(res)
    {
            showSnackbar("Please fix the form errors.", "error");
    }

  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "#f4f4f9" }}
    >
      <Grid item xs={11} sm={8} md={4}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
          >
            Login
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 3 }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoginLoading}
            sx={{
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            {isLoginLoading ? "Logging in..." : "Submit"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
