import React, {Component} from 'react';

export default class Shelf extends Component {
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
                            backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                        }}>
                        </div>
                        <div className="card-content">
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                            <div className="title is-6">To Kill a Mockingbird</div><br/>    
                            <div className="tag is-warning" >Harper Lee</div>
                    </div>
                </div>
            </li>
        )
    }
}