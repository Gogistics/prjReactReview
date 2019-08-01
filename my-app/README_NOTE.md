## React Operations:
```
# start the app in dev mode
$ npm start

# test runner in the interactive watch mode (could be integrated into CI/CD)
# Note: 
$ npm test

# generate build files (can be integrated into CI/CD)
# Note: In this tutorial, npm build is integrated into Docker multi-stage build;
#       the build files will be shipped to final stage and servered by Nginx.
$ npm build
```
## JSX:
```
class HelloWorld extends React.Component {
    render() {
        return (<h1 className='large'>Hello World</h1>);
    }
}

// the class above is equivalent to
class HelloWorld extends React.Component {
    render() {
        return (
            React.createElement(
                'h1',
                {className: 'large'},
                'Hello World'
            )
        );
    }
}

// The React.createElement() arguments are described below
* type => (string | React.createClass())
* props => (null | object)
* children => (null | string | React.createClass() | React.createElement())
```

## Bootstrap (UI Layout) & Router (App Routing)
```
# router => react-router-dom
# structure:

<Router>
    <Navbar>
      <Navbar.Brand>React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
        </Nav>
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
```
