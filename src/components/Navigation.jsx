import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Layers, Sparkles, Bell } from 'lucide-react';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="tw-shadow-md">
      <Container>
        <Navbar.Brand href="#home" className="tw-flex tw-items-center tw-gap-2">
          <Layers className="tw-text-cyan-400" size={24} />
          <span className="tw-font-bold tw-tracking-wide">React + Bootstrap + TW</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto tw-items-center tw-gap-3">
            <Nav.Link href="#features" className="tw-flex tw-items-center tw-gap-1.5 hover:tw-text-cyan-300">
              <Sparkles size={16} /> Badge
            </Nav.Link>
            
            <div className="w-relative tw-cursor-pointer tw-text-gray-300 hover:tw-text-white tw-p-2">
              <Bell size={18} />
              <Badge 
                bg="danger" 
                pill 
                className="tw-absolute tw-top-0 tw-right-0 tw-text-[10px] tw-scale-90"
              >
                3
              </Badge>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}