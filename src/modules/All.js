import React from 'react'
import { getTopics } from '../api/api'
import { Link } from 'react-router-dom'

const baseUrl = 'https://cnodejs.org'

class All extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: []
        }
        this.getData()
    }
    getData() {
        getTopics({ tab: 'all', page: 1, limit: 10 }).then((res) => {
            const listData = res.data.data
            console.log(res)
            this.setState({ listData })
        })
        console.log('getAllData')
    }
    render() {
        const tabObj = {
            'share': '分享',
            'ask': '问答'
        }
        const lis = this.state.listData.map((item, index) => 
            <li key={item.id}>
                <img className="author-avatar" src={item.author.avatar_url} width={30} height={30} title={item.author.loginname} />
                <span className="reply-visit"><span className="reply-num" title="回复数">{item.reply_count}</span>/<span className="visit-num" title="访问数">{item.visit_count}</span></span>
                <span className={'list-tab '+(item.top?'tab-top':item.good?'tab-good':'tab-'+item.tab)}>{item.top?'置顶':item.good?'精华':tabObj[item.tab]}</span>
                <Link to={'/topic/'+item.id}>{item.title}</Link>
            </li>
        )
        return (
            <ul className="list-container">{lis}</ul>
        )
    }
}

export default All
