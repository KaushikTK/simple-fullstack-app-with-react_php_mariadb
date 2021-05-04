import React, { useState } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Add from './Add';
import View from './View';
import ViewAll from './ViewAll';

const NavBar = (props)=>{

    const [view,setView] = useState('');
    const [add,setAdd] = useState('active');
    const [viewAll,setViewAll] = useState('');

    return(
    <>
    <Router>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm'>
          <ul className='nav nav-tabs nav-justified'>
            <li className={`nav-item nav-link ${add}`}><Link to="/add">Add</Link></li>
            <li className={`nav-item nav-link ${view}`}><Link to="/view">View</Link></li>
            <li className={`nav-item nav-link ${viewAll}`}><Link to='/view_all'>View All</Link></li>
          </ul>
        </div>
      </div>
    </div>

    <Switch>
        <Route exact path='/add'>
            <Add active={[setAdd,setView,setViewAll]}/>
        </Route>
        <Route exact path='/view'>
            <View active={[setView,setAdd,setViewAll]}/>
        </Route>
        <Route exact path='/view_all'>
            <ViewAll active={[setViewAll,setView,setAdd]}/>
        </Route>
        <Redirect to='/add'></Redirect>
    </Switch>

    </Router>

    </>
    )
}

export default NavBar;