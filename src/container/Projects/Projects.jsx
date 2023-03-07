import React from "react";
import "./Projects.scss";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";

import images from "../../components/constants/images";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);

  const darkmode = useSelector((state) => state.navbar.darkMode);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <section
      className={
        darkmode
          ? "app-dark-background app-projects section-padding"
          : "app-projects section-padding"
      }
    >
      <h1>My Projects</h1>
      <div className="app-projects-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="clip-card">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Clip Cards"
            subheader="Game"
          />
          <CardMedia
            component="img"
            height="194"
            image={images.logo}
            alt="clip card"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              this Clip card game was created with React
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="clip-card">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Clip Cards"
            subheader="Game"
          />
          <CardMedia
            component="img"
            height="194"
            image={images.logo}
            alt="clip card"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              this Clip card game was created with React
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="clip-card">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Clip Cards"
            subheader="Game"
          />
          <CardMedia
            component="img"
            height="194"
            image={images.logo}
            alt="clip card"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              this Clip card game was created with React
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="clip-card">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Clip Cards"
            subheader="Game"
          />
          <CardMedia
            component="img"
            height="194"
            image={images.logo}
            alt="clip card"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              this Clip card game was created with React
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam vero aliquid assumenda minus deserunt unde ex, eos,
                aspernatur aut veritatis officiis tempore. Dolore blanditiis
                quibusdam, tenetur id magni sed fugiat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
