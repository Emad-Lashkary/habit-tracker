import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const HabitChart = ({ data }) => {
  // Temporary default data for testing
  const defaultData = [
    { name: "Habit 1", completed: 20 },
    { name: "Habit 2", completed: 50 },
    { name: "Habit 3", completed: 75 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data.length ? data : defaultData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#9575cd" />
      </BarChart>
    </ResponsiveContainer>
  );
};

HabitChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HabitChart;
