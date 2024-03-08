import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogsDetail from "./components/Details/BlogsDetail";
import LessonsDetail from "./components/Details/LessonsDetail";
import Home from "./components/Home";
import ProgramsDetail from "./components/Details/ProgramsDetail";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/blogs" Component={BlogsDetail} />
          <Route exact path="/lessons" Component={LessonsDetail} />
          <Route exact path="/programs" Component={ProgramsDetail} />
          <Route exact path="/lessons/book/:id" Component={Book} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
