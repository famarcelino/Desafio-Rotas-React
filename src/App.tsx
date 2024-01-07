import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Welcome from "./routes/Home/Welcome";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Books from "./routes/Products/Books";
import About from "./routes/About";
import Products from "./routes/Products";
import NotFound from "./routes/NotFound";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Navigate to="computers" />} />
          <Route path="computers" element={<Computers />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
