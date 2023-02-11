import { setValueFromInput } from '../utils/index'
import { colors } from '../constants/index'
const { default: assetsData } = await import('../../assets/index')
const { AUDIO_SPEAKER_FILL } = colors
export class AudioPlayer {
  #soundElement
  #volumeController
  #soundPlayId
  #boxButtons
  #buttons
  #audioLoud
  #audioMed
  #audioSpeaker

  constructor () {
    this.#boxButtons = document.querySelector('.box-buttons')
    this.#volumeController = document.querySelector('.volume-controller')
    this.#soundElement = new Audio()
    this.#soundPlayId = null
    this.#buttons = null
    this.#audioLoud = document.getElementById('audio-loud')
    this.#audioMed = document.getElementById('audio-med')
    this.#audioSpeaker = document.getElementById('audio-speaker')
  }

  #handleClickSoundBtn (event) {
    const { target } = event
    this.#buttons.forEach((button) => button.classList.remove('active'))

    const buttonId = target.closest('button')?.dataset.buttonId
    if (!buttonId) {
      return
    }

    const item = assetsData.find((item) => item.id === buttonId)
    if (this.#soundPlayId !== item.id) {
      target.classList.add('active')
      this.#soundPlayId = item.id
      this.#soundElement.src = item.sound
      this.#soundElement.loop = true
      this.#soundElement.play()
      return
    }

    if (this.#soundElement.paused) {
      this.#soundElement.play()
    } else {
      this.#soundElement.pause()
    }
  }

  #handleInputVolume (event) {
    const { target, currentTarget } = event
    target.style.setProperty('--val', parseInt(target.value))
    this.#soundElement.volume = setValueFromInput(currentTarget.value)

    if (this.#soundElement.volume > 0.75) {
      this.#audioLoud.style = 'opacity: 1'
      this.#audioMed.style = 'opacity: 1'
    } else if (this.#soundElement.volume < 0.75) {
      this.#audioLoud.style = 'opacity: 0'
      if (this.#soundElement.volume === 0) {
        this.#audioMed.style = 'opacity: 0'
        this.#audioSpeaker.style = 'opacity: 0.4'
      }
    }
    if (this.#soundElement.volume > 0.1) {
      this.#audioMed.style = 'opacity: 1'
      this.#audioSpeaker.style = `fill:${AUDIO_SPEAKER_FILL}`
    }
  }

  #createSoundButtons ({ id, icon }) {
    const button = document.createElement('button')
    button.type = 'button'
    button.dataset.buttonId = id
    button.className = 'sound-button'

    const iconButton = document.createElement('img')
    iconButton.className = 'icon-button'
    iconButton.src = icon
    button.append(iconButton)
    this.#boxButtons.appendChild(button)
  }

  render () {
    this.#soundElement.volume = setValueFromInput()
    assetsData.forEach(this.#createSoundButtons.bind(this))
    this.#boxButtons.addEventListener(
      'click',
      this.#handleClickSoundBtn.bind(this)
    )
    this.#volumeController.addEventListener(
      'input',
      this.#handleInputVolume.bind(this)
    )
    this.#buttons = this.#boxButtons.querySelectorAll('button')
  }
}
