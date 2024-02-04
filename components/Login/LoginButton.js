import Button from 'react-bootstrap/Button';

const LoginButton = ({ handleShow }) => {
    return (
        <Button variant="outline-warning" className="position-fixed top-0 end-0 m-4" onClick={handleShow}>
            Shopping Cart
        </Button>
    );
}

export default LoginButton;