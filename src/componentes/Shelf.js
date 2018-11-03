import React, {Component} from 'react'
import Book from './Book'   

export default class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="title is-4">Currently Reading</h2>
                <div className="container">
                    <ol className="level">
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}
