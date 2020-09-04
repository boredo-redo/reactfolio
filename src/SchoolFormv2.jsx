import React, { Component } from 'react';
import './App.css';

class SchoolFormv2 extends Component{
    constructor(props){
        super(props);
    }
    handleGradeChange = (e) => {
        this.props.onGradeChange(e.target.value)
    }
    handleNumClassChange = (e) => {
        this.props.onNumClassChange(e.target.value)
    }
    handleNumStudentsChange = (e) => {
        this.props.onNumStudentsChange(e.target.value)
    }
    handleIsAirConChange = (e) => {
        this.props.onIsAirConChange(e.target.value)
    }
    handleSchoolNameConChange = (e) => {
        this.props.onSchoolNameConChange(e.target.value)
    }
    handleSubmitSchoolForm = (e) => {
        this.props.onSubmitSchoolForm(e.target.value)
    }
    
    render(){
       
        return(
            <div>
            <form onSubmit={this.handleSubmitSchoolForm}>
            <div>
            School Name: <input value={this.props.schoolName} onChange={this.handleSchoolNameConChange} />
            Grade: <input value={this.props.grade} onChange={this.handleGradeChange} />
            Number of Classes: <input value={this.props.numClass} onChange={this.handleNumClassChange} />
            Number of Students: <input value={this.props.numStudents} onChange={this.handleNumStudentsChange} />
            Airconditioned Room?: <input type='checkbox' value={this.props.hasAircon} onChange={this.handleIsAirConChange} />
            <input type="submit" value="Submit" />
        </div>
        </form>
       
        </div>
        )
    }
}

export default SchoolFormv2;