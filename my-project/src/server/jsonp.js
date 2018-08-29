
import jsonp from 'jsonp';
  //跨域  jsonp
  //歌词
  //http://www.kugou.com/yy/index.php?r=play/getdata&hash=简单爱hash
  //http://www.kugou.com/song/#hash=3E75D62102F438C1BBDF61BF83FDDC5D&album_id=8545640

  //歌词
let gethash = `http://www.kugou.com/yy/index.php?r=play/getdata`
//封装函数，传入一个对象
export const gethashaudio=(params={})=>{
    //默认值
    let defaults = {
         hash :''
    }
    //把传入的对象和原对象合并
    Object.assign(defaults,params)
    //返回一个新的Promise
    return new Promise ((resolve,reject) => {
        jsonp(gethash,{
            //一个jsonp格式，传入对象转换成链接
            param: formatObjectToString(defaults) + '&callback'
        },(e,d) => {
            if(e) reject(e)
            resolve(d)
        })
    })

}

//搜索下拉框
// http://searchtip.kugou.com/getSearchTip?MusicTipCount=5&
//MVTipCount=2&albumcount=2&keyword=歌曲名字&callback=fn
let search = `http://searchtip.kugou.com/getSearchTip`
export const getsearch=(params={})=>{
    let defaults = {
        MusicTipCount:5,
        MVTipCount:2,
        albumcount:2,
        keyword:''
    }
    Object.assign(defaults,params)
    return new Promise((resolve,reject)=>{
        jsonp(search,{
            param:formatObjectToString(defaults) + '&callback'
        },(e,d)=>{
            if(e) reject(e)
            resolve(d)
        })
    })
}

// http://songsearch.kugou.com/song_search_v2?
//callback=jQuery112402722116304235871_1525314503909
//&keyword=纸短情长&page=1&pagesize=30&userid=-1
//&clientver=&platform=WebFilter&tag=em&filter=2
//&iscorrection=1&privilege_filter=0&_=1525314

// 根据歌曲名字获取到相关歌曲
let songSearchUrl = `http://songsearch.kugou.com/song_search_v2`
export const songSearch = (params={}) => {
  // 默认参数
  let defaults = {
    format: "jsonp",
    keyword:'',
    page: 1,
    pagesize:30,
    platform:"WebFilter",
    //tag:"em",
    filter:2,
    iscorrection:1,
    privilege_filter:0
  }
  Object.assign(defaults,params);
  
  return new Promise((resolve,reject) => {
    jsonp(songSearchUrl,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })
}

// 格式化对象为&连接
function formatObjectToString(obj){
  return Object.keys(obj).map((item) => {
    return item + '=' + obj[item]
  }).join('&')
}