import React, { Component } from 'react';
import './App.css';

class Temperature extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
      
        setInterval(() => this.anagramChecker(this.props.firstWord,this.props.secondWord),1000);
    }
    
    

    render(){
       
        return(
            <div>
             <div className="anagram">{this.state.isAnagram}</div>
            
        </div>
        )
    }
}

export default Temperature;