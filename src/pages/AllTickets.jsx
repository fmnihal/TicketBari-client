import React from 'react';
import SearchBox from '../components/SearchBox';
import TicketCard from '../components/TicketCard';

const AllTickets = () => {
    return (
        <div>
            <h1>Explore all Available Tickets</h1>
            <SearchBox></SearchBox>
            <TicketCard></TicketCard>
        </div>
    );
};

export default AllTickets;