import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Nyhed1 from "../images/nyhed/nyhed-1.png";

import { useAuthContext } from "../hooks/useAuthContext.js";


const ArticleDetails = ({ article }) => {
  const { dispatch } = useArticlesContext();
<<<<<<< HEAD
=======
  const { user } = useAuthContext()

>>>>>>> 7681ce7844c443c0d096ce472a080267e34b9cf1
  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch("/api/articles/" + article._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ARTICLE", payload: json });
    }
  };

  return (
    <Card sx={{ maxWidth: 600, my: "5%", display: "flex" }}>
      <CardMedia
        sx={{ width: 225, alignItems: "center" }}
        component="img"
        image={Nyhed1}
        alt="article"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            backgroundColor: "#ffffff",
            minHeight: "80px",
          }}
        >
          <Typography variant="h3">
            <Link href="/" underline="hover" color="inherit">
              {article.title}
            </Link>
          </Typography>
          <Typography>
            <Link href="/" underline="hover" color="inherit">
              {article.text}
            </Link>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ArticleDetails;
