// AddArticle.js
import React, { useState } from "react";
import axios from "axios";

const AddArticle = ({ onAddArticle }) => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [error, setError] = useState("");

  const handleAddArticle = () => {
    if (!articleTitle || !articleContent) {
      setError("Uzupełnij pola Tytułu oraz Treści artykułu.");
      return;
    }

    const newArticle = {
      title: articleTitle,
      content: articleContent,
    };

    axios({
      method: "post",
      url: "http://localhost:3000/api/article/create",
      data: newArticle,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        onAddArticle();
      })
      .catch((error) => console.log(error));

    setArticleTitle("");
    setArticleContent("");
    setError("");
  };

  return (
    <div className="form1">
      <h2>Dodaj Artykuł</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        className="articleTitle"
        type="text"
        value={articleTitle}
        onChange={(e) => setArticleTitle(e.target.value)}
        placeholder="Wpisz tytuł artykułu ..."
      />
      <textarea
        className="articleText"
        value={articleContent}
        onChange={(e) => setArticleContent(e.target.value)}
        placeholder="Wprowadź treść artykułu ..."
        rows="10"
        cols="50"
        maxLength="5000"
      />
      <button className="btn1" onClick={handleAddArticle}>
        Dodaj artykuł
      </button>
    </div>
  );
};

export default AddArticle;
