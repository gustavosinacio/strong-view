import { useContext, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { UserContext } from "./contexts/user";

import { FallbackPage } from "./pages/FallbackPage";
import { Home } from "./pages/Home/Home";
import { Testground } from "./pages/Testground";
import { Testgrounds } from "./pages/Testground";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { Header } from "./components/Header";

export const Router = () => {
  const { user } = useContext(UserContext);
  const auth = getAuth();
  const isLoggedIn = user.email;

  useEffect(() => {
    console.log(982103, { isLoggedIn });
  }, [isLoggedIn]);

  useEffect(() => {
    auth.currentUser?.reload();
  }, [auth.currentUser]);

  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>
      {isLoggedIn ? (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<div>about</div>} />
            <Route path="testgrounds" element={<Testgrounds />}>
              <Route
                index
                element={
                  <div>
                    <h2>Select a testground</h2>
                  </div>
                }
              />
              <Route path=":groundId" element={<Testground />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </ErrorBoundary>
  );
};
