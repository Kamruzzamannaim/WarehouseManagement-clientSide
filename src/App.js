import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddNewItem from './components/AddNewItem/AddNewItem';
import Manage from './components/Manage/Manage';
import MyItem from './components/Myitem/MyItem';
import NoPageFound from './components/NoPageFound/NoPageFound';
import Blog from './components/pages/Blog/Blog';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Home/Header/Header';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import Registration from './components/pages/Login/Registration/Registration';
import RequiredAuth from './components/pages/Login/RequiredAuth/RequiredAuth';
import Product from './components/pages/Product/Product';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     {/* <Route path='/products/:id' ></Route> */}
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/registration' element={<Registration></Registration>}></Route>
     <Route path='/products/:id' element={<RequiredAuth><Product></Product></RequiredAuth>}></Route>
     <Route path='/manage' element={<RequiredAuth><Manage></Manage></RequiredAuth>}></Route>
     <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
     <Route path='/myItem' element={<MyItem></MyItem>}></Route>
     <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
     </Routes>
     
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
