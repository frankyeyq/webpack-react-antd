import React from 'react'
import { topicDetail } from '../api/api'

class TopicDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.getData()
    }
    getData() {
        let id = this.props.match.params.id
        topicDetail({id}).then(res => {
            if (res.data.success) {
                this.setState({
                    data: res.data.data
                })
            }
            console.log(res)
        })
    }
    render() {
        return (
            <h1>topic detail</h1>
        )
    }
}

export default TopicDetail