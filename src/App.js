import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import About from "./components/About";
import CodeEditor from "./components/CodeEditor";
import Mainpage from "./components/Mainpage";
import Thirdsection from "./components/Thirdsection";
import Fourthsection from "./components/Fourthsection";
import Fifthsection from "./components/Fifthsection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "documentation":
        return <Documentation />;
      case "about":
        return <About />;
      case "code-editor":
        return <CodeEditor />;
      default:
        return <Home />;
    }
  };

  const onNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
        <Mainpage />
        <Thirdsection />
        <Fourthsection />
        <Fifthsection />
      </main>
      <Footer />
    </>
  );
}

export default App;
