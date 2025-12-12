import React from 'react';
// import banner from '../../public/banner.png';
import Banner from '../components/Banner';
import SpecialOffers from '../components/SpecialOffers';

const Home = () => {
    return (
        <div className='mx-15'>
            {/* <img src={banner} alt="" className='mx-auto h-[500px]' /> */}
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;