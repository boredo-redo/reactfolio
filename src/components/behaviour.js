import React from 'react'

const child = [
    'polite', 'angry', 'hard working', 'lazy','rude'
]

class Behaviour extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const elements = this.props.elements.split(''); 
        let allBehaviours = [] //[]
        elements.forEach(v => {
            allBehaviours.push(child[v])
        });
        allBehaviours = allBehaviours.join(' and ')
        return (
            <div>
                {allBehaviours} Behaviours
                <br/>
            </div>
        )
    }
}
export default Behaviour;