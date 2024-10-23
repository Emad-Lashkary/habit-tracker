import { useState } from "react";
import styled from "styled-components";
import { Paper, Box, Typography, Button } from "@mui/material";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import HabitChart from "./HabitChart";
import { useHabits } from "../context/HabitContext";
import { FormatUnderlined } from "@mui/icons-material";

const StyledPaper = styled(Paper)`
  padding: 16px;
  margin-top: 16px;
  background-color: red;
`;

const CenteredBox = styled(Box)`
  text-align: center;
  margin: 16px 0;
`;

const Dashboard = () => {
  const {
    habits,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleCompletion,
    updateCompletion,
  } = useHabits();
  const [editingHabit, setEditingHabit] = useState(null);

  const handleEdit = (habit) => {
    setEditingHabit(habit);
  };

  const handleUpdate = (updatedHabit) => {
    updateHabit(updatedHabit);
    setEditingHabit(null);
  };

  const handleToggle = (id, completed) => {
    toggleCompletion(id, completed);
  };

  const handleUpdateCompletion = (id, completion) => {
    updateCompletion(id, completion);
  };

  return (
    <>
      <StyledPaper elevation={3}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "primary.dark",
            borderBottom: "1px solid",
            padding: "5px",
            margin: "0 30px",
          }}
        >
          Habit Tracker
        </Typography>
        <CenteredBox>
          <HabitForm
            onSubmit={addHabit}
            onUpdate={handleUpdate}
            initialData={editingHabit}
            isEditing={!!editingHabit}
          />
          {editingHabit && (
            <Button
              variant="outlined"
              onClick={() => setEditingHabit(null)}
              sx={{ mt: 2 }}
            >
              Cancel Edit
            </Button>
          )}
        </CenteredBox>
        <CenteredBox>
          <HabitList
            habits={habits}
            onDelete={deleteHabit}
            onEdit={handleEdit}
            onToggle={handleToggle}
            onUpdateCompletion={handleUpdateCompletion}
          />
        </CenteredBox>
        <CenteredBox>
          <HabitChart
            data={habits
              .filter((habit) => habit.completed)
              .map((habit) => ({
                name: habit.name,
                completed: habit.completion,
              }))}
          />
        </CenteredBox>
      </StyledPaper>
      <p
        style={{
          display: "inline-block",
          opacity: 0.7,
          marginLeft: "30px",
          padding: "0 10px 5px 10px ",
          borderBottom: "1px solid",
        }}
      >
        <b>©</b> Developed by Emad Lashkary
      </p>
    </>
  );
};

export default Dashboard;
