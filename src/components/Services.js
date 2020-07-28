import React, { Component } from 'react'
import { TiMessages } from "react-icons/ti";
import { MdComputer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { RiWifiOffLine } from "react-icons/ri";

import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<TiMessages />,
                title:"24/7 Support",
                info:"With multiple means of support (tickets, SMS, calls and on site), we support schools, parents and partners that use ShuleFinder."
            },
            {
                icon:<MdComputer />,
                title:"Intuitive User Experience",
                info:"ShuleFinder is easy to use and simple to learn, consistent and clearly organized. You will always find what you're looking for."
            },
            {
                icon:<GiSandsOfTime />,
                title:"Low Load Time",
                info:"ShuleFinder is backed by powerful and high performing servers that makes it run very fast."
            },
            {
                icon:<RiWifiOffLine />,
                title:"Offline Use",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Features" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}

                </div>
            </section>
        );
    }
}
