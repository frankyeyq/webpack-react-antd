import React from 'react'
import Logo from '../images/cnodejs_light.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    goIndex() {
        window.location.href = '/'
    }

    render() {
        return (
            <div className="nav-header">
                <div className="container">
                    <img src={Logo} width="120" onClick={this.goIndex}/>
                </div>
            </div>
        )
    }
}

export default Header