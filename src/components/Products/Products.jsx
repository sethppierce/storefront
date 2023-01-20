import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Button, CardActions } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './styles.scss'
import { addToCart } from '../../store/cart';
import { getProducts } from '../../store/reducer';
import { Link } from "react-router-dom";

const Products = (props) => {
  const dispatch = useDispatch();

  const {
    activeCategory,
    activeProducts,
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(activeProducts)
  return (
    <div>
      {activeCategory ?
        <>
          <article>
            <h2>{activeCategory}</h2>
            <p>Category Description Goes Here</p>
          </article>
          <Grid container spacing={25} className='productContainer'>
            {activeProducts?.map((product, idx) => (
              <Grid item key={uuidv4()} xs={3.25}>
                <Card sx={{ minWidth: 275, maxWidth: 500 }} data-testid={`product-card-${idx}`}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random?${product.name}`}  />
                  <CardContent>
                    <h4>{product.name}</h4>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => dispatch(addToCart(product))} data-testid={`add-to-cart-button-${idx}`}>
                      Add to Cart
                    </Button>
                    <Button size="small" color="primary" data-testid={`view-details-button-${idx}`}>
                      <Link to={`/products/${product._id}`}>View Details</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
        :
        null
      }
    </div>
  )
}


export default Products;