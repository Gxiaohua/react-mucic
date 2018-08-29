
import newsongs from '@/views/home/newsong/newsongs.js'
import rank from '@/views/home/rank/rank.js'
import singer from '@/views/home/singer/singer.js'
import songlist from '@/views/home/songlist/songlist.js'
import singerlist from '@/views/home/singer/singerlist.js'
import singerinfo from '@/views/home/singer/singerinfo.js'
import rankinfo from '@/views/home/rank/rank-info.js'
import songlistinfo from '@/views/home/songlist/songlistinfo.js'
import player from '@/views/home/player/player.js'
import search from '@/views/home/search/search.js'
import searchsongs from '@/views/home/search/searchsongs.js'
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
//把serve中的方法作为server的属性都放在server的对象中
import * as server from '@/server'


export let routes = [
    {
       path:'/' ,
       title:'新歌',
       index:0,
       route:true,    //是否渲染成导航
       conponent:getdatanum(newsongs,'getBanner')
    },
    {
        path:'/rank' ,
        title:'排行',
        index:1,
        route:true,    //是否渲染成导航
        conponent:getdatanum(rank,'getRank')
     },
     {
        path:'/singer' ,
        title:'歌手',
        index:2,
        route:true,    //是否渲染成导航
        conponent:getdatanum(singer,'getSinger')
     },
     {
        path:'/songlist' ,
        title:'歌单',
        index:3,
        route:true,    //是否渲染成导航
        conponent:getdatanum(songlist,'getSongList',)
     },
     {
        path:'/singer/list/:classid' ,
        title:'歌手详情',
        index:4,
        route:false,    //是否渲染成导航
        conponent:getdatanum(singerlist,'getSingerList',(match)=>{
            return {
                classid: match.params.classid
            }
        })
     },
     {
        path:'/singer/info/:singerid' ,
        title:'歌手详情',
        index:4,
        route:false,    //是否渲染成导航
        conponent:getdatanum(singerinfo,'getSingerInfo',(match)=>{
            return {
                singerid: match.params.singerid
            }
        })
     },
     {
        path:'/rank/info/:rankid' ,
        title:'排行音乐榜',
        index:5,
        route:false,    //是否渲染成导航
        conponent:getdatanum(rankinfo,'getRankinfo',(match)=>{
            return {
                rankid: match.params.rankid
            }
        })
     },
     {
        path:'/plist/list/:specialid' ,
        title:'排行音乐榜',
        index:5,
        route:false,    //是否渲染成导航
        conponent:getdatanum(songlistinfo,'getSonglistinfo',(match)=>{
            return {
                specialid: match.params.specialid
            }
        })
     },
     {
        path:'/player/:hash' ,
        title:'排行音乐榜',
        index:6,
        route:false,    //是否渲染成导航
        conponent:player
     },
     {
        path:'/searchsongs/:id' ,
        title:'排行音乐榜',
        index:7,
        route:false,    //是否渲染成导航
        conponent:searchsongs
     },
     {
        path:'/search' ,
        title:'搜索',
        index:7,
        route:false,    //是否渲染成导航
        conponent:search
     },
]

//componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，
//所以可以保证数据的加载
/**
 * asnyc 使异步改为同步
 */
// 接收一个组件，返回一个新的组件，新的组件渲染的还是传入的组件
//serverUrl每一个server中的方法
function getdatanum(Con,serverUrl,mapMatch){
     class getData extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                data:{}
            }
        }
        async componentDidMount(){
            let {match={}} = this.props
            let p = {};
            if(mapMatch){
                p = mapMatch(match);
            }
            //拿到每一个server的方法中的数据
            let {data} = await server[serverUrl](p);
            //设置一个空的对象
            let o = {}
            if(serverUrl === 'getBanner'){  //新歌和banner图
                o.list = data.data;
                o.banner = data.banner;
            }else if(serverUrl === 'getRank'){  //排行
                o.list = data.rank.list;
            }else if(serverUrl === 'getSongList'){  //歌单
                o.list = data.plist.list.info;
            }else if(serverUrl === 'getSinger'){  //歌手
                o.list = data.list;
            }else if(serverUrl === 'getSingerList'){   //歌手详情
                o.list = data.singers.list.info        
            }else if(serverUrl === 'getSingerInfo'){  //歌手信息
                o.info = data.info
                o.list = data.songs.list
            }else if(serverUrl === 'getRankinfo'){   //排行信息
                o.info = data.info
                o.list = data.songs.list
                console.log(data)
            }else if(serverUrl === 'getSonglistinfo'){
                o.info = data.info.list
                o.list = data.list.list.info
            }
            this.setState({
                data:o  //改变状态 把o的值给data
            })
        }
        render() { 
            return this.state.data.list ? <Con {...this.state.data} /> : null;
        }
    }
    return withRouter(getData);
}
