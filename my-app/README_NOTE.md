## React Operations:
```
# start the app in dev mode (for development locally)
$ npm start

# lintinga React app; in this tutorial, eslint and eslint-plugin-react are installed for linting
# add lint to package.json 
...
  "scripts": {
    ...
    "lint": "eslint src/**/*.js"
  },
...

# add .eslint to the project root dir
{
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "fetch": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react/jsx-curly-spacing": [ 2, "never" ],
    "react/jsx-tag-spacing": [ 2, {
      "beforeClosing": "never",
      "beforeSelfClosing": "always",
      "closingSlash": "never",
      "afterOpening": "never"
    }],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 2,
      "when": "always"
    }],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "template-curly-spacing": [ 2, "always" ],
    "space-before-blocks": [ 2, "always" ],
    "object-curly-spacing": [ 2, "always" ],
    "array-bracket-spacing": [ 2, "always" ],
    "computed-property-spacing": [ 2, "always" ]
  }
}

$ npm run lint

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

## Lifecycycle
In applications with many components, it's very important to free up resources taken by the components when they are destroyed.

constructor() {
  // init
}

componentDidMount() {
  // start doing something when components are ready
}

componentWillUnmount() {
  // start cleaning up before component gets destroyed
}

## State management
React stores data locally at this.state and this.props; both objects may be updated asynchronously because React may batch multiple setState() calls into single update for performance.
