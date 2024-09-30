import React, { useEffect, useState } from 'react'
import './Navbar.css'
import faviconlg3 from '../img/faviconlg3.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import pb from '../lib/pocketbase'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [title, setTitle] = useState('');
  const [home, setHome] = useState('');
  const [menu, setMenu] = useState('');
  const [services, setServices] = useState('');
  const [contact, setContact] = useState('');

  const getTitle = () => {
    pb
    .collection('website_name')
    .getOne('ery6x627dvojngx') // Title
    .then((res) => setTitle(res));
  }
  useEffect(() => {
    getTitle();
  }, []);
  
  const getHome = () => {
    pb
    .collection('website_tabs')
    .getOne('c9zcvx3x9q1j9vt') // Home Tab
    .then((res) => setHome(res));
  }
  useEffect(() => {
    getHome();
  }, []);

  const getMenu = () => {
    pb
    .collection('website_tabs')
    .getOne('pwilokkhwsu2sgx') // Menu Tab
    .then((res) => setMenu(res));
  }
  useEffect(() => {
    getMenu();
  }, []);

  const getServices = () => {
    pb
    .collection('website_tabs')
    .getOne('imoymgr1kf0flbj') // Services Tab
    .then((res) => setServices(res));
  }
  useEffect(() => {
    getServices();
  }, []);

  const getContact = () => {
    pb
    .collection('website_tabs')
    .getOne('71rr954xasmc9ls') // Contact Tab
    .then((res) => setContact(res));
  }
  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <Link tabIndex='0' to='/' className='nav-title'><img className='logo-image' alt='Harris Kitchen Table website title' src={faviconlg3}></img>
          {title.websiteName}
        </Link>
        <div className='menu' onClick={() => setOpenDropdown(!openDropdown)}>
          <button className='dropdown' onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <ul onClick={() => setOpenDropdown(!openDropdown)} className={openDropdown ? 'open' : 'close'}>
          <li><NavLink tabIndex='0' to='/home' className='dropdown-links'>{home.tabName}</NavLink></li>
          <li><NavLink tabIndex='0' to='/menu' className='dropdown-links'>{menu.tabName}</NavLink></li>
          <li><NavLink tabIndex='0' to='/services' className='dropdown-links'>{services.tabName}</NavLink></li>
          <li><NavLink tabIndex='0' to='/contact' className='dropdown-links'>{contact.tabName}</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
