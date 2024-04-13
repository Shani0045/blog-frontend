import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Home from "../pages/home/Home"
import Contact from '../pages/contact/Contact';
import Blogs from '../pages/blogs/Blogs';
import PostDetails from '../pages/post-details/PostDetails';
// import Dummy from '../pages/dummy/Dummy';
// import About from '../pages/about/About';

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element="hello login page"></Route>
        <Route path='about' element=""></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element="Not found"></Route>
        <Route path='post-details' element={<PostDetails/>}></Route>
    </Routes>
  )
}

export default AppRouter