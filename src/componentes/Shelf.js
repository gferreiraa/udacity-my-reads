import React, {Component} from 'react'
import Book from './Book'   

export default class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="title is-4">{ this.props.title }</h2>
                <hr/>
                <div className="container">
                    <ol className="level">
                        {this.props.books && this.props.books.map(book => <Book key={book.id} {...book} moveBook={this.props.moveBook}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}