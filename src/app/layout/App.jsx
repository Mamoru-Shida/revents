import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar/Navbar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>

        <Route 
          path="/(.+)" 
          render={() => (
            <div>
              <Navbar/>
              <Container className="main">
                <Switch>
                  <Route path='/events' component={EventDashboard}/>
                  <Route path='/event/:id' component={EventDetailedPage}/>
                  <Route path='/people' component={PeopleDashboard}/>
                  <Route path='/plofile/:id' component={UserDetailedPage}/>
                  <Route path='/settings' component={SettingsDashboard}/>
                  <Route path='/createEvent' component={EventForm}/>
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;


