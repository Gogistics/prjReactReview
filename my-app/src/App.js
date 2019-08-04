import React from 'react';
import logo from './logo.svg';
import './App.css';

// bootstrap
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl
} from 'react-bootstrap';

// custom
import Button from 'components/Button';
import {
    Home,
    About,
    LoginForm,
    Topics,
    Topic
} from 'components/Content';

import {
  debounce,
  throttle
} from 'utils/Performance';
import {
  promisify
} from 'utils/Concurrency';

// router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // text input
    this.textInput = React.createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(evt) {
    // ajax
    if (typeof this.textInput.current.value == 'string' &&
        this.textInput.current.value.length > 0) {
      fetch('http://localhost/apis/' + this.textInput.current.value)
        .then(res => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

  render() {
    return (
      <Router>
        <Navbar bg="light">
          <Navbar.Brand>React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/login">Login</Link></Nav.Link>
              <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                ref={this.textInput}
                onChange={debounce(this.handleOnChange, 600)}
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginForm} />
              <Route path="/topics" component={Topics} />
            </Col>
          </Row>
        </Container>
      </Router>
    )
  }
}

export default App;
