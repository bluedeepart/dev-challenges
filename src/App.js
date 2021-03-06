import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage";
import Button from "./components/Button";
import { MdMenu } from "react-icons/md";
import InputPage from "./pages/InputPage";

function App() {

  const menuOpen = () => {
    const sidebar = document.querySelector('.sidebar');
    if(sidebar.style.left === '0px'){
      sidebar.style.left = '-100%'
    }else{
      sidebar.style.left = '0px'
    }
  }

  return (
    <HashRouter>
      <Sidebar />
      <Button variant='text' id="menu" onClick={menuOpen}><MdMenu style={{width: '24px', height: '34px'}} /></Button>
      <main>
        <div className="body">
        <Routes>
          <Route path="/dev-challenges/" element={<Home />} />
          <Route path="/dev-challenges/buttons" element={<ButtonPage />} />
          <Route path="/dev-challenges/inputs" element={<InputPage />} />

          {/* 404 */}
          <Route path="/dev-challenges/*" element={<NotFound />} />
        </Routes>
        </div>

        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
