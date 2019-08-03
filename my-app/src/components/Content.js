import React from 'react';
// router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import {
  debounce,
  throttle
} from 'utils/Performance';


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

// About
class Table extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Alan', age: 21, email: 'alan@email.com' },
            { id: 2, name: 'Allen', age: 19, email: 'allen@email.com' },
            { id: 3, name: 'Cindy', age: 16, email: 'cindy@email.com' },
            { id: 4, name: 'Judy', age: 25, email: 'judy@email.com' }
         ]
      }
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Table />
    </div>
  );
}

class LoginForm extends React.Component {

 constructor(props){
   super(props);
   this.state = { username: '' };
 }

  updateText = debounce(function (val) {
    if (val.length < 1) {
      this.setState({ username: '', initial: '', isValidInput: '' });
      return;
    }
    const pattern = /^[0-9a-zA-Z\s]+$/;
    const isValidInput = val.match(pattern) ? 'Valid' : 'Invalid';
    let initials = val.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

    this.setState({ username: val, initial: initials, isValidInput: isValidInput });
    console.log('value: ', val);
  }, 600);

  handleChange = (evt) => {
    this.updateText(evt.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input
                type="text"
                name="username"
                class="form-control"
                id="username"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>

        <h3>Your username is: {this.state.isValidInput}</h3>
        <h3>Initial: {this.state.initial}</h3>
      </React.Fragment>
    );
  }
}


// Topics
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

export {
    Home,
    About,
    LoginForm,
    Topics,
    Topic
}