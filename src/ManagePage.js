import React, { Component, Fragment } from 'react'
import Show from './Show'

class ManagePage extends Component {
    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageUrlInProgress: 'https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg',
        show: {
            name: '',
            rating: '',
            imageUrl: '',
        }
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
            nameInProgress: this.state.show.name,
            ratingInProgress: this.state.show.rating,
            imageUrlInProgress: this.state.show.imageUrl
        })
    }

    showDeleted = () => {
        this.setState({
            show: {
                name: '',
                rating: '',
                imageUrl: ''
            }
        })
    }

    saveShow = () => {
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageUrlInProgress: '',
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                imageUrl: this.state.imageUrlInProgress
            }
        })
    }

    renderShows = () => {
        return (
            <Show name={this.state.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
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