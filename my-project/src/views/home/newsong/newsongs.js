
import React, { Component } from 'react';
import Banner from './banner'
import Songnew from './song-list'
class NewSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let { list,banner } = this.props;
        return ( 
            <div>
                <Banner banner={banner}></Banner>
                <Songnew Songnew = {list}></Songnew>
            </div>
         )
    }
}
 
export default NewSongs;