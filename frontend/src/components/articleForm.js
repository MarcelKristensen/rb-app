import { useState } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext.js";

const ArticleForm = () => {
  const { dispatch } = useArticlesContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyfields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = { title, text };

    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyfields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setText("");
      setEmptyfields([]);
      console.log("new article added:", json);
      dispatch({ type: "CREATE_ARTICLE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Tilføj ny artikel</h3>

      <label>Titel:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Tekst:</label>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={emptyFields.includes("text") ? "error" : ""}
      />

      <button>Tilføj artikel</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ArticleForm;
