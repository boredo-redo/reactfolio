import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Anagram from './Anagram';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline : 'December 26, 2020',
            newDeadline: '',
            firstWord: '',
            secondWord: '',
            newFirstWord: '',
            newSecondWord: ''
        }
    }

    changeDeadline(){
        //console.log('state', this.state);
        this.setState({ deadline : this.state.newDeadline});
    }
    changeWord(){
        console.log('state1', this.state);
        this.setState({ 
            firstWord : this.state.newFirstWord,
            secondWord : this.state.newSecondWord
        });
    }

    render(){
        return(
        <div className='app'>
        <Anagram
         firstWord = {this.state.firstWord}
         secondWord = {this.state.secondWord}
        />

        <Form inline>
            <FormControl 
            className="first-word"
            placeholder='Input first word'
            onChange={event => this.setState({newFirstWord : event.target.value})}
            />
            <FormControl 
            className="second-word"
            placeholder='Input second word'
            onChange={event => this.setState({newSecondWord : event.target.value})}
            />
            <Button onClick={() => this.changeWord()}>Submit</Button>
        </Form>
        </div>
        )
    }
}
export default App;