import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'

const Item = List.Item;

class Songnew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
          }
    }
    render() { 
        let {Songnew} = this.props
        console.log(Songnew)
        return ( <div>
            <List>
                {
                    Songnew.map(item =>{
                        return (
                            <Link key = {item.audio_id}
                                    to = {{
                                        pathname:'/player/'+ item.hash
                                    }}
                            >
                             <Item
                                key={item.filename}
                                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                                onClick={() => {}}
                                arrow="horizontal"
                                >
                                {item.filename}
                             </Item>
                             </Link>
                        )
                    })
                }
           
          </List>
          </div> )
    }
}
 
export default Songnew;
