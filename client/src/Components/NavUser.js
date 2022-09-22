import {Navbar,Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const NavUser=()=>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/UsersList'>List Users</Nav.Link>
            <Nav.Link as={Link} to='/UserAdd'>Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser