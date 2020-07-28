import React from 'react'
import { useContext } from "react";
import { SchoolContext } from "../context";
import Title from "../components/Title";

//a function to get all unique school types
const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
};

export default function SchoolFliter({schools}) {
    const context = useContext(SchoolContext);
    const {handleChange, type, price, minPrice, maxPrice, day, boarding} = context;
    
    //getting unique school types
    let types = getUnique(schools, 'type');
    //adding all in the school types
    types = ['all',...types];
    //mapping to jsx
    types = types.map((item, index)=>{
    return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="search schools" />
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">school type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* school fees */}
                <div className="form-group">
                    <label htmlFor="price">
                        School Fees ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end of school fees */}
                {/* school category */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="boarding" id="boarding" checked={boarding} onChange={handleChange} />
                        <label htmlFor="boarding">boarding school</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="day" id="day" checked={day} onChange={handleChange} />
                        <label htmlFor="day">day school</label>
                    </div>
                </div>
                {/* end of school category */}
            </form>
        </section>
    );
}
