import { useEffect, useState } from "react";

const Test = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const json = await response.json();

      if (response.ok) {
        setArticles(json);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Test</h2>
      {articles &&
        articles.map((article) => <p key={article._id}>{article.title}</p>)}
    </div>
  );
};

export default Test;
