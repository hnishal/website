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
import ProposalComponent from './components/js/proposal';
import SearchprojectComponent from './components/js/SearchProjects';

const App = () => {

  const [username, setusername] = useState(localStorage.getItem( 'username' ) || '')
  const [email, setemail] = useState(localStorage.getItem('email') ||'')
  const [user_id, setuser_id] = useState(localStorage.getItem('user_id') || 0)
  const [type, settype] = useState(localStorage.getItem('type') ||'')
  

  const login = () => {
    return (
      <LoginComponent   />
    )
  } 
  const signup = () => {
    return (
      <SignupComponent username={username} setusername={setusername} email={email} setemail={setemail} user_id={user_id} setuser_id={setuser_id} type={type} settype={settype}/>
    )
  } 
  const profile = () => {
    return(
      <ProfileComponent  user_id={user_id}/>
    )
  }
  const dashboard = () => {
    return(
      <DashboardComponent />
    )
  }
  const SearchProjects= () => {
    return(
      <SearchprojectComponent/>
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
      <PasswordComponent user_id={user_id}/>
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
      <MyProjects user_id={user_id}/>
    )
  }
  const proposal = () => {
    return(
      <ProposalComponent/>
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
    <Route path="/proposal" component={proposal}/>
    <Route path="/SearchProjects"  component={SearchProjects}/>
    <Redirect to = "/" />
    </Switch>
    </BrowserRouter>
  
    </div>
);}
export default App;