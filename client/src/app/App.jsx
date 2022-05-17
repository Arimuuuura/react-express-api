import React from 'react';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/main/Main';

export const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
