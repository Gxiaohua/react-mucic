import React, { Component } from 'react';
import {gethashaudio} from '@/server/jsonp.js'
import './player.css'
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    componentDidMount(){
        let {hash} = this.props.match.params
        gethashaudio(
            {hash}
        ).then(({data})=>{
            console.log(data)
            let d = data
            this.setState({
                list:d
            })
        })
    }
    render() { 
        let arr = []
        let {list} = this.state
        //当它存在时换行走if里面
       
        if(list.lyrics !== undefined){
            arr = list.lyrics.split('\n')
        }
        // console.log(arr.length)
        arr = arr.map((item)=>{
            return item.slice(10,item.length-1)
        })
        // console.log(arr)
        return ( 
            <div>
                <audio id="audio" src={list.play_url}  controls="controls">296389</audio>
                <div>
                    {
                        arr.map((item,i)=>{
                            return  <div                                     
                                        key={i}
                                        className = "lyrics"
                                    >{item}</div>
                        })
                    }       
                </div>
 
            </div>
         )
    }
}
 
export default Player;