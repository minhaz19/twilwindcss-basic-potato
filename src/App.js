import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu =()=>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return()=>{
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu"  component={Menu}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
