import React, { Component } from 'react'
import Show from './Show'

class PreviewPage extends Component {
    showSelected = () => {
        console.log('showSelected')
    }

    showDeleted = () => {
        console.log('showDeleted')
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <Show name="Pizza Cat" selectHandler={this.showSelected} deleteHander={this.showDeleted}/>
                    <Show name="Funny Bunny" selectHandler={this.showSelected} deleteHander={this.showDeleted}/>
                </section>
                <section>
                    <div>
                        <h2>Pizza Cat</h2>
                        <h2>1</h2>
                    </div>
                    <img src="https://caterville.files.wordpress.com/2013/10/fe0c8-pizza-cat.jpg" alt="pizza cat" />
                </section>
            </main>
        )
    }
}

export default PreviewPage