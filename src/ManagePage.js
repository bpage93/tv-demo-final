import React, { Component } from 'react'

class ManagePage extends Component {
    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <div>
                        <button onClick="clickedPizzaCat()">Pizza Cat</button>
                        <button onClick="clickedDeletePizzaCat()">-</button>
                    </div>
                    <div>
                        <button onClick="clickedFunnyBunny()">Funny Bunny</button>
                        <button onClick="clickedDeleteFunnyBunny()">-</button>
                    </div>
                </section>
                <section>
                    <h2>New/Edit</h2>
                    <form>
                        <div>
                            <label for="name">Name:</label>
                            <input id="name" type="text" value="Pizza Cat" />
                        </div>
                        <div>
                            <label for="rating">Rating:</label>
                            <input id="rating" type="text" value="1" />
                        </div>
                        <div>
                            <label for="image-url">Image Url:</label>
                            <input id="image-url" type="text" value="https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg" />
                        </div>
                    </form>
                    <button onClick={this.clickedSubmit}>Submit</button>
                </section>
            </main>
        )
    }
}

export default ManagePage