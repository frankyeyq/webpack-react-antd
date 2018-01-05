import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className="main">
                <ul className="top-nav">
                    <li><Link to="/">全部</Link></li>
                    <li><Link to="/good">精华</Link></li>
                    <li><Link to="/share">分享</Link></li>
                    <li><Link to="/ask">问答</Link></li>
                    <li><Link to="/job">招聘</Link></li>
                    <li><Link to="/dev">客户端测试</Link></li>
                </ul>
                <h1>Ask</h1>
            </div>
        )
    }
}

export default Ask
