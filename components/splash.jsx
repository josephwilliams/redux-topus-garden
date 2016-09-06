import React, {Component} from 'react';
import Aquarium from './aquarium';
import { spawnOctopus } from '../actions.js';
import { killOctopus } from '../actions.js';
import Octopus from '../js/octopus';
import Buttons from './buttons';

export default class Splash extends React.Component {
  constructor () {
    super();
    this.state = {
      octopi: []
    };
    this.spawnOctopus = this.spawnOctopus.bind(this);
    this.killOctopus = this.killOctopus.bind(this);
  }

  spawnOctopus () {
    let newState = this.state.octopi;
    newState.push(new Octopus());
    this.setState({ octopi: newState });
  }

  killOctopus () {
    let newState = this.state.octopi;
    newState.pop();
    this.setState({ octopi: newState });
  }

  render () {
    return (
      <div className="splash-container">
        <Aquarium octopi={this.state.octopi}/>
        <Buttons
          spawnOctopus={this.spawnOctopus}
          killOctopus={this.killOctopus}
          octopi={this.state.octopi}
        />
      </div>
    )
  }
}
