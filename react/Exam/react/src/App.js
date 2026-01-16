import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import { Header } from './components/header/header.component';
import { Container2 } from './components/main_page/container2/container2.component';
import { Container3 } from './components/main_page/container3/container3.component';
import { Container4 } from './components/main_page/container4/container4.component';
import { Container5 } from './components/main_page/container5/container5.component';
import { Container6 } from './components/main_page/container6/container6.component';
import { Lover } from './components/lover/lover.component';
import { Registration } from './components/registration/registration.component'; 
import { Login } from './components/login/login.component';
import {GeneratorPage} from './components/generatorPage/generatorPage.component';

const MainPage = () => {
  return (
    <>
      <Header />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Lover/>
    </>
  );
};


const NotFoundPage = () => (
    <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>404</h1>
        <h2>Сторінку не знайдено</h2>
        <Link to="/">Повернутися на головну</Link>
    </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="/generator" element={<GeneratorPage />} />

        
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;