import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleGrid from "./components/ArticleGrid";
import ArticleCard from './components/ArticleCard';
>>>>>>> master

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("<TODO: insert api url here>")
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  const placeholderArticles = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="App">
      <Header />
      <ArticleGrid articles={placeholderArticles} />
      <Footer />
    </div>
  );
}

export default App;

