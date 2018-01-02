import React from 'react'

class Job extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getJobData')
    }

    render() {
        return (
            <h1>Job</h1>
        )
    }
}

export default Job
