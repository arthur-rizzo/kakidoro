import React, { Component } from 'react';
import Kakidoro from './Kakidoro';
import KakiAppBar from './KakiAppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Footer from './Footer';
import "./App.css";

class App extends Component {

  state = {

  }

  theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ff6434',
        main: '#dd2c00',
        dark: '#a30000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#be9c91',
        main: '#8d6e63',
        dark: '#5f4339',
        contrastText: '#fff',
      },
    },
  });

  render() {
    return (

      <MuiThemeProvider theme={this.theme}>
          <KakiAppBar></KakiAppBar>
          <br/>
          <div className="App">
            <Kakidoro/>
          </div>
          <Footer/>
      </MuiThemeProvider>
    );
  }
}

export default App;
