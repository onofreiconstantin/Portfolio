import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/header";
import Navbar from "./components/Navbar";
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
          <Experience />
        </div>
      </main>
    </div>
  );
}

export default App;
