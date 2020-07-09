import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect} from 'react-redux-firebase';
import Product from './Product';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Spinner from '../../Spinner';

export default function ProductList() {
  useFirestoreConnect([
    { collection: "products" }
  ]);
 //const products= false;
 const products = useSelector(state => state.firestore.ordered.products);
 console.log(products);

  if (!products) return Array.from(new Array(16)).map(index=>(
    <Box key={index} width="24%" p={0.5} >
    <Skeleton animation="wave" variant="rect" width="100%" height={300} />
    <Skeleton animation="wave" width="80%" />
    <Skeleton animation="wave" width="60%"/>
    <Skeleton animation="wave" width="80%"/>
    <Skeleton animation="wave" />
    </Box>
  ));

  return products.map(p =>(
      <Product product={p} key={p.id} />
  ))
};


