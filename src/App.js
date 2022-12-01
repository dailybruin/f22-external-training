import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Graphics from "./components/Graphics";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
          <Header />
          <Graphics text="Graphic" graphic='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/thumbs-up-sign_1f44d.png'/>
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
