
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;
class NewSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {list} = this.props
        return ( 
            <div>
              <List>
                {
                    list.map((val) => {
                        return (
                            <Link key={val.specialid} 
                               to = {{
                                pathname: '/plist/list/' + val.specialid
                               }}
                            >
                                <Item className = "itemIcon"
                                    thumb={val.imgurl.replace('{size}', 400)}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                >
                                {val.specialname}
                                <Brief>{val.playcount}</Brief>
                                </Item>
                            </Link>
                        )
                    })
                }
              </List>
            </div>
         )
    }
}
 
export default NewSongs;
