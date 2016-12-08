import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux'
import {smartOptionsEnum} from './actions'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const COST_PER_SWITCH = 60.00
const COST_PER_SWITCH_INSTALL = 40.00

const COST_PER_THERMOSTAT = 250.00
const COST_PER_THERMOSTAT_INSTALL = 150.00

const COST_PER_SPEAKER = 500.00
const COST_PER_SPEAKER_INSTALL = COST_PER_SPEAKER*0.15

const COST_PER_THREE_EERO = 500.00
const COST_PER_THREE_EERO_INSTALL = 150.00

const COST_PER_ECHO = 180.00
const COST_PER_ECHO_INSTALL = 30.00

const COST_PER_ECHO_DOT = 50.00
const COST_PER_ECHO_DOT_INSTALL = 30.00

const COST_FOR_UTOPIA_EXPERIENCE = 1000.00
const COST_PER_HOME_AUTOMATION_INSTALL = 150.00

class ReviewOptionsTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  numberOfSwitches = () => {
    if (!this.props.options[smartOptionsEnum.LIGHTING].ON)
      return 0
    var rooms = this.props.numberOfRooms
    var switchesPerRoom = 2
    var hallwaySwitches = 2
    var totalSwitches = rooms*switchesPerRoom + hallwaySwitches
    console.log("TOTAL LUTRON SWITCHES = %s", totalSwitches)
    return totalSwitches
  }

  costOfSwitches = () => {
     return this.numberOfSwitches() * (COST_PER_SWITCH + COST_PER_SWITCH_INSTALL)
  }

  numberOfThermostats = () => {
    if (!this.props.options[smartOptionsEnum.THERMOSTAT].ON)
      return 0

     var rooms = this.props.numberOfRooms
     return Math.max(Math.round(rooms/8), 1)   
  }

  costOfThermostats = () => {
     return this.numberOfThermostats() * (COST_PER_THERMOSTAT + COST_PER_THERMOSTAT_INSTALL)
  }

  numberOfSpeakers = () => {
    if (!this.props.options[smartOptionsEnum.AUDIO].ON)
      return 0

     var rooms = this.props.numberOfRooms
     return Math.max(Math.round(rooms/2), 1)   
  }

  costOfSpeakers = () => {
     return this.numberOfSpeakers() * (COST_PER_SPEAKER + COST_PER_SPEAKER_INSTALL)
  }

  numberOfEeros = () => {
    if (!this.props.options[smartOptionsEnum.NETWORK].ON)
      return 0

     var rooms = this.props.numberOfRooms
     return Math.max(Math.ceil(rooms/8), 1)   
  }

  costOfEeros = () => {
     return this.numberOfEeros() * (COST_PER_THREE_EERO + COST_PER_THREE_EERO_INSTALL)
  }

  numberOfEchos = () => {
    if (!this.props.options[smartOptionsEnum.VOICE].ON)
      return 0

     var rooms = this.props.numberOfRooms
     return Math.max(Math.ceil(rooms/8), 1)   
  }

  costOfEchos = () => {
     return this.numberOfEchos() * (COST_PER_ECHO + COST_PER_ECHO_INSTALL)
  }

  numberOfEchoDots = () => {
    if (!this.props.options[smartOptionsEnum.VOICE].ON)
      return 0

     var dots = this.props.numberOfRooms
     return Math.max(dots - this.numberOfEchos(), 0)  
  }

  costOfEchoDots = () => {
     return this.numberOfEchoDots() * (COST_PER_ECHO_DOT + COST_PER_ECHO_DOT_INSTALL)
  }

  costOfUtopiaExperience = () => {
     return COST_FOR_UTOPIA_EXPERIENCE
  }

  costOfHomeAutomation = () => {
      return (
          this.props.numberOfRooms * COST_PER_HOME_AUTOMATION_INSTALL
      )
  }

  totalCostOfDevices = () => {
      return this.costOfUtopiaExperience() +
             this.costOfHomeAutomation() +
             this.costOfEchoDots() + 
             this.costOfEchos() + 
             this.costOfEeros() + 
             this.costOfSpeakers() + 
             this.costOfThermostats() + 
             this.costOfSwitches()
  }   

  render() {
    console.log("*****")
    console.log(this.props)
    console.log("*****")
    return (
      <div>
         <Table multiSelectable={true}>
            <TableHeader 
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
            >
            <TableRow>
                <TableHeaderColumn>Smart Appliance</TableHeaderColumn>
                <TableHeaderColumn>Quantity</TableHeaderColumn>
                <TableHeaderColumn>Cost</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
            <TableRow >
                <TableRowColumn>Lutron Caseta Light Switches</TableRowColumn>
                <TableRowColumn>{this.numberOfSwitches()}</TableRowColumn>
                <TableRowColumn>${this.costOfSwitches()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Ecobee Thermostat</TableRowColumn>
                <TableRowColumn>{this.numberOfThermostats()}</TableRowColumn>
                <TableRowColumn>${this.costOfThermostats()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Sonos 5</TableRowColumn>
                <TableRowColumn>{this.numberOfSpeakers()}</TableRowColumn>
                <TableRowColumn>${this.costOfSpeakers()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Eero Networking</TableRowColumn>
                <TableRowColumn>{3*this.numberOfEeros()}</TableRowColumn>
                <TableRowColumn>${this.costOfEeros()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Amazon Echo</TableRowColumn>
                <TableRowColumn>{this.numberOfEchos()}</TableRowColumn>
                <TableRowColumn>${this.costOfEchos()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Amazon Echo Dot</TableRowColumn>
                <TableRowColumn>{this.numberOfEchoDots()}</TableRowColumn>
                <TableRowColumn>${this.costOfEchoDots()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn>Home Automation</TableRowColumn>
                <TableRowColumn>  </TableRowColumn>
                <TableRowColumn>${this.costOfHomeAutomation()}</TableRowColumn>
            </TableRow>
            <TableRow >
                <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>Utopia Experience <br/>*includes maintenance and service</TableRowColumn>
                <TableRowColumn>  </TableRowColumn>
                <TableRowColumn>${this.costOfUtopiaExperience()}</TableRowColumn>
            </TableRow>
            </TableBody>
        </Table>
        <h3>Total cost is: ${this.totalCostOfDevices()} (taxes not included)</h3>
        <p>For information call us at (301)452-0299</p>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return state
}

export default connect(mapStateToProps)(ReviewOptionsTable)