import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginButton from './LoginButton';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

const LoginOffCanvas = () => {
    const [showLoginBtn, setShowLoginBtn] = useState(false);
    const handleClose = () => setShowLoginBtn(false);
    const handleShow = () => setShowLoginBtn(true);

    return (
        <>
            <LoginButton handleShow={handleShow} />

            <Offcanvas show={showLoginBtn} onHide={handleClose} placement="end">
                <LoginHeader closeButton={handleClose} />

                <Offcanvas.Body>
                    <LoginForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default LoginOffCanvas;