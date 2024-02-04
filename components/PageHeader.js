import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageHeader() {
    return (
        <Container fluid className="bg-dark text-light d-flex align-items-center justify-content-center" style={{ height: '30vh' }}>
            <Row>
                <h1 className="text-center display-1">The Plant Store</h1>
            </Row>
        </Container>
    );
}

export default PageHeader;