import React, {Component} from 'react'

export const MyContext = React.createContext();

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(books => books.shelf === 'currentlyReading');
                const wantToRead = books.filter(books => books.shelf === 'wantToRead');
                const read = books.filter(books => books.shelf === 'read');
                this.setState({ books,currentlyReading, wantToRead, read });
            },
            moveBook: (book, newShelf, allShelfs) => {
                const newBooks = this.state.books.map(allBooks => {
                    const foundId = allShelfs[newShelf].find(
                        bookID => bookID === allBooks.id
                    );
                    if (foundId){
                        allBooks.shelf = newShelf;
                    }
                    return allBooks;
                });
                this.state.addBooks(newBooks);
            }
        };
    }
    render() {
        return (
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}