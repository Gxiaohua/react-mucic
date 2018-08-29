import React,{Component} from 'react'
import { Tabs, WhiteSpace} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';  //最强大的粘贴库
/*
    <StickyContainer />支持所有有效的<div />道具。
    <Sticky /> 道具
*/ 
import {routes} from '@/router'

/**
 * react-router 提供了一个withRouter组件 
    withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
    无需一级级传递react-router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，
    就可以拿到需要的路由信息react-router 提供了一个withRouter组件 
    withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
    无需一级级传递react-router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，
    就可以拿到需要的路由信息
 */

import { withRouter } from 'react-router-dom'

function renderTabBar(props){
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}>
          <Tabs.DefaultTabBar {...props} /></div>}
      </Sticky>);
}

//找到渲染在导航的数据
let tabs = routes.filter(item => item.route)

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    tabClick=(tabs)=>{
        console.log(this.props)  //this.props包含history,location,match
        let {history} = this.props
        history.push(tabs.path)
    }
    render() { 
        let { location} = this.props;
        // 找到的是访问的路径和路由信息中，如果对应上了找下标
        //不加【0】是一个数组里面包含对象
        let item = tabs.filter(item => item.path === location.pathname)[0];
        //console.log(item)  每一个相对应的项
        let initialPage = 0;
        //如果对应上找相对应的下标
        if(item){
            initialPage = item.index
        }
        return (  
        <div>
            <StickyContainer>
                <Tabs tabs={tabs}
                initialPage={initialPage}
                onTabClick={this.tabClick}
                renderTabBar={renderTabBar}
                >
                </Tabs>
                </StickyContainer>
            <WhiteSpace />
         </div>
   )
    }
}
 
export default withRouter(Tab);