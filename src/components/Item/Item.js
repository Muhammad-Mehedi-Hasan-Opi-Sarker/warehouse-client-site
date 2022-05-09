import React from 'react';
import { Card } from 'react-bootstrap';

const Item = (props) => {
    const { img, name, description } = props.item;
    return (
        <div className='container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
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