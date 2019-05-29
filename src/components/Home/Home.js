import React from 'react';
import Carousel from '../Carousel/Carousel';
import Introduction from '../Introduction/Introduction';
import ServicesList from '../Services/ServicesList';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='page-min-height'>
            <Carousel />
            <Introduction />
            <ServicesList/>
            <Testimonials />
        </div>
    );
}

export default Home;