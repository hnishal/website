import React from 'react';
import LoginComponent from './components/js/Login';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import HomeComponent from './components/js/Home';
import SignupComponent from './components/js/Signup';
import ProfileComponent from './components/js/Profile';
import DashboardComponent from './components/js/Dashboard';
import ProfileformComponent from './components/js/Settings';
import PasswordComponent from './components/js/Password';
import NavComponent from './components/js/Nav';
import AccountComponent from './components/js/Account';
import MyProjects from './components/js/MyProjects';
const App = () => {
  const login = () => {
    return (
      <LoginComponent />
    )
  } 
  const Signup = () => {
    return (
      <SignupComponent />
    )
  } 
  const profile = () => {
    return(
      <ProfileComponent />
    )
  }
  const Dashboard = () => {
    return(
      <DashboardComponent />
    )
  }
  const Settings = () => {
    return(
      <ProfileformComponent />
    )
  }
  const password = () => {
    return(
      <PasswordComponent />
    )
  }
  const home = () => {
    return(
      <HomeComponent />
    )
  }
  const account = () => {
    return(
      <AccountComponent />
    )
  }
  const nav = () => {
    return(
      <NavComponent />
    )
  }
  const myprojects = () => {
    return(
      <MyProjects/>
    )
  }
  return(

    <div>
      
    <BrowserRouter >
    <Switch> 
    <Route path = "/home" component = {home} />
    <Route path = "/login" component = {login} />
    <Route path='/Signup' component ={Signup}/>
    <Route path='/profile' component ={profile}/>
    <Route path='/Dashboard' component ={Dashboard}/>
    <Route path='/Settings' component ={Settings}/>
    <Route path='/password' component ={password}/>
    <Route path='/account' component={account}/>
    <Route path="/nav" component={nav}/>
    <Route path="/MyProjects" component={myprojects}/>
    <Redirect to = "/home" />
    </Switch>
    </BrowserRouter>
  
    </div>
);}
export default App;