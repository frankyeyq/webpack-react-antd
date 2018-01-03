import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1'

export const getTopics = (params) => { 
    let p = axios.get(`${baseUrl}/topics`, { params })
    return p
}

export const topicDetail = (params) => { 
    let p = axios.get(`${baseUrl}/topic/${params.id}`)
    return p
}