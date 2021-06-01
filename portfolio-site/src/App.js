import ProfileDrawer from "./ProfileDrawer";
import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import StarredProjects from "./StarredProjects";
import { CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

//eslint-disable-next-line
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
  },
  card: {
    maxWidth: theme.spacing(40),
    color: theme.palette.text.primary,
    background:
      "linear-gradient(315deg, hsla(135, 100%, 50%, 1) 0%, hsla(278, 98%, 49%, 1) 100%)",
  },

  cardText: {
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    fontSize: 15,
  },
  drawer: {
    width: theme.spacing(50),
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(50),
    background: theme.palette.action.active,
  },
  logo: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  background: {
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <ProfileDrawer classes={classes} />
        <StarredProjects classes={classes} />
      </div>
    </ThemeProvider>
  );
}

export default App;
