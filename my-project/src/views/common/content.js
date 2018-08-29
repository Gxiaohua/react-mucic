
import React,{Component} from 'react'
import {routes} from '@/router'
import {Route} from 'react-router-dom'
class Con extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content">
              {
                    routes.map((item) => {
                      return (
                        <Route
                            key = {item.path}
                            exact
                            path = {item.path}
                            component = {item.conponent}
                        ></Route>
                      )
                    })                    
                }
            </div>
         )
    }
}
 
export default Con;
/**
 * 
import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { routers } from './index.js'; 
import Header from '@/components/header'
class Routers extends Component {
  render() {
    let {location} = this.props;
    let routerEle = routers.map((e, i) => {
      return <Route exact key={i} path={e.path} component={e.component} />
    });
    let item = routers.filter((item) => {
      return item.path === location.pathname
    })[0];
    let bl = item ? item.nav : false;
    return (
      <div className="content" style={{paddingTop: bl ? '108px' : '50px'}}>
        <Route path='/' render={
          () => {
            return <Header showNav={bl} />
          }
        } />
        {routerEle}
      </div>
    )
  }
}
export default withRouter(Routers);
 * 
 * 
 * 
 */