import React, { useEffect, useState } from 'react'
import '../App.css'
import pb from '../lib/pocketbase'

function Menu() {
  const [menuHeading, setMenuHeading] = useState('');
  const [appHeading, setAppHeading] = useState('');
  const [entreeHeading, setEntreeHeading] = useState('');
  const [sideHeading, setSideHeading] = useState('');
  const [drinkHeading, setDrinkHeading] = useState('');
  const [appetizer, setAppetizer] = useState([]);
  const [entree, setEntree] = useState([]);
  const [side, setSide] = useState([]);
  const [drink, setDrink] = useState([]);
  const [softDrinkHeading, setSoftDrinkHeading] = useState('');
  const [beerHeading, setBeerHeading] = useState('');
  const [alcohol, setAlcohol] = useState([]);

  const getMenuHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('7ulelsdrvltiiif')
    .then((res) => setMenuHeading(res))
  }
  useEffect(() => {
    getMenuHeading();
  }, []);

  const getAppHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('ksdriukihwdmipy')
    .then((res) => setAppHeading(res))
  }
  useEffect(() => {
    getAppHeading();
  }, []);
  
  const getAppetizer = () => {
    pb
    .collection('menu_appetizers')
    .getFullList()
    .then((res) => setAppetizer(res));
  }
  useEffect(() => {
    getAppetizer();
  }, []);

  const getEntreeHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('dyzgitio4w26a9h')
    .then((res) => setEntreeHeading(res))
  }
  useEffect(() => {
    getEntreeHeading();
  }, []);

  const getEntree = () => {
    pb
    .collection('menu_entrees')
    .getFullList()
    .then((res) => setEntree(res));
  }
  useEffect(() => {
    getEntree();
  }, []);

  const getSideHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('q7awuja0sloe88v')
    .then((res) => setSideHeading(res))
  }
  useEffect(() => {
    getSideHeading();
  }, []);

  const getSide = () => {
    pb
    .collection('menu_sides')
    .getFullList()
    .then((res) => setSide(res));
  }
  useEffect(() => {
    getSide();
  }, []);

  const getSoftDrinkHeading = () => {
    pb
    .collection('menu_softDrinks')
    .getOne('rn80ii3uk6wumkj')
    .then((res) => setSoftDrinkHeading(res))
  }

  useEffect(() => {
    getSoftDrinkHeading();
  }, []);

  const getDrink = () => {
    pb
    .collection('menu_softDrinks')
    .getFullList()
    .then((res) => setDrink(res));
  }
  useEffect(() => {
    getDrink();
  }, []);

  const getBeerHeading = () => {
    pb
    .collection('menu_alcohol')
    .getOne('j1r3nxvzpamacla')
    .then((res) => setBeerHeading(res))
  }

  useEffect(() => {
    getBeerHeading();
  }, []);

  const getAlcohol = () => {
    pb
    .collection('menu_alcohol')
    .getFullList()
    .then((res) => setAlcohol(res));
  }
  useEffect(() => {
    getAlcohol();
  }, []);

  const getDrinkHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('nqqbgu3f7zw378g')
    .then((res) => setDrinkHeading(res))
  }
  useEffect(() => {
    getDrinkHeading();
  }, []);

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
          <h1 className='card-tab'>{menuHeading.mainHeading}</h1>
      </div>
      
      <div className='flex-container'>
        <div className='menu-container'>

          {/* Appetizers Section */}
          <div className='menu-title-container'>
            <h1 tabIndex='0' className='page-subtitles'>{appHeading.headingName}</h1>
          </div>
          <div className='menu-rows-container'>
            <div className='menu-flex-container'>
                <div className='column'>
                  {appetizer.map((appItem) => (
                    <li className='menu-list' key={appItem.id}>
                      <h2 tabIndex='0' className='appetizer-items'>{appItem.appName}</h2>
                      <p className='menu-descriptions'>{appItem.description}</p>
                    </li>
                ))}
                </div>
              </div>
          </div>

          {/* Entrees Section */}
          <div className='menu-title-container'>
              <h1 tabIndex='0' className='page-subtitles'>{entreeHeading.headingName}</h1>
          </div>
          <div className='menu-rows-container'>
            <div className='menu-flex-container'>
                <div className='column'>
                  {entree.map((entreeItem) => (
                    <li className='menu-list' key={entreeItem.id}>
                      <h2 tabIndex='0' className='entree-items'>{entreeItem.entreeName}</h2>
                      <p className='menu-descriptions'>{entreeItem.description}</p>
                    </li>
                  ))}
                </div>
              </div>
          </div>

          {/* Sides section */}
          <div className='menu-title-container'>
            <h1 tabIndex='0' className='page-subtitles'>{sideHeading.headingName}</h1>
          </div>
          <div className='menu-rows-container'>
            <div className='menu-flex-container'>
                <div className='column'>
                  {side.map((sideItem) => (
                    <li className='menu-list' key={sideItem.id}>
                      <h2 tabIndex='0' className='side-items' key={sideItem.id}>{sideItem.sideName}</h2>
                      <p className='menu-descriptions'>{sideItem.description}</p>
                    </li>
                  ))}
                </div>
            </div>
          </div>

          {/* Drinks */}
          <div className='menu-title-container'>
            <h1 tabIndex='0' className='page-subtitles'>{drinkHeading.headingName}</h1>
          </div>
          <div className='menu-rows-container'>
          <div className='menu-flex-container'>
                <div className='drink-column'>
                  <h2 className='drink-items'>{softDrinkHeading.subHeading}</h2>
                  <hr></hr>
                  {drink.map((drinkItem) => (
                    <li className='menu-list' key={drinkItem.id}>
                      <h2 className='drink-items'>{drinkItem.drinkName}</h2>
                      {/* <p className='menu-descriptions'>{drinkItem.description}</p> */}
                    </li>
                  ))}
                </div>
                <div className='drink-column'>
                  <h2 className='drink-items'>{beerHeading.subHeading}</h2>
                  <hr></hr>
                  {alcohol.map((alcoholItem) => (
                    <li className='menu-list' key={alcoholItem.id}>
                      <h2 className='drink-items'>{alcoholItem.alcoholName}</h2>
                      {/* <p className='menu-descriptions'>{alcoholItem.description}</p> */}
                    </li>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Menu
