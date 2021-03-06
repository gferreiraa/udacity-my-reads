import React, {Component} from 'react';
import { update } from '../BooksAPI'
export default class Shelf extends Component {
    handleChange = async e => {
        try {
            const shelf = e.target.value;
            const book = this.props;
            const result = await update(book,shelf);
            this.props.moveBook(book,shelf,result);
        } catch (error){
            console.log(error);
        }
    }
    render() {
        return (
            <li className="has-text-centered column">
                <div className="book">
                    <div className="card__top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})`
                        }}>
                        </div>
                        <div className="card-content">
                            <div className="control">
                                <div className="select">
                                    <select onChange={this.handleChange} value={this.props.shelf}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                            <div className="title is-6 book-title">{this.props.title}</div><br/>    
                            <div className="tag is-warning book-authors">{this.props.authors ? this.props.authors[0] : "No Authors!"}</div>
                    </div>
                </div>
            </li>
        )
    }
}