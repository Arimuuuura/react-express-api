import React from 'react';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './app.scss';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
