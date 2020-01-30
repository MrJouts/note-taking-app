import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Style components
import theme from './components/styles/theme';
import { ButtonIconAdd } from './components/styles/Button';
import { PageTitle } from './components/styles/Title';

import Header from './components/layout/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

class App extends Component {
  state = {
    notes: []
  };

  render() {
    return (
      <ThemeProvider theme={theme} className="App">
        <Header />
        <Router>
          <Route exact path='/'>
            <div className="container">
              <div className="wrapper-title">
                <PageTitle>Notes</PageTitle>
                
                <Link to="/create">
                  <ButtonIconAdd>
                    <i className="fas fa-plus"></i>
                  </ButtonIconAdd>
                </Link>
              </div>
              <Notes />
            </div>
          </Route>
          <Route path="/create" component={AddNote} />
          <Route path="/edit/:id" component={EditNote} />
        </Router>
      </ThemeProvider >
    );
  }
}

export default App;
