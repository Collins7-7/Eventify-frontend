import React from "react";
import { Navbar, Container } from "react-bootstrap";

const AdminNavbar = () => {

return ( 
<>
<Navbar bg="dark" expand="sm" variant="dark"> 
<Container>
    <Navbar.Brand>
        Admin Navbar
    </Navbar.Brand>
</Container>
</Navbar>
</>
);
}
 
export default AdminNavbar;