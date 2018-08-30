import React, { Component } from 'react'

class PreviewPage extends Component {
    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <button onclick="clickedPizzaCat()">Pizza Cat</button>
                    <button onclick="clickedFunnyBunny()">Funny Bunny</button>
                </section>
                <section>
                    <div>
                        <h2>Pizza Cat</h2>
                        <h2>1</h2>
                    </div>
                    <img src="https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg" />
                </section>
            </main>
        )
    }
}

export default PreviewPage