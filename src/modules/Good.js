import React from 'react'

class Good extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getGoodData')
    }
    render() {
        return (
            <h1>Good</h1>
        )
    }
}

export default Good
