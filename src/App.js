import React from 'react';
import './style.css';
import './layout.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    </div>
  );
}

export default App;
