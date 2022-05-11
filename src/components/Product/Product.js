import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Product = (props) => {
    const { id, name, img, description, price } = props.product;
    return (
        <div className='mt-5 opi'>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                <Button style={{background:'#ff5c00',border:'none'}}>Primary</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;