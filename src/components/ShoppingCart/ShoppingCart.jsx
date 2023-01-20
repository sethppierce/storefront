import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './styles.scss'

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const { cart } = useSelector((state) => state.cart)


  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };



  return (
    <div className='orderContainer'>
      <div>
        <h3>Order Summary</h3>
        {
          cart.map((product, index) => (
            <div key={`category-${index}`} className='orderItems'>
              <p >Item: {product.name}</p>
              <p >Price: ${product.price}</p>
            </div>
          ))
        }
        <p>Total: ${total}</p>
      </div>
      <form >
        <div className='billingInfo'>
          <h3>Billing Information</h3>
          <div>
            <label >Full Name:</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formValues.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >Address:</label>
            <input
              type='text'
              id='address'
              name='address'
              value={formValues.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >City:</label>
            <input
              type='text'
              id='city'
              name='city'
              value={formValues.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >State:</label>
            <input
              type='text'
              id='state'
              name='state'
              value={formValues.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >Zip:</label>
            <input
              type='text'
              id='zip'
              name='zip'
              value={formValues.zip}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='paymentInformation'>
          <h3>Payment Information</h3>
          <div>
            <label >Card Number:</label>
            <input
              type='text'
              id='cardNumber'
              name='cardNumber'
              value={formValues.cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >Expiration Date:</label>
            <input
              type='text'
              id='expirationDate'
              name='expirationDate'
              value={formValues.expirationDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label >CVV:</label>
            <input
              type='password'
              id='cvv'
              name='cvv'
              value={formValues.cvv}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
        <Button type='submit'>Checkout</Button>
    </div>
  )
}



export default Checkout;