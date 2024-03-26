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

import Navbar from "./components/Navbar";

import FullBlog from "./components/Details/FullBlog";
import SummerCampDetail from "./components/Details/SummerCampDetail";

import SignInDialog from "./apps/account/components/SignInDialog";
import PrivateRoutes from "./apps/account/components/PrivateRoute";
import Login from "./apps/account/components/Login";
import SummerCampDetail from "./components/Details/SummerCampDetail";

const App = () => {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/blogs" Component={BlogsDetail} />
              <Route exact path="/programs" Component={ProgramsDetail} />
              <Route
                exact
                path="/courses/book/:bookId"
                element={
                  <PrivateRoutes>
                    <Book />
                  </PrivateRoutes>
                }
              />
              {/* <Route element={<PrivateRoutes />}>
                <Route exact path="/courses" Component={CoursesDetail} />
              </Route> */}
              <Route
                path="/courses"
                element={
                  <PrivateRoutes>
                    <CoursesDetail />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/summercamp"
                element={
                  <PrivateRoutes>
                    <SummerCampDetail />
                  </PrivateRoutes>
                }
              />
              <Route
                exact
                path="/courses/book/:bookId/chapter/:chapternumber"
                Component={Chapter}
              />

              <Route exact path="/book/:bookId/checkout" Component={Checkout} />

              <Route exact path="blogs/fullBlog" Component={FullBlog} />
              <Route exact path="/login" Component={Login} />

              <Route
                exact
                path="/book/:bookId/checkout/learn"
                Component={LearnBook}
              />
              <Route exact path="/camp" Component={SummerCampDetail} />
            </Routes>

            <SignInDialog />
          </BrowserRouter>
        </div>
      </UserAuthContextProvider>
    </Provider>
  );
};

export default App;
