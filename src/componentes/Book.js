import React, { Component } from 'react'
import Titles from './StyleComponents'
export default class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <div className="bookshelf-books">
                    <ol>
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}