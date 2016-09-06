import React from 'react';

export default class Buttons extends React.Component {
  constructor (props) {
    super(props);
  }

  renderButtons () {
    if (this.props.octopi.length === 0) {
      return (
        <div className="button-container">
          <button onClick={() => this.props.spawnOctopus()}>
            spawn octopus
          </button>
        </div>
      )
    } else {
      return (
        <div className="button-container">
          <button onClick={() => this.props.spawnOctopus()}>
            spawn octopus
          </button>
          <button onClick={() => this.props.killOctopus()}>
            kill octopus
          </button>
        </div>
      )
    }
  }

  render () {
    return this.renderButtons();
  }
}
