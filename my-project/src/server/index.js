//引入axios
import axios from 'axios'
//banner图和新歌
export function getBanner(){
    // return axios('/proxy/?json=true')
    return axios('/proxy/?json=true')
}

//排行  http://m.kugou.com/rank/list
export function getRank(){
    return axios('/proxy/rank/list?json=true')
}

//歌单  http://m.kugou.com/plist/index?json=true
export function getSongList(){
    return axios('/proxy/plist/index?json=true')
}

//歌手  http://m.kugou.com/singer/list/4?json=true
export function getSinger(){
    return axios('/proxy/singer/class?json=true')
}

// 歌手列表

export const getSingerList = (params = { classid: '' }) => {
    return axios(`/proxy/singer/list/${params.classid}?json=true`)
  }
  
  // 歌手信息
  
  export const getSingerInfo = (params = { singerid: '' }) => {
    return axios(`/proxy/singer/info/${params.singerid}?json=true`)
  }

  //排行信息
  //rank/info/6666   rankid    http://m.kugou.com/rank/info/6666?json=true

  export const getRankinfo = (params = {rankid: '' }) => {
    return axios(`/proxy/rank/info/${params.rankid}?json=true`)
  }

  //歌单信息
  //m.kugou.com/plist/list/417140?json=true
  export const getSonglistinfo = (params = {specialid: '' }) => {
    return axios(`/proxy/plist/list/${params.specialid}?json=true`)
  }

  //歌词
  //http://www.kugou.com/yy/index.php?r=play/getdata&hash=简单爱hash
  //http://www.kugou.com/song/#hash=3E75D62102F438C1BBDF61BF83FDDC5D&album_id=8545640
