import React, { useEffect, useState } from 'react'
import '../App.css'
import cookingset from '../img/cookingset.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBowlFood, faKitchenSet, faUtensils } from '@fortawesome/free-solid-svg-icons'
import pb from '../lib/pocketbase'

function Services() {
  const [services, setServices] = useState('');
  const [personalChef, setPersonalChef] = useState('');
  const [mealPrep, setMealPrep] = useState('');
  const [catering, setCatering] = useState('');
  const [cooking, setCooking] = useState('');

  const getServices = () => {
    pb
    .collection('servicespage')
    .getOne('ix9mnl0vjdz010e')
    .then((res) => setServices(res))
  }
  useEffect(() => {
    getServices();
  }, []);

  const getPersonalChef = () => {
    pb
    .collection('servicespage')
    .getOne('ur28pjah357m5u5')
    .then((res) => setPersonalChef(res))
  }
  useEffect(() => {
    getPersonalChef();
  }, []);

  const getMealPrep = () => {
    pb
    .collection('servicespage')
    .getOne('z36d42hp405wkbe')
    .then((res) => setMealPrep(res))
  }
  useEffect(() => {
    getMealPrep();
  }, []);

  const getCatering = () => {
    pb
    .collection('servicespage')
    .getOne('81ysmfof1zywl1q')
    .then((res) => setCatering(res))
  }
  useEffect(() => {
    getCatering();
  }, []);

  const getCooking = () => {
    pb
    .collection('servicespage')
    .getOne('y6m4whbkwmfzd21')
    .then((res) => setCooking(res))
  }
  useEffect(() => {
    getCooking();
  }, []);


  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
        {/* Services */}
        <h1 tabIndex='0' className='card-tab'>{services.mainHeading}</h1>
      </div>

      <div className='flex-container'>
          <img className='cooking-image' alt='Cooking Set' src={cookingset}></img>
      </div>

      <div className='flex-container'>
        <div className='services-container'>
          <h1 className='page-subtitles-services'>{personalChef.subHeadings}
              <FontAwesomeIcon className='icons-services'  icon={faKitchenSet}/>
          </h1>
            <h2 tabIndex='0' className='services-description'>{personalChef.description}</h2>

          <h1 className='page-subtitles'>{mealPrep.subHeadings}
              <FontAwesomeIcon className='icons' icon={faUtensils} />
          </h1>
            <h2 tabIndex='0' className='services-description'>{mealPrep.description}</h2>

          <h1 className='page-subtitles'>{catering.subHeadings}
              <FontAwesomeIcon className='icons' icon={faBowlFood} />
          </h1>
            <h2 tabIndex='0' className='services-description'>{catering.description}</h2>
          
          <h1 className='page-subtitles-services'>{cooking.subHeadings}
              <FontAwesomeIcon className='icons-services' icon={faBookOpen} />
          </h1>
            <h2 tabIndex='0' className='services-description'>{cooking.description}</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services