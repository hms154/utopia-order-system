import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HorizontalLinearStepper from './stepper'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarExampleIcon from './appbar'


const styles = {
  container: {
    textAlign : 'center',
    paddingTop: 100,
  },
}

class App extends Component {
  render() {
    injectTapEventPlugin();

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBarExampleIcon />
            <div style={styles.container}>
              <h1>Utopia Design Studio</h1>
              <HorizontalLinearStepper />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
