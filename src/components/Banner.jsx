import React from 'react';

const Banner = () => {
    return (
        // <div className='text-center mt-10 space-y-4'>
        //     <h1 className='text-5xl'>Your Journey Starts Here</h1>
        //     <h3 className='text-2xl'>Book bus, train and launch tickets with ease. Discover the best routes and enjoy a seamless travel experience with TicketBari.</h3>
        //     <button className='btn btn-primary'>Find Your Ticket</button>
        // </div>
        <div className="hero h-80" style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Your Journey <br /> Starts Here</h1>
            <p className="mb-5">Book bus, train and launch tickets with ease. Discover the best routes and enjoy a seamless travel experience with TicketBari.</p>
            <button className="btn btn-primary">Find Your Ticket</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;