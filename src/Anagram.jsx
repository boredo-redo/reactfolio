import React, { Component } from 'react';
import './App.css';

class Anagram extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAnagram: 'NOOOOOO!!'
        }
    }

    componentWillMount(){
        console.log('props', this.props.firstWord);
        this.anagramChecker(this.props.firstWord,this.props.secondWord);
    }

    componentDidMount(){
        console.log('props', this.props.firstWord);
        setInterval(() => this.anagramChecker(this.props.firstWord,this.props.secondWord),1000);
    }
    
    anagramChecker(firstWord, secondWord) {
        
        firstWord = firstWord.toLowerCase().replace(/[\W_]+/g, "");
        secondWord = secondWord.toLowerCase().replace(/[\W_]+/g, "");

        // sorting
        console.log('value', firstWord);
        const stringASorted = firstWord.split('').sort().join('');
        const stringBSorted = secondWord.split('').sort().join('');


        if(firstWord === '' && secondWord ===''){
            this.setState({isAnagram: 'Anagram Checker'
        });
        }
        else if (stringASorted === stringBSorted){
            this.setState({isAnagram: 'Yes'
        });
        }
        else{
            this.setState({isAnagram: 'NOOOOO!'
        });
        }
            
    }

    render(){
       
        return(
            <div>
             <div className="anagram">{this.state.isAnagram}</div>
            
        </div>
        )
    }
}

export default Anagram;