import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'

class PreviewPage extends Component {
    static propTypes = {
        tvShow: PropTypes.object.isRequired
    }

    state = {
        selectedTVShow: {
            name: '',
            rating: '',
            imageUrl: ''
        }
    }

    tvShowSelected = () => {
        this.setState({
            selectedTVShow: {
                name: this.props.tvShow.name,
                rating: this.props.tvShow.rating,
                imageUrl: this.props.tvShow.imageUrl
            }
        })
    }

    renderTVShows = () => {
        return (
            <TVShow name={this.props.tvShow.name} selectHandler={this.tvShowSelected} />
        )
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    {this.renderTVShows()}
                </section>
                <section>
                    <div>
                        <h2>{this.state.selectedTVShow.name}</h2>
                        <h2>Rating: {this.state.selectedTVShow.rating}</h2>
                    </div>
                    <img src={this.state.selectedTVShow.imageUrl} alt="Preview of TV Show" />
                </section>
            </main>
        )
    }
}

export default PreviewPage