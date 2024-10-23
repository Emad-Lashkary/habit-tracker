import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background-color: var(--color-primary-50);
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

const HabitForm = ({ onSubmit, initialData, onUpdate, isEditing }) => {
  const [habit, setHabit] = useState(initialData || { name: "" });

  useEffect(() => {
    if (initialData) {
      setHabit(initialData);
    } else {
      setHabit({ name: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate(habit);
    } else {
      onSubmit(habit);
      setHabit({ name: "" });
    }
  };

  return (
    <StyledBox component="form" onSubmit={handleSubmit}>
      <TextField
        label="Habit Name"
        name="name"
        value={habit.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        sx={{
          bgcolor: "white",
        }}
      />

      <Button type="submit" variant="contained" color="primary">
        {isEditing ? "Update Habit" : "Save Habit"}
      </Button>
    </StyledBox>
  );
};

export default HabitForm;
