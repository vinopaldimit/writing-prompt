import React from 'react';
import './styling/style.css';
import './styling/layout.css';
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
