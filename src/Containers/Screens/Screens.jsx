import React from 'react'
import ReactDOM from 'react-dom'
import AutoResponsive from 'autoresponsive-react'
import style from './Screens.module.scss'
import { Cell } from '../../Components/Cell/Cell'

export default class Screens extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.setState({
      containerWidth: this.ref.current.offsetWidth,
      containerHeight: this.ref.current.offsetHeight,
    })

    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth,
        containerHeight: ReactDOM.findDOMNode(this.refs.container).clientHeight,
      })
    }, false)
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth,
      containerHeight: this.state.containerHeight,
      itemClassName: 'item',
      gridWidth: 4,
      transitionDuration: '.5',
    }
  }

    addItem = () => {
      const data = JSON.parse(JSON.stringify(this.state.data))
      const newItem = {
        id: data.length + 1, size: 1, width: this.state.containerWidth / 4 - 10, height: this.state.containerHeight / 4 - 10,
      }
      data.push(newItem)
      const sElems = data.reduce((a, b) => a + (b.height * b.width), 0)
      const sScreen = this.state.containerHeight * this.state.containerWidth
      if (sElems > sScreen) {
        return
      }
      this.setState({ data })
    }

    dropItem = (el, id) => {
      const data = [].concat(this.state.data)
      const item = data.find((i) => i.id === id)
      data.splice(data.indexOf(item), 1)
      this.setState({ data })
      el.preventDefault()
      el.stopPropagation()
    }

    onChange=(id, size) => {
      const data = JSON.parse(JSON.stringify(this.state.data))
      const item = data.find((i) => i.id === id)
      if (data.length === 16 && data.filter((i) => i.size === 2).length === 3 && size) {
        return
      }
      data.splice(data.indexOf(item), 1)
      if (size) {
        if (data.find((i) => i.size === 3)) {
          return
        }
        switch (item.size) {
          case 1:
            item.width = item.width * 2 + 8
            item.height = item.height * 2 + 8
            item.size += 1
            break
          case 2:
            if (data.find((i) => i.size === 2 && i.id !== item.id)) {
              break
            }
            item.width = item.width * 1.5 + 8
            item.height = item.height * 1.5 + 8
            item.size += 1
            break
          case 3:
            return
        }
        const fullSizeItem = data.find((i) => i.size >= item.size)
        if (fullSizeItem) {
          data.splice(data.indexOf(fullSizeItem) + 1, 0, item)
        } else {
          data.unshift(item)
        }
      } else {
        switch (item.size) {
          case 2:
            item.width /= 2
            item.height /= 2
            item.size -= 1
            break
          case 3:
            item.width /= 1.5
            item.height /= 1.5
            item.size -= 1
            break
          case 1:
            return
        }
        const smallSizeItem = data.find((i) => i.size <= item.size)
        if (smallSizeItem) {
          data.splice(data.indexOf(smallSizeItem), 0, item)
        } else {
          data.push(item)
        }
      }

      const sElems = data.reduce((a, b) => a + (b.height * b.width), 0)
      const sScreen = this.state.containerHeight * this.state.containerWidth
      if (sElems > sScreen) {
        return
      }
      this.setState({ data })
    }

    render() {
      return (
        <div ref={this.ref} className={style.screen}>
          <button onClick={() => this.addItem()}>ADD</button>
          <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
            {
                        this.state.data.map((i, index) => {
                          const styleSize = {
                            width: i.width,
                            height: i.height,
                          }
                          return (
                            <div id={i.id} key={index} className="item" style={{ ...styleSize }}>
                              <Cell id={i.id} dropItem={this.dropItem} onChange={this.onChange} />
                            </div>
                          )
                        })
                    }
          </AutoResponsive>
        </div>
      )
    }
}
