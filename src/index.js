import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BG from './background.js'
import Header from './header.js'




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div className='h-full'>
      <Header />
      <BG />
    </div>

  </>
);

