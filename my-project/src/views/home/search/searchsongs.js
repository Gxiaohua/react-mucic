import React, { Component } from 'react';
import {songSearch} from '@/server/jsonp.js'
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'
const Item = List.Item;
class searchSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    componentDidMount(){
        let name = this.props.match.params.id
        songSearch({
            keyword:name,
        }).then(({data})=>{
           let n = data.lists
           this.setState({
               list:n
           })
        })
    }
    render() { 
        let {list} = this.state
        console.log(list)
        return ( 
            <div>
                 {
                        list.map((item,i)=>{
                            return ( 
                              <Link key = {i}
                                    to = {{
                                        pathname:'/player/'+ item.FileHash
                                    }}
                               >
                                    <List>
                                        <Item>{item.SongName}</Item>
                                        {/* <Item>{item.FileHash}</Item> */}
                                     </List>
                             </Link>
                        )
                        })                        
                    }
            </div>
         )
    }
}
 
export default searchSongs;