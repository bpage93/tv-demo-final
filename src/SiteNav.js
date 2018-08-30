import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Manage</Link>
                <div id="nav-border">&nbsp;</div>
                <Link to="/preview">Preview</Link>
            </nav>
        )
    }
}

export default SiteNav