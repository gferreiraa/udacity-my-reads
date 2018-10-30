import React, { Component } from 'react'

import Book from './Book'
import Titles from './StyleComponents'
export default class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
            <Titles>Lendo Atualmente:</Titles>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book></Book>
              </ol>
            </div>
          </div>
        )
    }
}