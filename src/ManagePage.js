import React, { Component, Fragment } from 'react'
import Show from './Show'

class ManagePage extends Component {
    state = {
        nameInProgress: '',
        show: {
            name: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            nameInProgress: event.target.value
        })
    }

    showSelected = () => {
        this.setState({
            nameInProgress: this.state.show.name
        })
    }

    showDeleted = () => {
        this.setState({
            show: {
                name: ''
            }
        })
    }

    saveShow = () => {
        this.setState({
            nameInProgress: '',
            show: {
                name: this.state.nameInProgress
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
                            <input id="rating" type="text" value="1" />
                        </div>
                        <div>
                            <label htmlFor="image-url">Image Url:</label>
                            <input id="image-url" type="text" value="https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg" />
                        </div>
                    </form>
                    <button onClick={this.saveShow}>Submit</button>
                </section>
            </main>
        )
    }
}

export default ManagePage