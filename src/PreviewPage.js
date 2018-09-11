import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Show from './Show'

class PreviewPage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired
    }

    state = {
        selectedShow: {
            name: '',
            rating: '',
            imageUrl: ''
        }
    }

    showSelected = () => {
        this.setState({
            selectedShow: {
                name: this.props.show.name,
                rating: this.props.show.rating,
                imageUrl: this.props.show.imageUrl
            }
        })
    }

    renderShows = () => {
        return (
            <Show name={this.props.show.name} selectHandler={this.showSelected} />
        )
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    {this.renderShows()}
                </section>
                <section>
                    <div>
                        <h2>{this.state.selectedShow.name}</h2>
                        <h2>Rating: {this.state.selectedShow.rating}</h2>
                    </div>
                    <img src={this.state.selectedShow.imageUrl} alt="Preview of show" />
                </section>
            </main>
        )
    }
}

export default PreviewPage