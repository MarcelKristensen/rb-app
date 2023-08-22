import { useEffect } from "react";
import SenesteNyheder from "../components/senesteNyheder";
import { useArticlesContext } from "../hooks/useArticlesContext";
import { Box } from "@mui/material";

const Test = () => {
  const { articles, dispatch } = useArticlesContext();
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTICLES", payload: json });
      }
    };

    fetchArticles();
  }, []);
  return (
    <>
      <Box sx={{ mx: "20%" }}>
        <h1>Seneste nyheder</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: "20%",
        }}
      >
        {articles &&
          articles.map((article) => (
            <SenesteNyheder key={article._id} article={article} />
          ))}
      </Box>
    </>
  );
};

export default Test;
