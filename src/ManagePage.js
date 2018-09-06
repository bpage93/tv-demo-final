import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Show from './Show'

class ManagePage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired,
        showDeleted: PropTypes.func.isRequired,
        saveShow: PropTypes.func.isRequireds
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

    showSelected = () => {
        this.setState({
            nameInProgress: this.props.show.name,
            ratingInProgress: this.props.show.rating,
            imageUrlInProgress: this.props.show.imageUrl
        })
    }

    showDeleted = () => {
        this.props.showDeleted()
    }

    saveShow = () => {
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageUrlInProgress: ''
        })

        this.props.saveShow({
            name: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            imageUrl: this.state.imageUrlInProgress
        })
    }

    renderShows = () => {
        return (
            <Show name={this.props.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
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
                    <button onClick={this.saveShow}>Submit</button>
                </section>
            </main>
        )
    }
}

export default ManagePage