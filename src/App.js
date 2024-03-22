import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogsDetail from "./components/Details/BlogsDetail";
import CoursesDetail from "./components/Details/CoursesDetail";
import Home from "./components/Home";
import ProgramsDetail from "./components/Details/ProgramsDetail";
import Book from "./components/Book";
import Chapter from "./components/Details/Chapter";
import { UserAuthContextProvider } from "./components/Auth/UserAuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import Checkout from "./components/Payment/Checkout";
import LearnBook from "./components/LearnBook/LearnBook";
import FullBlog from "./components/Details/FullBlog";

const App = () => {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/blogs" Component={BlogsDetail} />
              <Route exact path="/courses" Component={CoursesDetail} />
              <Route exact path="/programs" Component={ProgramsDetail} />
              <Route exact path="/courses/book/:bookId" Component={Book} />
              <Route exact path="/book/:bookId/checkout" Component={Checkout} />
              <Route
                exact
                path="/book/:bookId/checkout/learn"
                Component={LearnBook}
              />
              <Route exact path="blogs/fullBlog" Component={FullBlog} />
              <Route
                exact
                path="/courses/book/:bookId/chapter/:chapternumber"
                Component={Chapter}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </UserAuthContextProvider>
    </Provider>
  );
};

export default App;
