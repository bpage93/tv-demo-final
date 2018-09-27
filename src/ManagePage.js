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
    data: []
    }
componentDidMount(){
    const  header = {
            "Application" : "application/json",
            "Content-Type" : "application/json"
        }
    
    fetch("http://localhost:3001", header) 
    .then(response => response.json())
        .then((data) => {
            this.setState ({
                data
            })
            console.log (data)
        }) 
}

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    handleImageUrlChange = (event) => {
        this.setState({
            imgUrl: event.target.value
        })
      }

    // tvShowSelected = () => {
    //     this.setState({
    //         nameInProgress: this.props.tvShow.name,
    //         ratingInProgress: this.props.tvShow.rating,
    //         imageUrlInProgress: this.props.tvShow.imageUrl
    //     })
    // }

    tvShowDeleted = () => {
        this.props.tvShowDeleted()
    }

    saveTVShow = () => {
        const body = {
            method : "POST", 
            body : JSON.stringify(this.state),
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
            }
        fetch("http://localhost:3001/managePage", body) 
        .then(response => response.json()) 
        .then( (data) => {
                this.setState({
                    data
                })
            }
        )
        // this.setState({
        //     nameInProgress: '',
        //     ratingInProgress: '',
        //     imageUrlInProgress: ''
        // })

        // this.props.saveTVShow({
        //     name: this.state.nameInProgress,
        //     rating: Number(this.state.ratingInProgress),
        //     imageUrl: this.state.imageUrlInProgress
        // })
    }

    renderTVShows = () => {
        console.log(this.state)
        if(this.state.data)
        return this.state.data.map(
            (tvShow, i) => {
                return (
                    <TVShow key={i} name={tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                )
            }
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
                    <h2>New/Edit</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text"  onChange={this.handleNameChange} />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input id="rating" type="text"onChange={this.handleRatingChange} />
                        </div>
                        <div>
                            <label htmlFor="image-url">Image Url:</label>
                            <input id="image-url" type="text"  onChange={this.handleImageUrlChange} />
                        </div>
                    </form>
                    <button onClick={this.saveTVShow}>Submit</button>
                </section>
            </main>
        )
    }
}

export default ManagePage