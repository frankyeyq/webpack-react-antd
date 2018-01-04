function getReplyTime(date) {
    let secs = new Date() - new Date(date)
    let lastTime = []
    let year = parseInt(secs / 1000 / 60 / 60 / 24 / 30 / 12)
    let month = parseInt(secs / 1000 / 60 / 60 / 24 / 30)
    let day = parseInt(secs / 1000 / 60 / 60 / 24)
    let hours = parseInt(secs / 1000 / 60 / 60)
    let minutes = parseInt(secs / 1000 / 60)
    let seconds = parseInt(secs / 1000)
    let lastTimeString = ['年', '个月', '天', '小时', '分钟', '秒']
    let result = ''
    lastTime.push(year, month, day, hours, minutes, seconds)
    lastTime.forEach((item, index) => {
        if (item > 0 && result === '') {
            result = `${item}${lastTimeString[index]}前`
        }
    })
    return result
}

export default getReplyTime