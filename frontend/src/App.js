import React, {useState} from 'react';
import LoginComponent from './components/js/Login';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import HomeComponent from './components/js/Home';
import SignupComponent from './components/js/Signup';
import ProfileComponent from './components/js/Profile';
import DashboardComponent from './components/js/Dashboard';
import ProfileformComponent from './components/js/Settings';
import PasswordComponent from './components/js/Password';
import AccountComponent from './components/js/Account';
import MyProjects from './components/js/MyProjects';
import PostProjectComponent from './components/js/PostProject';
import ProjectComponent from './components/js/project';
import WorkingComponent from './components/js/HowWorks';

const App = () => {

  const[username,setusername]=useState('')
  const[email,setemail]=useState('')
  const[pwd,setpwd]=useState('')
  const[user_id,setuser_id]=useState(0)
  const[type,settype]=useState('')
  

  const login = () => {
    return (
      <LoginComponent username={username} setusername={setusername} pwd={pwd} setpwd={setpwd}  />
    )
  } 
  const signup = () => {
    return (
      <SignupComponent username={username} setusername={setusername} email={email} setemail={setemail} pwd={pwd} setpwd={setpwd} setuser_id={setuser_id} type={type} settype={settype}/>
    )
  } 
  const profile = () => {
    return(
      <ProfileComponent />
    )
  }
  const dashboard = () => {
    return(
      <DashboardComponent />
    )
  }
  const project= () => {
    return(
      <ProjectComponent  user_id={user_id}/>
    )
  }
  const settings = () => {
    return(
      <ProfileformComponent user_id={user_id}/>
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
  const howWorks = () => {
    return(
      <WorkingComponent />
    )
  }
  const myprojects = () => {
    return(
      <MyProjects/>
    )
  }
  const postproject = () => {
    return(
      <PostProjectComponent user_id={user_id}/>
    )
  }
  return(

    <div>
      
    <BrowserRouter >
    <Switch> 
    <Route exact path = "/" component = {home}/>
    <Route path = "/login" component = {login} />
    <Route path='/signup' component ={signup}/>
    <Route path='/profile' component ={profile}/>
    <Route path='/dashboard' component ={dashboard}/>
    <Route path='/settings' component ={settings}/>
    <Route path='/password' component ={password}/>
    <Route path='/account' component={account}/>
    <Route path='/postProject' component={postproject}/>
    <Route path="/myProjects" component={myprojects}/>
    <Route path="/project" component={project}/>
    <Route path="/howWorks" component={howWorks}/>
    <Redirect to = "/" />
    </Switch>
    </BrowserRouter>
  
    </div>
);}
export default App;