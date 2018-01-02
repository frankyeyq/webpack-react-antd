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

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">全部</Link></li>
                <li><Link to="/good">精华</Link></li>
                <li><Link to="/share">分享</Link></li>
                <li><Link to="/ask">问答</Link></li>
                <li><Link to="/job">招聘</Link></li>
                <li><Link to="/dev">客户端测试</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={All} />
            <Route path="/good" component={Good} />
            <Route path="/share" component={Share} />
            <Route path="/ask" component={Ask} />
            <Route path="/job" component={Job} />
            <Route path="/dev" component={Dev} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (<h3>请选择一个主题。</h3>)} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample
