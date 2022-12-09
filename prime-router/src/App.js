
import Hakkimizda from "./pages/Hakkimizda";
import Anasayfa from "./pages/Anasayfa";
import Iletisim from "./pages/Iletisim";
import DemoLayout from "./components/layouts/DemoLayout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="grid" style={{padding:30}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DemoLayout/>}>
              <Route path="/" element={<Anasayfa />} />
              <Route path="/hakkimizda" element={<Hakkimizda />}></Route>
              <Route path="/iletisim" element={<Iletisim/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
