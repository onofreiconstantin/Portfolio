import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
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
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
