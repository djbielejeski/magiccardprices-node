import React, { Component } from 'react';
import Header from '../header/header';
import './app.scss';
import { Sprite } from '../shared';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
        <div className="container-fluid">
          <Header />
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          <div>This "Face" should actually be a face</div>
          <div>
            <i className="material-icons">face</i>
          </div>

          <Sprite  isInlineManaSymbol={true} colorlessNumber={0} />
        </div>
    );
  }
}
