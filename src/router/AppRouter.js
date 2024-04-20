import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Home from "../pages/home/Home"
import Contact from '../pages/contact/Contact';
import Blogs from '../pages/blogs/Blogs';
import BlogDetails from '../pages/blog-details/BlogDetails';
import BlogWriter from '../pages/blog-writer/BlogWriter';
import BlogPreview from '../pages/blog-writer/BlogPreview';
// import About from '../pages/about/About';

function AppRouter() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='login' element="hello login page"></Route>
        <Route path='about' element=""></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path=":slug" element={<BlogDetails/>}></Route>
        <Route path='blog-writer' element={<BlogWriter/>}></Route>
        <Route path='preview' element={<BlogPreview/>}></Route>
        <Route path='*' element="Not found"></Route>
    </Routes>
  )
}

export default AppRouter
