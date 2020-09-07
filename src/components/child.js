import React from 'react'


class Child extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                I'm a child with {this.props.attitude}
            </div>
        )
    }
}
export default Child;