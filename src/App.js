
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './hookes/RequireAuth'
import SignIn from './components/Login/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='/dashboard/myorders' element={<MyOrders />}></Route>
          <Route path='/dashboard/addreview' element={<AddReview />}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
        </Route>


        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
