
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
import AddToProfile from './Pages/Dashboard/AddToProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import MyPortFolio from './Pages/MyPortFolio/MyPortFolio';
import Blogs from './Pages/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders';
import ManageAllProducts from './Pages/Dashboard/Admin/ManageAllProducts';
import AddAProduct from './Pages/Dashboard/Admin/AddAProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';

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
          {/* For normal user */}
          <Route path='/dashboard/myorders' element={<MyOrders />}></Route>
          <Route path='/dashboard/addreview' element={<AddReview />}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
          <Route path='/dashboard/myprofile/addtoprofile' element={<AddToProfile />}></Route>
          <Route path='/dashboard/myprofile/updateprofile' element={<UpdateProfile />}></Route>

          {/* For admin */}
          <Route path='/dashboard/manageorders' element={<ManageAllOrders />}></Route>
          <Route path='/dashboard/manageproducts' element={<ManageAllProducts />}></Route>
          <Route path='/dashboard/addproduct' element={<AddAProduct />}></Route>
          <Route path='/dashboard/makeadmin' element={<MakeAdmin />}></Route>

        </Route>
        <Route path='myportfolio' element={<MyPortFolio />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='aboutus' element={<AboutUs />}></Route>
        <Route path='contactus' element={<ContactUs />}></Route>


        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
