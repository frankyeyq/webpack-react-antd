import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import All from './modules/All'
import Good from './modules/Good'
import Share from './modules/Share'
import Ask from './modules/Ask'
import Job from './modules/Job'
import Dev from './modules/Dev'
import TopicDetail from './modules/TopicDetail'
import history from 'history/createBrowserHistory'

class BasicExample extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div className="main">
                    <ul className="top-nav">
                        <li><Link to="/">全部</Link></li>
                        <li><Link to="/good">精华</Link></li>
                        <li><Link to="/share">分享</Link></li>
                        <li><Link to="/ask">问答</Link></li>
                        <li><Link to="/job">招聘</Link></li>
                        <li><Link to="/dev">客户端测试</Link></li>
                    </ul>
                    <Route exact path="/" component={All} />
                    <Route path="/good" component={Good} />
                    <Route path="/share" component={Share} />
                    <Route path="/ask" component={Ask} />
                    <Route path="/job" component={Job} />
                    <Route path="/dev" component={Dev} />
                </div>
            </Router>
        )
    }
}

export default BasicExample
