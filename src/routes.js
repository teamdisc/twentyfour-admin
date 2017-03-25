import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Auth from './Auth';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/'
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Forms from './views/Components/Forms/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'
import FontAwesome from './views/Icons/FontAwesome/'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/'
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import Widgets from './views/Widgets/'

import ManageExhibition from './views/Exhibition/ManageExhibition'
import ManageBooth from './views/Booth/ManageBooth'
import ExhibitionList from './views/Exhibition/ExhibitionList'
import BoothList from './views/Booth/BoothList'
import AddExhibition from './views/Exhibition/AddExhibition'

export default class App extends Component {

  requireAuth = (nextState, replace) => {
    if(!Auth.isAuthened()) {
      replace({
        pathname: '/account/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" name="Home" component={Full} onEnter={this.requireAuth}>
          <IndexRoute component={Dashboard}/>
          <Route path="dashboard" name="Dashboard" component={Dashboard}/>
          <Route path="components/" name="Components">
            <IndexRoute component={Buttons}/>
            <Route path="buttons" name="Buttons" component={Buttons}/>
            <Route path="cards" name="Cards" component={Cards}/>
            <Route path="forms" name="Forms" component={Forms}/>
            <Route path="modals" name="Modals" component={Modals}/>
            <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
            <Route path="switches" name="Swithces" component={Switches}/>
            <Route path="tables" name="Tables" component={Tables}/>
            <Route path="tabs" name="Tabs" component={Tabs}/>
          </Route>

          <Route path="exhibition/" name="Exhibition">
            <IndexRoute component={ExhibitionList}/>
            <Route path=":exhibitionId/" name="Manage">
              <IndexRoute component={ManageExhibition}/>
              <Route path="booth" name="Booth" component={BoothList}/>
              <Route path="booth(/:boothId)" name="Manage Booth" component={ManageBooth}/>
            </Route>
            <Route path="add" name="Add" component={AddExhibition}/>
          </Route>

          <Route path="booth/" name="Booth">
            <IndexRoute component={ManageBooth}/>
            <Route path="manage" name="Manage" component={ManageBooth}/>
          </Route>

          <Route path="icons/" name="Icons">
            <IndexRoute component={FontAwesome}/>
            <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
            <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
          </Route>
          <Route path="widgets" name="Widgets" component={Widgets}/>
          <Route path="charts" name="Charts" component={Charts}/>
        </Route>
        <Route path="account" name="Account" component={Simple}>
          <IndexRoute component={Login}/>
          <Route path="login" name="Login" component={Login}/>
        </Route>
        <Route path="pages" name="Pages" component={Simple}>
          {/* <IndexRoute component={Page404}/> */}
          <Route path="login" name="Login Page" component={Login}/>
          <Route path="register" name="Register Page" component={Register}/>
          <Route path="404" name="Page 404" component={Page404}/>
          <Route path="500" name="Page 500" component={Page500}/>
        </Route>
        <Route path="*" name="Page 404" component={Simple}>
          <IndexRoute component={Page404}/>
        </Route>
      </Router>
    );
  }

}
