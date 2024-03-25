import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

