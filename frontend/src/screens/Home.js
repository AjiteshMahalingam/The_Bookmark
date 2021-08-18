import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

import { listProducts } from '../actions/productActions';


export const Home = () => {
    //The useState() is a Hook that allows you to have state variables in functional components
    //The first element is the initial state and the second one is a function that is used for updating the state.
    //const [state, setState] = useState(initialstate)
    //const [products, setProducts] = useState([]);
    //The Effect Hook lets you perform side effects in function components. 
    // By using this Hook, you tell React that your component needs to do something after render. 
    // React will remember the function you passed (we’ll refer to it as our “effect”), 
    // and call it later after performing the DOM updates. In this effect, we set the document title, 
    // but we could also perform data fetching or call some other imperative API.

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        // const fetchProducts = async() => {
        //     const { data } = await axios.get('/api/products');
        //     setProducts(data);
        // }
        // fetchProducts();
        dispatch(listProducts());
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            { loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : 
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            }   
        </>
    )
}


export default Home
