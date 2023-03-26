import React from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main className="main">
        <div className="main__about-skills">
          <About />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
