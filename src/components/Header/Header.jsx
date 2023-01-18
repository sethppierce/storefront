import React from 'react'
import './styles.scss'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';

const Header = (props) => {
  const {
    cart
  } = props

  return (
    <AppBar position='static' color='primary'>
      <Grid container >
        <Grid item xs >
          <h1>OUR STORE</h1>
        </Grid>
        <Grid item xs>
          <p id='cart'>CART ({cart.length})</p>
        </Grid>
      </Grid>
    </AppBar>
  )
}

const mapStateToProps = ({cart}) => {
  return {
    cart: cart.cart
  }
}

const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)