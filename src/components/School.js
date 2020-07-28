import React from 'react'
import {Link} from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
export default function School({school}) {
    const { name, bob, images, price} = school;
    return (
        <article className="school">
            <div className="img-container">
                < img src={images[0] || defaultImg} alt="boys school" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per semester</p>
                </div>
                <Link to={`/schools/${bob}`} className="btn-primary school-link">
                    Details
                </Link>
            </div>
    <p className="school-info">{name}</p>
        </article>
    );
}

School.propTypes = {
    school: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bob: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
};