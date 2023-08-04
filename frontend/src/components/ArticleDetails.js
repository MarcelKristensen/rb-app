import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Nyhed1 from "../images/nyhed/nyhed-1.png";

const ArticleDetails = ({ article }) => {
  const { dispatch } = useArticlesContext();

  const handleClick = async () => {
    const response = await fetch("/api/articles/" + article._id, {
      method: "DELETE",
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
        </CardContent>
      </Box>
    </Card>
  );
};

export default ArticleDetails;
