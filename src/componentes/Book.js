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
            <li className="level-item has-text-centered">
                <div className="book">
                    <div className="card card__top">
                        <div
                            className="card-image"
                            style={{
                            width: 128,
                            height: 193,
                            margin: 'auto',
                            backgroundImage: `url(${this.props.imageLinks.thumbnail})`
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
                            <div className="title is-6">{this.props.title}</div><br/>    
                            <div className="tag is-warning">{this.props.authors}</div>
                    </div>
                </div>
            </li>
        )
    }
}