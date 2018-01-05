import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import BasicExample from './routes'
import './styles/common.scss'
import './styles/style.scss'
import Header from './modules/Header'
import { Router, Route } from 'react-router-dom'
import All from './modules/All'
import Good from './modules/Good'
import Share from './modules/Share'
import Ask from './modules/Ask'
import Job from './modules/Job'
import Dev from './modules/Dev'
import TopicDetail from './modules/TopicDetail'
import history from 'history/createBrowserHistory'

ReactDOM.render(
    <div>
        <Header />
        <Router history={history()}>
            <div>
                <Route exact path="/" component={All} />
                <Route path="/good" component={Good} />
                <Route path="/share" component={Share} />
                <Route path="/ask" component={Ask} />
                <Route path="/job" component={Job} />
                <Route path="/dev" component={Dev} />
                <Route path="/topic/:id" component={TopicDetail} />
            </div>
        </Router>
    </div>,
    document.getElementById('root')
)
