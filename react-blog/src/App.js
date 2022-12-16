import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogList from './pages/BlogList';
import BlogEkle from './pages/BlogEkle';
import BlogIstatistik from './pages/BlogIstatistik';
import BlogDetay from './pages/BlogDetay';
import BaseLayout from './layouts/BaseLayotu';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route index element={<BlogList />}/>
            <Route  path="blogekle" element={<BlogEkle />} />
            <Route path="blogistatistik" element={<BlogIstatistik />}/>
            <Route path='blogdetay/:id' element={<BlogDetay />} />
            <Route path='blogdetay'  element={<h1>Blog detay genel sayfa</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

//  const App = () =>  {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
