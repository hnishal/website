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
import SearchprojectComponent from './components/js/SearchProjects';
import BidsComponent from './components/js/Bids';
import ProjectBidsComponent from './components/js/ProjectsBid';

const App = () => {

  const [username, setusername] = useState(localStorage.getItem( 'username' ) || '')
  const [email, setemail] = useState(localStorage.getItem('email') ||'')
  const [user_id, setuser_id] = useState(localStorage.getItem('user_id') || 0)
  const [type, settype] = useState(localStorage.getItem('type') ||'')
  const [project_id,setproject_id] = useState(localStorage.getItem('project_id') || 0)

  

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
  const projectbids = () => {
    // console.log(project_id)
    return(
       <ProjectBidsComponent project_id={project_id}/>
    )
  }
  const dashboard = () => {
    return(
      <DashboardComponent />
    )
  }
  const SearchProjects= () => {
    return(
      <SearchprojectComponent setproject_id={setproject_id} />
    )
  }
  const project= () => {
    return(
      <ProjectComponent  user_id={user_id} project_id={project_id}/>
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
      <AccountComponent user_id={user_id} />
    )
  }
  const bids = () => {
    return(
      <BidsComponent user_id={user_id}/>
    )
  }
  const howWorks = () => {
    return(
      <WorkingComponent />
    )
  }
  const myprojects = () => {
    return(
      <MyProjects user_id={user_id} setproject_id={setproject_id}/>
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
    <Route path="/bids" component={bids}/>
    <Route path="/SearchProjects"  component={SearchProjects}/>
    <Route path="/projectbids" component={projectbids}/>
    <Redirect to = "/" />
    </Switch>
    </BrowserRouter>
  
    </div>
);}
export default App;