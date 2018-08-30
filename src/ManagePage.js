import React, { Component } from 'react'
import Show from './Show'

class ManagePage extends Component {
    showSelected = () => {
        console.log('showSelected')
    }

    showDeleted = () => {
        console.log('showDeleted')
    }

    saveShow = () => {
        console.log('saveShow')
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <Show name="Pizza Cat" allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                    <Show name="Funny Bunny" allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                </section>
                <section>
                    <h2>New/Edit</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" value="Pizza Cat" />
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