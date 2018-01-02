import React from 'react'

class Share extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }
    getData() {
        console.log('getShareData')
    }
    render() {
        return (
            <h1>Share</h1>
        )
    }
}

export default Share
