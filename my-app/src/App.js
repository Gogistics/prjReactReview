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

// router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {

  fetch('http://localhost/apis')
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });

  function keyUpHandler(refName, e) {
    console.log(refName);
    // prints either LoginInput or PwdInput
  };

  function debounce() {
    //
  }

  return (
    <Router>
        <Navbar bg="light">
          <Navbar.Brand>React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={keyUpHandler}/>
            </Form>
          </Navbar.Collapse>
        </Navbar>

      <Container>
        <Row>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Row>
      </Container>
    </Router>
  );
}

// children components for router
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  // check match
  console.warn(match);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default App;
