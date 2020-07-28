import React, { Component } from 'react'
import { SchoolContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import School from "./School";
export default class FeaturedSchools extends Component {
    static contextType = SchoolContext
    render() {
      let { loading, featuredSchools: schools } = this.context;
      schools = schools.map(school => {
          return <School key={school.id} school={school}/>
      })
        return (
            <section className="featured-schools">
                <Title title="featured schools"/>
            <div className="featured-schools-center">
              {loading ? <Loading /> : schools}
            </div>
            </section>
        );
    }
}
