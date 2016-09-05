import React, {Component} from 'react';
import Aquarium from './aquarium';

export default class Splash extends React.Component {
  constructor () {
    super();
  }

  spawnOctopus () {

  }

  killOctopus () {

  }

  render () {
    return (
      <div className="splash-container">
        <Aquarium />
        <div className="button-container">
          <button onClick={() => spawnOctopus()}>
            spawn octopus
          </button>
          <button onClick={() => killOctopus()}>
            kill octopus
          </button>
        </div>
      </div>
    )
  }
}
