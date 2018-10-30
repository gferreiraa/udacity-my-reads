import React, { Component } from 'react'
import Titles from './StyleComponents'

import Grid from '@material-ui/core/Grid';
export default class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
            <Grid container>
                <Grid item lg={12}>
                <Titles>Lendo Atualmente:</Titles>
                <div className="bookshelf-books">
                  <ol className="books-grid">
    
                  </ol>
                </div>
                </Grid>
            </Grid>

          </div>
        )
    }
}