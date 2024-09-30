import React, { useState, useEffect } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import pb from '../lib/pocketbase'

function Contact() {
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [hours, setHours] = useState('');

  const getContact = () => {
    pb
    .collection('contactpage')
    .getOne('rlx31dkh3pn3ttt')
    .then((res) => setContact(res))
  }
  useEffect(() => {
    getContact();
  }, []);

  const getPhone = () => {
    pb
    .collection('contactpage')
    .getOne('9bdrkkjhe2mesdn')
    .then((res) => setPhone(res))
  }
  useEffect(() => {
    getPhone();
  }, []);

  const getEmail = () => {
    pb
    .collection('contactpage')
    .getOne('v7bxnrxeyinoc8c')
    .then((res) => setEmail(res))
  }
  useEffect(() => {
    getEmail();
  }, []);

  const getLocation = () => {
    pb
    .collection('contactpage')
    .getOne('s60y9vpb06ayzke')
    .then((res) => setLocation(res))
  }
  useEffect(() => {
    getLocation();
  }, []);

  const getHours = () => {
    pb
    .collection('contactpage')
    .getOne('radrimn3ro8u2yd')
    .then((res) => setHours(res))
  }
  useEffect(() => {
    getHours();
  }, []);

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
          <h1 className='card-tab'>{contact.mainHeading}</h1>
      </div>

      <div className='flex-container'>
        <div className='contact-container'>
            <h2 className='page-subtitles'>{phone.subHeadings}
              <FontAwesomeIcon className='icons' icon={faPhone} />
            </h2>
              <p tabIndex='0' className='contact-text'>{phone.description}</p>
            <h2 className='page-subtitles'>{email.subHeadings}
              <FontAwesomeIcon className='icons' icon={faEnvelope} />
            </h2>
              <p tabIndex='0' className='contact-text'>{email.description}</p>
            <h2 className='page-subtitles'>{location.subHeadings}
              <FontAwesomeIcon className='icons' icon={faLocationDot} />
            </h2>
              <p tabIndex='0' className='contact-text'> {location.description}</p>
            <h2 className='page-subtitles'>{hours.subHeadings}
              <FontAwesomeIcon className='icons' icon={faClock} />
            </h2>
              <p tabIndex='0' className='contact-text'>{hours.description}</p>
        </div>
      </div>

      {/* Embedded Google Maps */}
      <div className='flex-container'>
        <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195656.61280544702!2d-83.15563578702172!3d39.98309783381064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1726266273787!5m2!1sen!2sus" width="600" height="550"></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
