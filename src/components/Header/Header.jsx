import React from 'react'
import './styles.scss'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Header = (props) => {
  const {
    cart
  } = props

  return (
    <AppBar position='static' color='primary'>
      <Grid container >
        <Grid item xs >
          <Link id='link' to={'/'}>OUR STORE</Link>
        </Grid>
        <Grid item xs>
        <Link id='cart' to={'/cart'}>CART ({cart.length})</Link>
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