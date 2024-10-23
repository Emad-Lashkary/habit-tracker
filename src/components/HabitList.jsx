import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Slider,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const HabitList = ({
  habits,
  onDelete,
  onEdit,
  onToggle,
  onUpdateCompletion,
}) => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {habits.map((habit) => (
        <ListItem
          key={habit.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            mb: 2,
            p: 2,
            bgcolor: "background.default",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: { xs: "100%", sm: "auto" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Checkbox
              checked={habit.completed}
              onChange={() => onToggle(habit.id, !habit.completed)}
              sx={{ mr: 1 }}
            />
            <ListItemText primary={habit.name} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Slider
              value={habit.completion}
              onChange={(event, newValue) =>
                onUpdateCompletion(habit.id, newValue)
              }
              aria-labelledby="completion-slider"
              min={0}
              max={10}
              step={1}
              sx={{
                width: { xs: "100%", sm: "200px" },
                mx: { xs: 0, sm: "20px" },
              }}
            />
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => onEdit(habit)}
              sx={{ mt: { xs: 1, sm: 0 }, ml: 1 }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(habit.id)}
              sx={{ mt: { xs: 1, sm: 0 }, ml: 1 }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default HabitList;
