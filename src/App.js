import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url)
    .then(response => response.data)
    .then((data) => {
      this.setState({ users: data})
      console.log(this.state.users)
    })
  }

  render() {
    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>React Axios Example</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My User</h5>
            </div>
          </div>
        </div>
       </div>
    );
  }
}
export default App;
