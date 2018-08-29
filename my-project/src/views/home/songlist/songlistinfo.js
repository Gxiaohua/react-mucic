
import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import { Accordion, List } from 'antd-mobile';
// import {gethashaudio} from '@/server/jsonp.js'
import { Link} from 'react-router-dom'
// import './singerinfo.css'
const Item = List.Item;
class SongListInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {list,info} = this.props
        console.log(this.props)
        return ( 
            <div>
                <div>
                    <div className="size-img">
                       <img src={info.imgurl.replace('{size}', 400)} alt=""/>
                       <div className="info-singername">{info.singername}</div>
                    </div>
                    {/* 调用手风琴组件 */}
                    <div>
                        <Accordion defaultActiveKey="0" accordion className="my-accordion" onChange={this.onChange}>
                        {/* header是标题，key值对应Accordion的activeKey */}
                        <Accordion.Panel header="详情" className="pad" key="activeKey ">
                            {info.intro}
                        </Accordion.Panel>
                        </Accordion>
                    </div>


                </div>
                <List className = "itemIcon">
                {
                    list.map((item)=>{
                        return (
                            <Link key = {item.audio_id}
                                  to = {{
                                      pathname:'/player/'+ item.hash
                                  }}
                            >
                                <Item key = {item.audio_id}
                                    onClick = {this.HashAudio}
                                    >{item.filename}
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
 
export default  withRouter(SongListInfo);
                             