// src/components/UserProfile.jsx
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved", profile);
  };

  return (
    <Paper elevation={2} sx={{ p: 4, mt: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Profile
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save Profile
        </Button>
      </Box>
    </Paper>
  );
};

export default UserProfile;
