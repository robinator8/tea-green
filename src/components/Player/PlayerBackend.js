import React, { Component } from 'react'
import ReactHowler from 'react-howler'

export let controls = () => false

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
  

const emptyState = {
    playlist: [],
    queue: [],
    order: [],
    currentIndex: 0,
    currentSong: {
        src: ''
    },
    playing: false,
    shuffle: false,
    funcs: {
        togglePlay: null,
        skipForward: null,
        skipBackward: null,
        playSong: null,
        addToQueue: null,
        toggleShuffle: null,
        changeVolume: null,
        removeFromQueue: null,
    },
    volume: 1.0
}
class PlayerBackend extends Component {
    constructor(props) {
        super(props)
        const funcs = {
            togglePlay: this.togglePlay.bind(this),
            skipForward: this.skipForward.bind(this),
            skipBackward: this.skipBackward.bind(this),
            playSong: this.playSong.bind(this),
            addToQueue: this.addToQueue.bind(this),
            toggleShuffle: this.toggleShuffle.bind(this),
            changeVolume: this.changeVolume.bind(this),
            removeFromQueue: this.removeFromQueue.bind(this)
        }

        this.state = emptyState
        this.state.playlist = props.playlist
        this.state.order = this.genOrder(this.state.playlist, false)
        this.state.currentSong = this.state.playlist[this.state.order[0]]
        this.state.funcs = funcs
        controls = () => funcs
    }

    removeFromQueue(index) {
        this.setState((prevState, props) => ({
            queue: prevState.queue.filter((val, i) => i !== index)
        }))
    }

    changeVolume(vol) {
        this.setState({
            volume: vol,
        })
    }

    toggleShuffle() {
        this.setState((prevState, props) => {
            if (prevState.shuffle) {
                const newOrder = this.genOrder(prevState.playlist, false)
                return {
                    currentIndex: prevState.order[prevState.currentIndex],
                    order: newOrder,
                    shuffle: false,
                }
            } else {
                const newOrder = this.genOrder(prevState.playlist, true, prevState.order[prevState.currentIndex])
                return {
                    currentIndex: 0,
                    order: newOrder,
                    shuffle: true,
                }
            }
        })
    }

    addToQueue(song) {
        this.setState((prevState, props) => {
            const s = prevState.playlist.filter(({ src }) => src === song.src)[0]
            if (s.length === 0) {
                prevState.queue.push(song)
            } else {
                prevState.queue.push(s)
            }
            return {
                queue: prevState.queue
            }
        })
    }

    playSong(song) {
        this.setState((prevState, props) => {
            if (song.src === prevState.currentSong.src) {
                this.player.seek(0)
            }

            const index = prevState.playlist.findIndex((val, index) => val.src === song.src)

            if (index === undefined) return {
                playing: true,
                currentSong: song
            }

            if (prevState.shuffle) {
                return {
                    playing: true,
                    currentSong: prevState.playlist[index],
                    order: this.genOrder(prevState.playlist, true, index),
                    currentIndex: 0,
                }
            } else {
                return {
                    playing: true,
                    currentSong: prevState.playlist[index],
                    currentIndex: index,
                }
            }
        })
    }

    togglePlay() {
        this.setState((prevState, props) => ({
            playing: !prevState.playing
        }))
    }

    skipForward() {
        this.setState((prevState, props) => {
            if (prevState.queue.length) {
                if (prevState.queue[0].src === prevState.currentSong.src) {
                    this.player.seek(0)
                }
                return {
                    queue: prevState.queue.filter((_, i) => !!i),
                    currentSong: prevState.queue[0]
                }
            } else {
                const newIndex = (prevState.currentIndex + 1) % prevState.playlist.length
                let newOrder = prevState.order

                if (newIndex === 0 && prevState.shuffle) {
                    newOrder = this.genOrder(prevState.playlist.length, true)
                }

                return {
                    currentIndex: newIndex,
                    currentSong: prevState.playlist[newOrder[newIndex]],
                    order: newOrder
                }
            }
        })
    }

    skipBackward() {
        this.setState((prevState, props) => {
            const s = this.player.seek()
            const goToStart = s > 5;
            if (goToStart) {
                this.player.seek(0)
                return {}
            }
            const newIndex = prevState.currentIndex ? (prevState.currentIndex - 1) : prevState.playlist.length - 1
            return {
                currentIndex: newIndex,
                currentSong: prevState.playlist[prevState.order[newIndex]]
            }

        })
    }

    genOrder(arr, random, firstIndex = null) {
        const a = arr.map((_, i) => i)
        if (!random) {
            return a
        }

        const o = shuffle(a)
        if (firstIndex === null) {
            return o
        }
        const temp = o[0]
        const i = o.indexOf(firstIndex) 
        o[0] = o[i]
        o[i] = temp

        return o
    }



    render() {
        const { UI } = this.props
        console.log(this.state)
        return (
            <div>
                <ReactHowler 
                    src={this.state.currentSong.src}
                    playing={this.state.playing}
                    ref={(ref) => (this.player = ref)}
                    html5={true}
                    onEnd={() => this.skipForward()}
                    volume={this.state.volume}
                />
                <UI data={this.state} player={this.player} />
            </div>
            

        )
    }
}

export default PlayerBackend