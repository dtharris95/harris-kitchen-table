import './App.css'
import pb from './lib/pocketbase'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  // const [greeting, setGreeting] = useState('');
  // const getGreeting = () => {
  //     pb
  //     .collection('greeting')
  //     .getFullList()
  //     .then((response) => setGreeting(response[0]));
  // }
  // useEffect(() => {
  //   getGreeting();
  // }, []);

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
