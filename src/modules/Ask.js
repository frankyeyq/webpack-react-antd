import React from 'react'

class Ask extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getAskData')
    }

    render() {
        return (
            <h1>Ask</h1>
        )
    }
}

export default Ask
