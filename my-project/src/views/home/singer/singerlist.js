
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
const Item = List.Item;
class SingerList extends Component {
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
                            <Link key={item.singerid}
                                  to = {{
                                      pathname:'/singer/info/'+ item.singerid
                                  }}
                            >
                                <Item     
                                    className = "itemIcon"
                                    thumb={item.imgurl.replace('{size}', 400)}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                    >{item.singername}
                                </Item>
                            </Link>
                        )
                    })
                }
            </List>
         )
    }
}
 
export default  withRouter(SingerList);
/**
 * /**
 *     <Item key={val.CommonId}  className = "itemIcon"
                                thumb={val.CommonImg.replace('{size}', 400)}
                                arrow="horizontal"
                                onClick={() => {}}
                            >
                              {val.CommonName}
                              {val.CommonCuld ? <Brief>{val.CommonCuld}</Brief> : null }
                            </Item>
 * 
 */
