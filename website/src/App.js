import React from 'react';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header></Header>
       <hr></hr>
      <Body></Body>
       <hr></hr>
       {/* <Footer></Footer> */}
      </header>
    </div>
  );
}

export default App;
