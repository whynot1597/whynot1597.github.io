import React, { useEffect, useState } from "react";
import { GitHub, LinkedIn, Description, LocationOn } from "@material-ui/icons";
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
} from "@material-ui/core";
import ListItemLink from "./ListItemLink";

export default function ProfileDrawer(props) {
  const classes = props.classes;
  const [avatarURL, setAvatarURL] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [htmlURL, setHTMLURL] = useState("");
  const [login, setLogin] = useState("");
  const [blog, setBlog] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/whynot1597", {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setAvatarURL(response.avatar_url);
        setUsername(response.name);
        setBio(response.bio);
        setHTMLURL(response.html_url);
        setLogin(response.login);
        setBlog(response.blog);
        setLocation(response.location);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem key="avatarURL">
            <Avatar src={avatarURL} className={classes.logo} />
          </ListItem>
        </List>
        <ListItem key="name">
          <Typography variant="h3">{username}</Typography>
        </ListItem>
        <ListItem key="bio">
          <Typography variant="h4">{bio}</Typography>
        </ListItem>
        <ListItemLink button key="github" href={htmlURL}>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <ListItemText
            primary={"@" + login}
            primaryTypographyProps={{ variant: "button" }}
          />
        </ListItemLink>
        <ListItemLink button key="linkedin" href={blog}>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemText
            primary="LinkedIn Profile"
            primaryTypographyProps={{ variant: "button" }}
          />
        </ListItemLink>
        <ListItemLink
          button
          key="resume"
          href="https://github.com/whynot1597/College-Portfolio/blob/909bef77f75fde4c38bfbc58eb8bb4025245207f/Jeremy_Goldberg_Resume.pdf"
        >
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText
            primary="Resume"
            primaryTypographyProps={{ variant: "button" }}
          />
        </ListItemLink>
        <ListItem key="location">
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText
            primary={location}
            primaryTypographyProps={{ variant: "button" }}
          />
        </ListItem>
      </Drawer>
    </div>
  );
}
