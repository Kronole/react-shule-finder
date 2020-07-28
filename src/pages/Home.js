import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedSchools from "../components/FeaturedSchools";

export default function Home() {
    return (
    <>
        <Hero>
            <Banner title="Best Schools" subtitle="Most Performing Schools in the Country">
                <Link to="/schools" className="btn-primary">
                    Find Schools
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedSchools />

    </>
    );
}
