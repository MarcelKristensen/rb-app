import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import nyhedImg from "../images/nyhed/nyhed-1.png";

const SenesteNyheder = ({ article }) => {
  return (
    <Card sx={{ mx: "1%" }}>
      <CardActionArea>
        <CardMedia component="img" image={nyhedImg} alt="nyheds artikel" />
        <CardContent
          sx={{
            backgroundColor: "#2669A4",
            minHeight: "80px",
          }}
        >
          <Typography gutterBottom variant="latestNewsTitle" component="div">
            {article.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: "#2669A4",
        }}
      >
        <Typography variant="latestNewsDate">{article.createdAt}</Typography>
      </CardActions>
    </Card>
  );
};

export default SenesteNyheder;
