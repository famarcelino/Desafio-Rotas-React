import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Welcome from "./routes/Home/Welcome";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
