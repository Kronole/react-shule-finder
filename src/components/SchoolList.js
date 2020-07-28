import React from 'react'
import School from "./School";
export default function SchoolList({schools}) {
    if(schools.length === 0){
        return(
            <div className="empty-search">
                <h3>Sorry, no Schools matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="schoolslist">
            <div className="schoolslist-center">
                {schools.map(item => {
                    return <School key={item.id} school={item} />;
                })}
            </div>
        </section>
    );
}
