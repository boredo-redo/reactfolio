import React from 'react'
import Finder from './FinderForm'
import Result from './Result'
import Login from './Login'
import SchoolFormv2 from './SchoolFormv2'
const schools = [
    {
        name: 'UP',
        maxAge: 7,
        needsAircon: true,
        parentControl: false
    },
    {
        name: 'UST',
        maxAge: 9,
        needsAircon: true,
        parentControl: false
    },
    {
        name: 'DLSU',
        maxAge: 15,
        needsAircon: false,
        parentControl: true
    },
    {
        name: 'AD',
        maxAge: 18,
        needsAircon: true,
        parentControl: false
    },

]
class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 0,
            needsAircon: true,
            fullName: 'Enter your name Fulname + lastname',
            parentControl: false,
            userName: '',
            password: '',
            grade: 0,
            numClass: 0,
            numStudents: 0,
            hasAircon: false,
            schoolName: ''
        }
    }
    handleFullNameChange = (e) => {
        this.setState({ fullName: e })

    }
    handleUserNameChange = (e) => {
        this.setState({ userName: e })

    }
    handlePasswordChange = (e) => {
        this.setState({ password: e })

    }
    handleAgeChange = (e) => {
        this.setState({ age: e })
    }

    handleAirconChange = (e) => {
        this.setState({ needsAircon: e })

    }
    handleParentControlChange = (e) => {
        this.setState({ parentControl: e })
    }

    handleSchoolNameConChange = (e) => {
        this.setState({ schoolName: e })

    }
    handleGradeChange = (e) => {
        this.setState({ grade: e })
    }
    handleNumClassChange = (e) => {
        this.setState({ numClass: e })
    }
    handleNumStudentsChange = (e) => {
        this.setState({ numStudents: e })
    }
    handleIsAirConChange = (e) => {
        this.setState({ hasAircon: e })
    }
    handleSubmitSchoolForm = (e) => {

        let saveEntry = { ...this.state };
        
        this.setState({
            ...this.state
        });

        let stateString = JSON.stringify(saveEntry);

        localStorage[this.state.schoolName] = stateString;
        console.log(localStorage);
    }
    filterSchools = () => {
        return schools.filter(e => {
            return (
                this.state.age < e.maxAge &&
                this.state.needsAircon === e.needsAircon &&
                this.state.parentControl === e.parentControl
            )
        })
    }

    render() {
        return (
            <div>
                <Login
                    onUsernameChange={this.handleFullNameChange}
                    onPasswordChange={this.handlePasswordChange}
                />
                <hr />
                <SchoolFormv2
                    onSchoolNameConChange={this.handleSchoolNameConChange}
                    onGradeChange={this.handleGradeChange}
                    onNumClassChange={this.handleNumClassChange}
                    onNumStudentsChange={this.handleNumStudentsChange}
                    onIsAirConChange={this.handleIsAirConChange}
                    onSubmitSchoolForm={this.handleSubmitSchoolForm}
                />
                <hr />
                <h3>Grade: {this.state.grade}</h3>
                <h3>Number of Classes: {this.state.numClass}</h3>
                <h3>Number of Students: {this.state.numStudents}</h3>
                <h3>Has Aircondition: {this.state.hasAircon ? "Yes" : "No"}</h3>
                <hr />
                <Finder
                    onFullnameChange={this.handleFullNameChange}
                    onAgeChange={this.handleAgeChange}
                    onAirconChange={this.handleAirconChange}
                    onParentControlChange={this.handleParentControlChange}
                    info={this.state} />
                <hr />
                <Result schools={this.filterSchools()} />
            </div>
        )
    }
}
export default Registration;