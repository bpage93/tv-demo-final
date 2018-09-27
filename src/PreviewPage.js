import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'

class PreviewPage extends Component {
    static propTypes = {
        tvShows: PropTypes.array.isRequired,
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
        const filteredTVShows = this.props.tvShows.filter(
            (tvShow) => {
                return tvShow.rating < 5
            }
        )
        return filteredTVShows.map((tvShow, i) => {
            return (
                <TVShow key={i} name={tvShow.name} selectHandler={this.tvShowSelected} />
            )
        })
    }

    calculateAvgRating = () => {
        if (this.props.tvShows.length < 1){
            return 0
        } else if (this.props.tvShows.length === 1) {
            return this.props.tvShows[0].rating
        }

        const sumOfRatings = this.props.tvShows.reduce(
            (prevValue, currentValue) => {
                return (prevValue.rating || prevValue) + currentValue.rating
            }
        )
        const avgRating = sumOfRatings / this.props.tvShows.length
        return Math.round(avgRating * 10) /10
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <h3>Avg Rating: {this.calculateAvgRating()}</h3>
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