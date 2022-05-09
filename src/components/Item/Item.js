import React from 'react';
import { Card } from 'react-bootstrap';
import './Item.css';
const Item = (props) => {
    const { img, name, description } = props.item;
    return (
        <div className='item'>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top"style={{height:'200px'}} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;