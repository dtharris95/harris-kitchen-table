import React, { useEffect, useState } from 'react'
import '../App.css'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import lasagna from '../img/lasagna.jpg'
import ribeye from '../img/ribeye.jpg'
import veggieburger from '../img/veggieburger.jpg'
import happyHourimg from '../img/happyHourimg.jpg'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'
import HKTBrandLogo from '../img/HKTBrandLogo.jpg'
import pb from '../lib/pocketbase'

function Home() {
  const [welcome, setWelcome] = useState('');
  const [specials, setSpecials] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [commitment, setCommitment] = useState('');
  const [happyHour, setHappyHour] = useState('');
  const [diningSpecial, setDiningSpecial] = useState('');
  const [drinkSpecial, setDrinkSpecial] = useState('');

const getWelcome = () => {
  pb
  .collection('homepage')
  .getOne('9g91ompkk1zx4oy')
  .then((res) => setWelcome(res));
}
useEffect(() => {
  getWelcome();
}, []);

const getSpecials = () => {
  pb
  .collection('homepage')
  .getOne('mm6rxy5u0ru7z12')
  .then((res) => setSpecials(res));
}
useEffect(() => {
  getSpecials();
}, []);

const getAboutUs = () => {
  pb
  .collection('homepage')
  .getOne('iog8qkbhezablun')
  .then((res) => setAboutUs(res));
}
useEffect(() => {
  getAboutUs();
}, []);

const getCommitment = () => {
  pb
  .collection('homepage')
  .getOne('8muw5x8pfbwblol')
  .then((res) => setCommitment(res));
}
useEffect(() => {
  getCommitment();
}, []);

const getHappyHour = () => {
  pb
  .collection('homepage')
  .getOne('hsumpj5pl4ry2an')
  .then((res) => setHappyHour(res));
}
useEffect(() => {
  getHappyHour();
}, []);

const getDiningSpecial = () => {
  pb
  .collection('homepage')
  .getOne('ljdek4jiv0zvaux')
  .then((res) => setDiningSpecial(res));
}
useEffect(() => {
  getDiningSpecial();
}, []);

const getDrinkSpecial = () => {
  pb
  .collection('homepage')
  .getOne('mpawknz7kb2xy4m')
  .then((res) => setDrinkSpecial(res));
}
useEffect(() => {
  getDrinkSpecial();
}, []);
  
  return (
    <>
      <div className='main-container'>
        <div className='flex-container'>
          <h1 className='card-tab'>{welcome.mainHeading}</h1>
        </div>
        
        <div className='carousel-container'>
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <img src={lasagna} alt="Lasagna dish"/>
            </SplideSlide>
            <SplideSlide>
              <img src={ribeye} alt="Ribeye Steak dish"/>
            </SplideSlide>
            <SplideSlide>
              <img src={veggieburger} alt="Vegetarian burger dish"/>
            </SplideSlide>
          </Splide>
        </div>

          <div className='flex-container'>
          <div className='story-container'>
            {/* About Us */}
            <h1 tabIndex='0' className='page-subtitles'>{aboutUs.subHeadings}</h1>
            <h2 className='home-paragraph'>{aboutUs.description}
              
            </h2>
            <img className='home-image' alt='Harris Kitchen Table Logo' src={HKTBrandLogo}></img>
            {/* Commitment */}
            <h1 tabIndex='0' className='page-subtitles'>{commitment.subHeadings}</h1>
            <h2 className='home-paragraph'>{commitment.description}</h2>

            <img tabIndex='0' className='home-image' alt='Columbus Skyline' src={columbusSkylineBanner}></img>
          </div>
        </div>

        <div className='flex-container'>
          {/* Specials */}
          <h1 className='card-tab'>{specials.mainHeading}</h1>
        </div>

        <div className='flex-container'>
            <div className='specials-container'>
              <img className='happy-hour-image' alt='Sign that says Happy Hour' src={happyHourimg}></img>
              {/* Happy Hour */}
              <h1 tabIndex='0' className='page-subtitles'>{happyHour.subHeadings}</h1>
              {/* Dining Specials */}
              <h1 className='home-text'>{diningSpecial.subHeadings}</h1>
              <h2>{diningSpecial.description}</h2>
              {/* Drink Specials */}
              <h1 className='home-text'>{drinkSpecial.subHeadings}</h1>
              <h2>{drinkSpecial.description}</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home