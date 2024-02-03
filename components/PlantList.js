import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PlantItem from './PlantItem';

import sunflowerImage from '../images/sunflower.png'
import carnationImage from '../images/carnation.png'
import tulipImage from '../images/tulip.png'
import lilyImage from '../images/lily.png'
import daffodilImage from '../images/daffodil.png'
import roseImage from '../images/rose.png'

const PlantList = () => {

    const plantData = [
        { id: 0, name: 'Sunflower', price: 29.99, image: sunflowerImage },
        { id: 1, name: 'Carnation', price: 19.99, image: carnationImage },
        { id: 2, name: 'Tulip', price: 29.99, image: sunflowerImage },
        { id: 3, name: 'Lily', price: 19.99, image: tulipImage },
        { id: 4, name: 'Daffodil', price: 19.99, image: lilyImage },
        { id: 5, name: 'Rose', price: 19.99, image: daffodilImage }
    ];

    return (
        <div>
            <Container>
                <h2 className="mt-4 mb-4">Available Plants</h2>
                <Row>
                    {plantData.map((plant) => (
                        <Col key={plant.id} sm={12} md={6} lg={4}>
                            <PlantItem key={plant.id} plant={plant} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PlantList;

// {plantData.map((plant) => (
//     <PlantItem key={plant.id} plant={plant} />
// ))}