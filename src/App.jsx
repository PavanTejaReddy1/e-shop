import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";

const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;