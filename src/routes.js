import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Rodape from "components/Rodape";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
