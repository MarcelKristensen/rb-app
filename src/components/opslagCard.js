import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Stack } from "@mui/material";
import {
  CommentSharp,
  ReplyAllSharp,
  ReplySharp,
  ShareSharp,
  ThumbUpSharp,
} from "@mui/icons-material";

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

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        mb: "10%",
        boxShadow: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          mx: "4%",
        }}
      >
        <CardHeader
          avatar={
            <Avatar alt="RB Logo" src={require("../images/RBLogo.png")} />
          }
          title="RB 1906"
          subheader={props.date}
        ></CardHeader>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.alt}
          height={180}
        />
        <CardContent
          sx={{
            p: 0,
          }}
        >
          <Typography fontSize={18} mb="2%">
            {props.description}
          </Typography>
        </CardContent>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>{props.contentTitle}</h3>
          <Typography paragraph>{props.contentText1}</Typography>
          <Typography paragraph>{props.contentText2}</Typography>
          <Typography paragraph>{props.contentText3}</Typography>
          <Typography paragraph>{props.contentText4}</Typography>
          <Typography paragraph>{props.contentText5}</Typography>
          <Typography paragraph>{props.contentText6}</Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpSharp />
        </IconButton>
        <IconButton aria-label="share">
          <ReplySharp />
        </IconButton>
        <IconButton aria-label="share">
          <CommentSharp />
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
    </Card>
  );
}
