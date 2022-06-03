import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';
import Skills from './pages/Skills';
import './index.css';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/Contact' element = {<Contact/>}></Route>
      <Route path = '/Projects' element = {<Projects/>}></Route>
      <Route path = '/Skills' element = {<Skills/>}></Route>
      <Route path='*' element = {<Error404/>}></Route>
    </Routes>

  </BrowserRouter>
);
