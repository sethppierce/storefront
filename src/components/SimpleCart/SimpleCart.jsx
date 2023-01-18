import React from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';
import './styles.scss'
import { v4 as uuidv4 } from 'uuid';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const SimpleCart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div className='simpleCart'>
      {cart.length ? (
        <ul>
          {cart.map((product,idx) => (
            <li key={uuidv4()}>
              <p>{product.name}</p>
              <HighlightOffTwoToneIcon data-testid={`remove-cart-icon-${idx}`} color='error' className='removeCart' onClick={()=> removeFromCart(product)}/>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cart
  }
}

const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)