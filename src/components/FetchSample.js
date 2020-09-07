import React, { Component } from 'react';


class FetchSample extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        }
    }
    
    getAllCountries = () => {
        const requestOptions ={
            method: 'GET'
        };
        fetch("https://restcountries.eu/rest/v2/all", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result

                    });
                },
                (error) => {
                    this.setState({
                        isLoaded:true,
                        error

                    });
                }
            )
    }
    componentWillMount = async ()=>{
        await this.getAllCountries();
    }
    render(){
       const allCountries = this.state.items.map(entry =>
            <li>{entry ? entry.name : 'No Data' } </li>
        )
        return(
            <ul>
                {allCountries}
            </ul>
        )
    }
}

export default FetchSample;