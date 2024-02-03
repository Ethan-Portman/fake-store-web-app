import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import sunflowerImage from '../images/sunflower.png'

function PlantItem({ plant }) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={plant.image.src} alt={plant.name} />
            <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>
                    Price: {plant.price}
                </Card.Text>
                <Button variant="primary">
                    Add to Cart <Badge bg="secondary">0</Badge>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default PlantItem