import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';

import Tab from 'react-bootstrap/Tab';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Auth = () => {
    return (
        <Container className='mt-5'>
            <div className='container'>
            </div>
            <Tab.Container id="inner-tabs" defaultActiveKey="first">
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='my-5'>
                    <Tab.Pane eventKey="first">
                        <Login />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Signup />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    )
}

export default Auth;