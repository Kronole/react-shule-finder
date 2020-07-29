import React, { Component } from 'react'
import items from "./data";
//import Client from "./Contentful";

const SchoolContext = React.createContext();

class SchoolProvider extends Component {
    state={
        schools: [],
        sortedSchools: [],
        featuredSchools: [],
        loading: true,
        type:'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        day: false,
        boarding: false
    };

//getData
// getData = async () => {
//     try {
//         let response = await Client.getEntries({
//             content_type: "shuleFinder"
//         });
        
//     let schools = this.formatData (response.items);
//     let featuredSchools = schools.filter(school => school.featured === true);
//     let maxPrice = Math.max(...schools.map(item => item.price));
//     this.setState({
//         schools,
//         featuredSchools,
//         sortedSchools: schools,
//         loading: false,
//         price: maxPrice,
//         maxPrice
//     });

//     } catch (error) {
//         console.log(error);
//     }
// }

componentDidMount () {
   //this.getData ()

    let schools = this.formatData (items);
    let featuredSchools = schools.filter(school => school.featured === true);
    let maxPrice = Math.max(...schools.map(item => item.price));
    this.setState({
        schools,
        featuredSchools,
        sortedSchools: schools,
        loading: false,
        price: maxPrice,
        maxPrice
    });
}

formatData (items) {
    let tempItems = items.map( item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);

        let school = {...item.fields, images, id};
        return school;
    });
    return tempItems;
}

getSchool = (bob) => {
let tempSchools = [...this.state.schools];
const school = tempSchools.find(school => school.bob === bob);
return school;
};

handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState({
        [name]:value
    }, this.filterSchools);
};

filterSchools =() =>{
    let { schools, type, price, day, boarding } = this.state
    //all the schools
    let tempSchools = [...schools];
    //changing the value of school fees from string to int
    price = parseInt(price);
    // filter by type
    if (type !== "all"){
        tempSchools = tempSchools.filter(school => school.type === type);
    }

    //filtering by schoolfees
    tempSchools = tempSchools.filter(school => school.price <= price);

    //filtering by boarding
    if (boarding) {
        tempSchools = tempSchools.filter(school => school.boarding === true);
    }

    //filtering by day
    if (day) {
        tempSchools = tempSchools.filter(school => school.day === true);
    }

    //changing the state
    this.setState({
        sortedSchools: tempSchools
    });
};

    render() {
        return (
            <SchoolContext.Provider value={{ ...this.state, getSchool: this.getSchool, handleChange: this.handleChange }}>
                {this.props.children}
            </SchoolContext.Provider>
        );
    }
}

const SchoolConsumer = SchoolContext.Consumer;

export function withSchoolConsumer (Component){
    return function ConumerWrapper(props){
        return <SchoolConsumer>
            {value => <Component {...props} context={value} />}
        </SchoolConsumer>
    }
}

export { SchoolProvider, SchoolConsumer, SchoolContext };