import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Habit Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Box my={4}>{children}</Box>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
