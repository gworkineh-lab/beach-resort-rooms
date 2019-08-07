import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import StyledHero from '../components/StyledHero';
export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurius rooms" subtitle="deluxe starting $299">
                    <Link to="/rooms/" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <StyledHero />
        </>
    )
}
