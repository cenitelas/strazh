import React from 'react';
import LMPlayer from 'lm-player'

const EVENTS = {
    RELOAD: "reload", //手动视频重载
    RELOAD_FAIL: "reloadFail", // 视频出错，重连失败
    RELOAD_SUCCESS: "reloadSuccess", //视频出错，重连成功
    ERROR: "error", //视频出错
    ERROR_RELOAD: "errorRload", //视频出错，自动重连
    HISTORY_PLAY_END: "historyPlayEnd", //历史视频列表播放结束
    SEEK: "seek", //跳跃播放时间
    TRANSFORM: "transform", //视频容器缩放
    CHANGE_PLAY_INDEX: "changePlayIndex", //历史视频列表播放索引改变
    HIDE_CONTRALLER:"hideContraller",
    SHOW_CONTRALLER:"showContraller",
    CLEAR_ERROR_TIMER:"clearErrorTimer" //重连成功清楚错误次数
};

export default class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            player:null
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <LMPlayer
                file="http://85.29.136.125:8080/b3a41c7fa34bb2ee9d03d83690ba8042/flv/sb3r0Aa/JvI7M8nieC8X/s.flv"
                isLive={true}
                autoplay={true}
                loop={false}
                onInitPlayer={player => {
                    console.log(player);
                        this.setState({player:player})
                    player.flv['_onvProgress'](e)
                }}
                draggable={false}
                requestPictureInPicture={true}
                leftExtContents={<button onClick={()=>this.state.player.requestPictureInPicture()}>RELOAD</button>}
                rightExtContents={<button onClick={()=>this.state.player.play()}>PLAY</button>}
            />
        );
    }
};
