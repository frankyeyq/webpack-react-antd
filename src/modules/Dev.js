import React from 'react'

class Dev extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getDevData')
    }

    render() {
        return (
            <h1>Dev</h1>
        )
    }
}

export default Dev
