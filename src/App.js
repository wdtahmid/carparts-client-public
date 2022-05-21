
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
