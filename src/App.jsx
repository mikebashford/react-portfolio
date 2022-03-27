import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
