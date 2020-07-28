import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {SchoolContext} from "../context";
import StyledHero from "../components/StyledHero";

export default class BoysSchools extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {bob:this.props.match.params.bob,
        defaultBcg
        };
    }
    static contextType = SchoolContext;
    //componentDidMount() {}
    render() {
        const { getSchool } = this.context;
        const school = getSchool(this.state.bob);
        if(!school){
            return (<div className="error">
                        <h3>no such school could be found...</h3>
                        <Link to="/schools" className="btn-primary">
                            back to schools
                        </Link>
                    </div>
                     );
        }
        const { name, description, size, price, extras, boarding, day, images } = school;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} school`}>
                    <Link to="/schools" className="btn-primary">
                    back to schools
                    </Link>
                </Banner>
            </StyledHero>
            
            <section className="single-school">
                <div className="single-school-images">
                    {defaultImg.map((item, index) => {
                        return < img key={index} src={item} alt={name} />;
                    })}
                </div>
                <div className="single-school-info">
                    <article className="desc">
                        <h3>details</h3>
                <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                <h6>School fees : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>{day && "Day School is available"}</h6>
                <h6>{boarding && "Boarding School is available"}</h6>
                    </article>
                </div>
            </section>
            <section className="school-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>-{item}</li>;
                        })}
                </ul>
            </section>
            </>
        );
    }
}
