import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import DropDownMenuLongMenuExample from './selectfield'
import SmartFeatureToggle from './smartfeaturetoggle'
import ReviewOptionsTable from './reviewoptionstable'
import {smartOptionsEnum} from './actions'
import SmartFeatureCard from './smartfeaturecard'
import { Flex, Box } from 'reflexbox'

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.askForNumberOfRooms();
      case 1:
        return this.askForSmartFeatureToggles();
      case 2:
        return this.showOptionsTable();
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  askForNumberOfRooms() {
    return (         
        <div>
          <h2>Tell us about your home?</h2> 
          <DropDownMenuLongMenuExample />
        </div>
        );
  }

  askForSmartFeatureToggles() {
    return (         
        <div>
          <h2>What would you like in your smart home?</h2>
          {this.showSmartFeatureToggle()}
        </div>
        );
  }

  showSmartFeatureToggle() {
    return (
      <div>
        <Flex wrap>
          <Box col={12} lg={6} sm={6} p={1}>
            <SmartFeatureCard img="icon_bulb.png" name="Lighting" disabled={false} type={smartOptionsEnum.LIGHTING}/>
          </Box>
          <Box col={12} lg={6} sm={6} p={1}>          
            <SmartFeatureCard img="thermostat.png" name="Thermostat" disabled={false} type={smartOptionsEnum.THERMOSTAT}/>
          </Box>
          <Box col={12} lg={6} sm={6} p={1}>
            <SmartFeatureCard img="sonos.png" name="Integrated Audio" disabled={false} type={smartOptionsEnum.AUDIO}/>
          </Box>
          <Box col={12} lg={6} sm={6} p={1}>     
            <SmartFeatureCard img="network.png" name="Network" disabled={true} type={smartOptionsEnum.NETWORK}/>
          </Box>
          <Box col={12} lg={6} sm={6} p={1}>
            <SmartFeatureCard img="voice-control.png" name="Voice Integration" disabled={true} type={smartOptionsEnum.VOICE}/>
          </Box>
          <Box col={12} lg={6} sm={6} p={1}>   
            <SmartFeatureCard img="utopiahomes.png" name="Utopia Experience" disabled={true} type={smartOptionsEnum.UTOPIA}/>
          </Box>
        </Flex>
      </div>
    )
  }

  showOptionsTable() {
    return (         
        <div>
          <h2>Here is the home we have designed for you</h2> 
          <ReviewOptionsTable />
        </div>
        );
  }  

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Your Home</StepLabel>
          </Step>
          <Step>
            <StepLabel>Smart Options</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;