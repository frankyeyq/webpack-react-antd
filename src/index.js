import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import RouteVeiw from './routes'
import './styles/common.scss'
import './styles/style.scss'
import Header from './modules/Header'
import { Router, Route } from 'react-router-dom'
import TopicDetail from './modules/TopicDetail'

ReactDOM.render(
    <div>
        <Header />
        <RouteVeiw />
    </div>,
    document.getElementById('root')
)
