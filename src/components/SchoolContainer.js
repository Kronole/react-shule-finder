import React from 'react'
import SchoolsFilter from "./SchoolFilter";
import SchoolsList from "./SchoolList";
import {withSchoolConsumer} from "../context";
import Loading from "./Loading";

function SchoolContainer ({ context }){
    const {loading, sortedSchools, schools} = context; 
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <SchoolsFilter schools={schools} />
            <SchoolsList schools={sortedSchools} />
        </>
    );
}

export default withSchoolConsumer(SchoolContainer);


