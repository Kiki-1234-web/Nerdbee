import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Form, Button } from 'react-bootstrap';

export default function Carousal() {
  return (
    <div>
      <Carousel id="carouselExampleControls">
        <Carousel.Item>
          <img
            src="https://source.unsplash.com/random/900×700/?books"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: '500px' }}
          />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success" className="text-light bg-dark" type="submit">
                Search
              </Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://source.unsplash.com/random/900x700/?books"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: '500px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://source.unsplash.com/random/900x700/?books"
            className="d-block w-100"
            alt="..."
            style={{ maxHeight: '500px' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
