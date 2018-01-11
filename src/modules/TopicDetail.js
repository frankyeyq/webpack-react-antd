import React from 'react'
import { topicDetail } from '../api/api'
import getReplyTime from '../util/util'

class TopicDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                id: '',
                author_id: '',
                content: '',
                title: '',
                last_reply_at: '',
                good: false,
                top: false,
                reply_count: 0,
                vist_count: 0,
                create_at: '',
                author: {
                    loginname: '',
                    avatar_url: ''
                },
                replies: [],
                is_collect: false
            },
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
                let replyLis = this.state.data.replies.map((item, index) => 
                    <li className="reply-li" key={item.id}>
                        <img src={item.author.avatar_url} className="avatar"/>
                        <div className="reply-detail">
                            <p className="reply-detail-msg">{index+1}楼·{getReplyTime(item.create_at)}</p>
                            <p className="reply-text" dangerouslySetInnerHTML={this.createMarkup(item.content)}></p>
                        </div>
                    </li>
                )
                this.setState({
                    replyLis
                })
            }
        })
    }
    componentDidMount() {
        this.getData()
    }
    createMarkup(data) {
        return {__html: data}
    }
    getFromTab(tab) {
        let tabStr = {
            'share': '分享'
        }
        return tabStr[tab]
    }
    render() {
        let data = this.state.data
        return (
            <div>
                <div className="topic-detail">
                    <div className="header">
                        <p className="title">{data.title}</p>
                        <p className="topic-msg">发布于{getReplyTime(data.create_at)}·作者{data.author.loginname}·{data.visit_count}次浏览·来自 {this.getFromTab(data.tab)}</p>
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={this.createMarkup(this.state.data.content)} />
                    </div>
                </div>
                <div className="replies">
                    <p className="reply-num">{data.reply_count}回复</p>
                    <ul className="reply-ul">
                        {this.state.replyLis}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopicDetail