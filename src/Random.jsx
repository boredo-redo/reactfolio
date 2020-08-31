import React, { Component } from 'react';
import './App.css';

class Random extends Component{
    constructor(props){
        super(props);
        this.state = {
            age:0
        }
    }

    ComputeAge(num){
        if(num >= 0 && num < 1){
            return 'Baby'
        }
        else if(num >=1 && num)
        return num < 10 ? '0' + num : num;
    }

    render(){
       
        return(
            <div>
            <div className="age">{this.ComputeAge(this.state.age)} days</div>
        </div>
        )
    }

}


export default Random;