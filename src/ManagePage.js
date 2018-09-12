import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'

class ManagePage extends Component {
    static propTypes = {
        tvShows: PropTypes.array.isRequired,
        tvShow: PropTypes.object.isRequired,
        tvShowDeleted: PropTypes.func.isRequired,
        saveTVShow: PropTypes.func.isRequired
    }

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageUrlInProgress: 'https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg'
    }

    handleNameChange = (event) => {
        this.setState({
            nameInProgress: event.target.value
        })
    }

    handleRatingChange = (event) => {
        this.setState({
            ratingInProgress: event.target.value
        })
    }

    handleImageUrlChange = (event) => {
        this.setState({
            imageUrlInProgress: event.target.value
        })
    }

    tvShowSelected = () => {
        this.setState({
            nameInProgress: this.props.tvShow.name,
            ratingInProgress: this.props.tvShow.rating,
            imageUrlInProgress: this.props.tvShow.imageUrl
        })
    }

    tvShowDeleted = () => {
        this.props.tvShowDeleted()
    }

    saveTVShow = () => {
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageUrlInProgress: ''
        })

        this.props.saveTVShow({
            name: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            imageUrl: this.state.imageUrlInProgress
        })
    }

    renderTVShows = () => {
        const showsToRender = []

        let i = 0
        while (i < this.props.tvShows.length) {
            console.log("We were here")
            const tvShow = this.props.tvShows[i]
            showsToRender.push(
                <TVShow key={i} name={tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
            )

            i++
        }

        return showsToRender
    }

    // renderTVShows = () => {
    //     const showsToRender = []
    //     for (let i = 0; i < this.props.tvShows.length; i++) {
    //         const tvShow = this.props.tvShows[i] 
    //         showsToRender.push(
    //             <TVShow key={i} name={tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
    //         )
    //     }

    //     return showsToRender
    // }

    // renderTVShows = () => {
    //     const showsToRender = []
    //     for (const tvShow of this.props.tvShows) {
    //         showsToRender.push(
    //             <TVShow key={tvShow.name} name={tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
    //         )
    //     }

    //     return showsToRender
    // }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    {this.renderTVShows()}
                </section>
                <section>
                    <h2>New/Edit</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" value={this.state.nameInProgress} onChange={this.handleNameChange} />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input id="rating" type="text" value={this.state.ratingInProgress} onChange={this.handleRatingChange} />
                        </div>
                        <div>
                            <label htmlFor="image-url">Image Url:</label>
                            <input id="image-url" type="text" value={this.state.imageUrlInProgress} onChange={this.handleImageUrlChange} />
                        </div>
                    </form>
                    <button onClick={this.saveTVShow}>Submit</button>
                </section>
            </main>
        )
    }
}

export default ManagePage