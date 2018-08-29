
import React, { Component } from 'react';
import ComList from '@/views/common/common-list.js'
import { withRouter } from 'react-router-dom'
import './rank.css'
// import { Link } from './C:/Users/hua/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
// import { Link} from 'react-router-dom'

class NewSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {list} = this.props
        list = list.map((item) => {
            return{
                //扩展运算符（...）用于取出参数对象的所有可遍历属性，
                  //拷贝到当前对象之中。
                ...item,
                CommonId:item.rankid,
                CommonName:item.rankname,
                CommonImg:item.imgurl,    
            }
        })
        return ( 
            <ComList list = {list}></ComList>
         )
    }
}
 
export default withRouter(NewSongs);