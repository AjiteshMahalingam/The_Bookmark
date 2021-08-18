import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({history, match}) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    
    const productDetails = useSelector(state => state.productDetails);
    const { loading, product, error } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        //React Router provides us with a history object, which is accessible by passing this object into each route as a prop. 
        //This history object lets us manually control the history of the browser.
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    const width = "100%";
    return (
        <>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            { loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    <Col md={4} className="text-center">
                        <Image src={product.image} alt={product.name} fluid></Image>
                    </Col>
                    <Col md={5}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                                <h4>{product.author}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span>Price : </span>
                                <span>{product.price}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{product.description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Published by : {product.publisher}</p>
                                <p>Genre : {product.genre}</p>
                                <p>Format : {product.format}</p>
                                <p>Pages : {product.pages}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price : </Col>
                                        <Col>Rs {product.price}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status : </Col>
                                        <Col>{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty : </Col>
                                            <Col>
                                                <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(x => (
                                                        <option key={x+1} value={x+1}>{x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button type="button" className="btn-block" style={{width}} disabled={product.countInStock === 0 ? 'disabled' : ''} onClick={addToCartHandler}>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            }
        </>
    )
}

// Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.

export default ProductScreen
