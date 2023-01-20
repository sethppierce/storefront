import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { removeFromCart } from '../../store/cart';
import './styles.scss'
import { v4 as uuidv4 } from 'uuid';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const SimpleCart = (props) => {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cart);

  return (
    <div className='simpleCart'>
      {cart.length ? (
        <ul>
          {cart.map((product,idx) => (
            <li key={uuidv4()}>
              <p>{product.name}</p>
              <HighlightOffTwoToneIcon data-testid={`remove-cart-icon-${idx}`} color='error' className='removeCart' onClick={()=> dispatch(removeFromCart(product,cart))}/>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}


export default SimpleCart