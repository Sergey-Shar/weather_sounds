import { winterSound } from '../../assets/index'

export class AudioPlayer {
  constructor () {
    this.audioElement = document.createElement('audio')
    this.audioElement.className = 'audio-element'
    this.sound = new Audio(winterSound)
  }

  play () {
    this.sound.play()
    this.sound.volume = 0.1
  }
}
