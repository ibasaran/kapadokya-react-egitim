// import Hakkimizda from "./pages/Hakkimizda";
// import Anasayfa from "./pages/eskisayfalar/Anasayfa";
// import Iletisim from "./pages/Iletisim";
// import DemoLayout from "./components/layouts/DemoLayout";
import BaseLayout from "./components/layouts/BaseLayout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gorevler from "./pages/Gorevler";
import GorevEkle from "./pages/GorevEkle";
import Hakkimizda from "./pages/Hakkimizda";
import Pano from "./pages/Pano";
import Login from "./pages/Login";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout/>}>
              <Route path="/" element={<Pano />} />
              <Route path="/gorevler" element={<Gorevler />}></Route>
              <Route path="/gorevekle" element={<GorevEkle/>}></Route>
              <Route path="/hakkimizda" element={<Hakkimizda/>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
