
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './hookes/RequireAuth'
import SignIn from './components/Login/SignIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase/parts/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
