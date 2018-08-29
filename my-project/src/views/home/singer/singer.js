
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
const Item = List.Item;
class NewSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {list} = this.props
        return ( 
             <List className = "itemIcon">
                {
                    list.map(item => {
                        return (
                            <Link key={item.classid} to={{
                                pathname: '/singer/list/' + item.classid,
                              }}>
                            <Item 
                            >{item.classname}
                            </Item>
                            </Link>
                        )
                    })
                }
            </List>
         )
    }
}
 
export default withRouter(NewSongs);