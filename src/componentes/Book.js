import React, { Component } from 'react'

export default class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Lendo Atualmente</h2>
                <div className="bookshelf-books">
                    <ol>
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}