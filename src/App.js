import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import DetailCoint from "./views/DetailCoin";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:coin" element={<DetailCoint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
