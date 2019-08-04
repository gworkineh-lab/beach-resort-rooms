import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "As you get older, little growths called skin tags might start popping up on your body."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Lorem epsen doler sit amet constructer will be my text an"
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle van",
                info: "Lorem epsen doler sit amet constructer will be my text an"
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: "Lorem epsen doler sit amet constructer will be my text an"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
