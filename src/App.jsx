import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
