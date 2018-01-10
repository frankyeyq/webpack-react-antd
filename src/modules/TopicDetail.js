import React from 'react'
import { topicDetail } from '../api/api'

class TopicDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            replyLis: []
        }
    }
    getData() {
        let id = this.props.match.params.id

        topicDetail({id}).then(res => {
            if (res.data.success) {
                this.setState({
                    data: res.data.data
                })
                let replyLis = this.state.data.replies.map((item) => 
                    <li className="reply-li" key={item.id}>
                        <img src={item.author.avatar_url} />
                        <div className="reply-detail"></div>
                    </li>
                )
                console.log(replyLis)
                this.setState({
                    replyLis
                })
            }
            console.log(res)
        })
    }
    componentDidMount() {
        this.getData()
    }
    createMarkup() {
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
                <div className="replies">
                    <p className="reply-num"></p>
                    <ul className="reply-ul">
                        {this.state.replyLis}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopicDetail