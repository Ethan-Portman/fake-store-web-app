import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PlantItem from './PlantItem';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const PlantList = () => {
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3004/v1/plants');
                setPlantData(response.data);
            } catch (error) {
                console.log("Error fetching data:", error.message);
            }
        })();
    }, []);


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
