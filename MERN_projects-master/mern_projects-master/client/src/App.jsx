import {BrowserRouter, Route, Routes}  from "react-router-dom";
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Service from './pages/Service';
import Logout from './pages/Logout';
import NavBar from './components/NavBar';
import Error from './pages/Error';
import Admin_lyout from './components/Layouts/Admin_lyout';
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminUpdate from './pages/AdminUpdate';
import AdminServices from './pages/AdminServices ';
import AdminHome from './pages/AdminHome';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Service' element={<Service />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/*' element={<Error />}/>

        <Route path='/admin' element={<Admin_lyout/>}>
          <Route path='adminUsers' element={<AdminUsers/>}/>
          <Route path='adminHome' element={<AdminHome/>}/>
          <Route path='adminContacts' element={<AdminContacts/>}/>
          <Route path='AdminServices' element={<AdminServices/>}/>
          <Route path='users/:id/edit' element={<AdminUpdate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
