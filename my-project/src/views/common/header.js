// 
import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Tabs from './tabs.js'
// import { Link } from './C:/Users/hua/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import { Link} from 'react-router-dom'
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
         <div className = "head">
            <NavBar
              mode="dark"
              leftContent={
                <img alt='' width="145" height="33" src='http://m.kugou.com/v3/static/images/index/logo.png' />
              }
              rightContent={[
                <Link key="0" to={{
                  pathname:'/search'
                }}>
                  <Icon key="0" type="search" style={{ marginRight: '16px' }}/>
                  </Link>
              ]}
            ></NavBar>
            <Tabs></Tabs>
          </div> )
    }
}
 
export default Head;