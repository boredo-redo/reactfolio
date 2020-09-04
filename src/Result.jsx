import React from 'react'
class Result extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const allSchools = this.props.schools.map(entry =>
            <div>School:{entry.name} | age: {entry.maxAge} - Needs Aircon? {entry.needsAircon ? "Yes" : "No"} - Parent Control? {entry.parentControl ? "Yes" : "No"}</div>
        )

        return (
            <div>
                {allSchools ? allSchools : []}
            </div>
        )
    }
}
export default Result;