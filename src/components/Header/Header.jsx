import React from 'react'
import './styles.scss'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <AppBar position='static' color='primary'>
      <Grid container >
        <Grid item xs >
          <h1>OUR STORE</h1>
        </Grid>
        <Grid item xs>
          <p id='cart'>CART ({0})</p>
        </Grid>
      </Grid>
    </AppBar>
  )
}
