import Offcanvas from 'react-bootstrap/Offcanvas';

const LoginHeader = ({ closeButton }) => {
    return (
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Login</Offcanvas.Title>
        </Offcanvas.Header>
    )
}

export default LoginHeader;