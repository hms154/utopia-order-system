import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {updateRooms} from './actions'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';

const items = [];
for (let i = 0; i < 26; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i} Rooms`} />);
}

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
class DropDownMenuLongMenuExample extends Component {
  constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => {
    this.props.dispatch(updateRooms(value))
  };

  render() {
    return (
      <div>
        <SelectField
            value={this.props.numberOfRooms}
            onChange={this.handleChange}
            maxHeight={200}
        >
            {items}
        </SelectField>
      </div>
    );
  }
}
function mapStateToProps(state) {

  return state
}

export default connect(mapStateToProps)(DropDownMenuLongMenuExample)