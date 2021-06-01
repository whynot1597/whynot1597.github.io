import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "@material-ui/icons";
import FolderIcon from "@material-ui/icons/Folder";
import React from "react";
import { motion } from "framer-motion";

function ProjectCard(props) {
  const classes = props.classes;

  const handleButton = (e) => {
    window.open(props.url, "_blank");
  };

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <CardActionArea onClick={handleButton}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<FolderIcon fontSize="large" />}
            title={props.name}
            titleTypographyProps={{ variant: "h4" }}
          />
          <Typography
            className={classes.cardText}
            color="textPrimary"
            gutterBottom
            variant="body2"
          >
            {props.description}
          </Typography>
          <CardActions>
            <IconButton aria-label="open repo">
              <Link color="secondary" />
            </IconButton>
          </CardActions>
        </Card>
      </CardActionArea>
    </motion.div>
  );
}

export default ProjectCard;
