import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
import {toggleSmartOption, smartOptionsEnum} from './actions'
import { connect } from 'react-redux'

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

class SmartFeatureToggle extends Component {
  constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => {
    this.props.dispatch(toggleSmartOption(this.props.type))
  };

  render() {
    return (
    <div style={styles.block}>
        <Toggle
        label={this.props.name}
        style={styles.toggle}
        disabled={this.props.disabled}
        onToggle={this.handleChange}
        toggled={this.props.options[this.props.type].ON}
        />
    </div>
    );
  }
}
function mapStateToProps(state) {

  return state
}

export default connect(mapStateToProps)(SmartFeatureToggle)