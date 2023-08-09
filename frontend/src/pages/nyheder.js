import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ArticleForm from "../components/articleForm.js";
import { useArticlesContext } from "../hooks/useArticlesContext.js";
import ArticleDetails from "../components/ArticleDetails.js";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const Nyheder = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

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
    <Box
      sx={{
        mx: "20%",
      }}
    >
      <Grid container spacing={2} columns={100}>
        <Grid item xs={70}>
          {articles &&
            articles.map((article) => (
              <ArticleDetails key={article._id} article={article} />
            ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: "10%",
            }}
          >
            <Pagination
              page={page}
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/nyheder${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={25}>
          <ArticleForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nyheder;
