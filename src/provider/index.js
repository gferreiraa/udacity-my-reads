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
            }
        }
    }
    render() {
        return (
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}