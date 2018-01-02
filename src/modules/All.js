import React from 'react'

class All extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getAllData')
    }
    render() {
        return (
            <h1>All</h1>
        )
    }
}

export default All
