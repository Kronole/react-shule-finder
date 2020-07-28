import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import SchoolContainer from "../components/SchoolContainer";

const Schools = () => {
    return (
      <>
      <Hero hero ="schoolsHero">
        <Banner title="Schools">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
      </Hero>
      <SchoolContainer />
      </>
    );
};

export default Schools;
