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
    createMarkup() {
        console.log(this)
        return {__html: this.state.data.content}
    }
    render() {
        
        return (
            <div className="topic-detail">
                <div className="header">
                    <p className="title">{this.state.data.title}</p>
                </div>
                <div className="content">
                    <div dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
            </div>
        )
    }
}

export default TopicDetail