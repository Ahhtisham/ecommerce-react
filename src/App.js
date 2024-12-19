import './App.css';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';
//Component//
import Header from './component/Header';
import Footer from './component/Footer'
import Home from './component/Home';
//pages//
import Additem from './pages/Additem';
import Card from './pages/Card';
function App() {

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='/card/:id' element={<Card />} />
            <Route path='/additem' element={<Additem />} />
          </Route>
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;