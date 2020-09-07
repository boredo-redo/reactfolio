import React from 'react'
import Behaviour from './behaviour'
import Child from './child'

class Mother extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Child attitude={
                    <Behaviour elements="024"/>
                }/>
                <Child attitude={
                    <Behaviour elements="13"/>
                }/>
                <Child attitude={
                    <Behaviour elements="1"/>
                }/>
                <Child attitude={
                    <Behaviour elements="1432"/>
                }/>
            </div>
        )
    }
}
export default Mother;