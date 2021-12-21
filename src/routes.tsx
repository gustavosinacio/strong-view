import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";

import { App } from "./App";
import { FallbackPage } from "./pages/FallbackPage";
import { Home } from "./pages/Home/Home";
import { Testground } from "./pages/Testground";
import { Testgrounds } from "./pages/Testground";

export const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<div>about</div>} />
          <Route path="testgrounds" element={<Testgrounds />}>
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
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};
