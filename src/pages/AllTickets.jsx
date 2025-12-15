import React from 'react';
import SearchBox from '../components/SearchBox';
import TicketCard from '../components/TicketCard';

const AllTickets = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1>Explore all Available Tickets</h1>
            <SearchBox></SearchBox>
            <div className='grid grid-cols-3'>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
            </div>
        </div>
    );
};

export default AllTickets;