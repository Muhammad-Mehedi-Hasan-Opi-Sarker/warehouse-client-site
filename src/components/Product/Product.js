import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Product = (props) => {
    const { _id, name, img, description, price } = props.product;
    const navigate =useNavigate();
    const handleUpdate=(id)=>{
        navigate(`/inventory/${id}`)
    }
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
                <Button onClick={()=>handleUpdate(_id)} style={{background:'#ff5c00',border:'none'}}>Primary</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;