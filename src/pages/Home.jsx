import React from 'react';
// import banner from '../../public/banner.png';
import Banner from '../components/Banner';
import SpecialOffers from '../components/SpecialOffers';
import RecentlyAdded from '../components/RecentlyAdded';
import WhyBook from '../components/WhyBook';

const Home = () => {
    return (
        <div className='mx-15'>
            {/* <img src={banner} alt="" className='mx-auto h-[500px]' /> */}
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <RecentlyAdded></RecentlyAdded>
            <WhyBook></WhyBook>
        </div>
    );
};

export default Home;