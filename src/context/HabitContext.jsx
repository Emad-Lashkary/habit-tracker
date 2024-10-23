import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const HabitContext = createContext();

export const useHabits = () => useContext(HabitContext);

const initialHabits = [
  {
    id: 1,
    name: "Exercise",
    completed: true,
    completion: Math.floor(Math.random() * 10),
  },
  {
    id: 2,
    name: "Read a Book",
    completed: true,
    completion: Math.floor(Math.random() * 10),
  },
  {
    id: 3,
    name: "Meditate",
    completed: true,
    completion: Math.floor(Math.random() * 10),
  },
  {
    id: 4,
    name: "Cook a Meal",
    completed: true,
    completion: Math.floor(Math.random() * 10),
  },
  {
    id: 5,
    name: "Learn a New Skill",
    completed: true,
    completion: Math.floor(Math.random() * 11),
  },
];

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(initialHabits);

  const addHabit = (habit) => {
    const newHabit = {
      ...habit,
      id: habits.length + 1,
      completed: false,
      completion: 0,
    };
    setHabits([...habits, newHabit]);
  };

  const updateHabit = (updatedHabit) => {
    setHabits(
      habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggleCompletion = (id, completed) => {
    setHabits(
      habits.map((habit) => (habit.id === id ? { ...habit, completed } : habit))
    );
  };

  const updateCompletion = (id, completion) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completion } : habit
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        updateHabit,
        deleteHabit,
        toggleCompletion,
        updateCompletion,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

HabitProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
