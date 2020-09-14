import React from 'react';
import Product from './Product';
import images from './images/jellyfish.jpg';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={images} alt='seaside-sky' />

        {/* Product id, title, price, rating, image*/}
        <div className='home__row'>
          <Product
            id='98765'
            title='
          Macwheel 28" Electric Trekking/Touring Bike, Cruiser 550 Electric Bicycle with 36V/10Ah Removable Lithium-ion Battery, Front Suspension, Dual Disc...'
            price={970.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/71dc-6oPHrL._AC_SL1500_.jpg'
          />
          <Product
            id='48375'
            title='Electric Bikes for Adults, 26" Folding Bike, 400W 48V 10AH Lithium Battery Aluminum Alloy Mountain Cycling Bicycle, E-Bike with 7-speed Shimano...'
            price={1497.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/610%2BheH7vEL._AC_SL1080_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='345678'
            title='
        OUXI Adults LO26 Moped Electric Bike 26 Inch Smart Folding E-bike 48V 10.4AH 350W Motor Mountain Bicycle For Men'
            price={899.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61XvoG8kzkL._AC_SL1000_.jpg'
          />
          <Product
            id='1232343'
            title='
          Electric Mountain Bike 26inch Fat Tire e-Bike S-h-i-m-a-n-o 21 Speeds Beach Cruiser Mens Sports Mountain Bike...'
            price={479.0}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61WvXQwYncL._AC_SL1001_.jpg'
          />
          <Product
            id='1232343'
            title='
          Electric Bike Bicycle Moped with Front Rear Disk Brake 350W for Cycling Outdoor'
            price={919.95}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61AWuskJuRL._AC_SL1001_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='123234'
            title='
        LENTIA Electric Bike for Adults Folding E Bikes E-bike 50km Mileage 6Ah Lithium-Ion Batter 3 Riding Modes 240W Max Speed 25km/h (gray) D3F'
            price={1496.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61BQdvA1EaL._AC_SL1200_.jpg'
          />

          <Product
            id='1232343'
            title='
          Electric Bike Bicycle Moped with Front Rear Disk Brake 350W for Cycling Outdoor'
            price={919.95}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61AWuskJuRL._AC_SL1001_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
