import React, { Component } from 'react';
import './project.sass';
import { Form, FormControl, Button, Checkbox} from 'react-bootstrap';

class SchooolForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newGrade: '',
            newNumClass:'',
            newNumStudents:'',
            hasAnAircon: '1'
        }
    }

    componentWillMount(){
        this.state.newGrade = localStorage.getItem('newGrade');
        this.state.newNumClass = localStorage.getItem('newNumClass');
        this.state.newNumStudents = localStorage.getItem('newNumStudents');
        this.state.hasAnAircon = localStorage.getItem('hasAnAircon');
    }

    saveForm(){
        console.log(this.state);
        localStorage.setItem('newGrade', this.state.newGrade);
        localStorage.setItem('newNumClass', this.state.newNumClass);
        localStorage.setItem('newNumStudents', this.state.newNumStudents);
        localStorage.setItem('hasAnAircon', this.state.hasAnAircon);
    }

    render(){
        return(
        <div className='app'>
      
           <p>Grade: {this.state.newGrade}</p>
           <p>Number of classes: {this.state.newNumClass}</p>
           <p>Numnber of students: {this.state.newNumStudents}</p>
           <p>has an aircon: {this.state.hasAnAircon}</p>

      <Form inline>
            <FormControl 
            placeholder='Input Grade'
            onChange={event => this.setState({newGrade : event.target.value})}
            />
            <p></p>
            <FormControl 
            placeholder='Input number of class'
            onChange={event => this.setState({newNumClass : event.target.value})}
            />
            <p></p>
             <FormControl 
            placeholder='Input number of students'
            onChange={event => this.setState({newNumStudents : event.target.value})}
            />
            <p></p>
             <label>
             has an aircon?
            <input
            name="has an aircon?"
            type="checkbox"
            checked={this.state.hasAnAircon}
            onChange={event => this.setState({hasAnAircon : event.target.checked})} />
            </label>
            <p></p>
            <Button onClick={() => this.saveForm()}>Submit</Button>
        </Form>
        </div>
        )
    }
}
export default SchooolForm;