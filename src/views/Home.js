import React, {Component} from 'react'
import Navbar from "../componentes/NavBar"
import Shelf from '../componentes/Shelf';
import Footer from '../componentes/Footer';
import FAB from '../componentes/FAB';

import { getAll} from '../BooksAPI';

export default class Home extends Component {
    async componentDidMount(){
        try {
            const books = await getAll();
            this.props.addBooks(books);
        }
        catch( error ){
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                    <Shelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook} />
                    <Shelf title="Want to Read" books={this.props.wantToRead} moveBook={this.props.moveBook}/>
                    <Shelf title="Read" books={this.props.read} moveBook={this.props.moveBook} />
                <FAB/>
                <Footer/>
            </div>
        );
    }
}