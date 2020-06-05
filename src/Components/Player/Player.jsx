import React from 'react'
import LMPlayer from 'lm-player'

const EVENTS = {
  RELOAD: 'reload', // 手动视频重载
  RELOAD_FAIL: 'reloadFail', // 视频出错，重连失败
  RELOAD_SUCCESS: 'reloadSuccess', // 视频出错，重连成功
  ERROR: 'error', // 视频出错
  ERROR_RELOAD: 'errorRload', // 视频出错，自动重连
  HISTORY_PLAY_END: 'historyPlayEnd', // 历史视频列表播放结束
  SEEK: 'seek', // 跳跃播放时间
  TRANSFORM: 'transform', // 视频容器缩放
  CHANGE_PLAY_INDEX: 'changePlayIndex', // 历史视频列表播放索引改变
  HIDE_CONTRALLER: 'hideContraller',
  SHOW_CONTRALLER: 'showContraller',
  CLEAR_ERROR_TIMER: 'clearErrorTimer', // 重连成功清楚错误次数
}

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        player: null,
        config:props.config
    }
    this.ref = React.createRef()
  }

  render() {
    return (
      <div ref={this.ref}>
        <LMPlayer
          file="http://85.29.136.125:8080/16f149660e0cfacdaf9b795974734cf0/flv/sb3r0Aa/JvI7M8nieC8X/s.flv"
          isLive
          autoplay
          loop={false}
          onInitPlayer={(player) => {
            this.setState({ player })
            player.flv._config.enableWorker=this.state.config.enableWorker;
            player.flv._config.enableStashBuffer=this.state.config.enableStashBuffer;
            player.flv._config.stashInitialSize=this.state.config.stashInitialSize;
            player.flv._config.lazyLoad=this.state.config.lazyLoad;
            player.flv._config.autoCleanupSourceBuffer=this.state.config.autoCleanupSourceBuffer;
            player.flv._mediaElement.addEventListener('canplay', (e) => {
              console.log(e)
            })
              console.log(player)
              document.body.addEventListener('loading_complete', (e) => {
                  console.log('ASDASD')
              })
          }}
          draggable={false}
          requestPictureInPicture
          leftExtContents={<button onClick={() => this.state.player.requestPictureInPicture()}>RELOAD</button>}
          rightExtContents={<button onClick={() => this.state.player.requestFullScreen()}>PLAY</button>}
        />
      </div>
    )
  }
}
