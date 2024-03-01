import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogsDetail from "./components/BlogsDetail";
import LessonsDetail from "./components/LessonsDetail";
import Home from "./components/Home";
import ProgramsDetail from "./components/ProgramsDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/blogs" Component={BlogsDetail} />
          <Route exact path="/lessons" Component={LessonsDetail} />
          <Route exact path="/programs" Component={ProgramsDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
