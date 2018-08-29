import React, { Component } from 'react';
import {getsearch} from '@/server/jsonp.js'
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'
import "./search.css"
const Item = List.Item;

class search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    search =()=>{
        let val = this.input.value
       getsearch({
            keyword:val
        }).then(({data})=>{
            let d = data[0].RecordDatas
            this.setState({
                list:d
            })
        })
    }
    render() { 
        let {list} = this.state
        console.log(list)
        return ( 
            <div>
                <List>
                    <input type="text" placeholder="搜索" ref={(input)=>this.input = input}/>
                    <button onClick = {this.search}>搜索</button>
                    </List>
                <div className = "searchMon">
                    {
                        list.map((item,i)=>{
                            return ( 
                              <Link key = {i}
                                    to = {{
                                        pathname:'/searchsongs/'+ item.HintInfo
                                    }}
                               >
                                    <List>
                                        <Item>{item.HintInfo}</Item>
                                     </List>
                             </Link>
                        )
                        })                        
                    }
                {/* </List> */}
                <List>
                     <Item>简单爱</Item>
                </List>
                <List>
                     <Item>你还要我怎样</Item>
                </List>
                <List>
                     <Item>类似爱情</Item>
                </List>
                
                </div>
               
            </div>
         )
    }
}
 
export default search;