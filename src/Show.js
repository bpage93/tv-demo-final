import React, { Component } from 'react'

class Show extends Component {
    renderDelete = () => {
        if (this.props.allowDelete === true)
            return (<button onClick={this.props.deleteHandler}>-</button>)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}

export default Show