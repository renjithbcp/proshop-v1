import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
       <main className='py3'> 
        <Container> 
         <div>Welcome to proshop </div>
         </Container> 
        </main> 
        <Footer />  
      </>


  )
}

export default App
