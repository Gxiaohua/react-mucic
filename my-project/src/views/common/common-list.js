//提取公共部分传参

import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;
class ComList extends Component {
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
                            <Link key={val.CommonId} 
                               to = {{
                                pathname: '/rank/info/' + val.CommonId
                               }}
                            >
                                <Item className = "itemIcon"
                                    thumb={val.CommonImg.replace('{size}', 400)}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                >
                                {val.CommonName}
                                {val.CommonCuld ? <Brief>{val.CommonCuld}</Brief> : null }
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
 
export default ComList;