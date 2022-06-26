import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog/Blog';
import Header from './components/pages/Home/Header/Header';
import Home from './components/pages/Home/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>
     </Routes>
    </div>
  );
}

export default App;
