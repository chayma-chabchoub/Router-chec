import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import "./fondNavbar.css"

// Functional component representing the filter bar for movies
const Filter = ({ onFilterChange }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Form className="d-flex">
          {/* Label and input field for filtering by movie title */}
          <Navbar.Brand >Title:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => onFilterChange('title', e.target.value)}
          />
          {/* Label and input field for filtering by movie rating */}
          <Navbar.Brand >Rating:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => onFilterChange('rating', e.target.value)}
          />
          <Button variant="outline-success" className="Bt">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Filter;
