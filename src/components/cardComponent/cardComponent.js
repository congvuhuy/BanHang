import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pro1 from '../../assets/images/pro1.jpg';

const CardComponent=()=>{
    return(
        <Card className='cardItems'>
            <Card.Img variant="top" src={pro1} />
            <Card.Body>
                <Card.Title>Iphone15</Card.Title>
                <Card.Text>
                    Good for children
                </Card.Text>
                <Card.Text>
                    50.000.000đ
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
          
        </Card>
        
    )
}
export default CardComponent;