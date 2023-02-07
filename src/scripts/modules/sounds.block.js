
import assetsData from '../../assets/index'

export class SoundsBlock {
  #body
  #soundsBlock
  #soundElement
  #soundPlayId

  constructor () {
    this.#body = document.body
    this.#body.style.backgroundImage = `url(${assetsData[0].bg})`
    this.#soundsBlock = document.createElement('section')
    this.#soundsBlock.className = 'sounds-block'
    this.#soundElement = new Audio()
    this.#soundPlayId = null
  }

  #createSoundButtons (id, bg, icon) {
    const button = document.createElement('button')
    button.dataset.buttonId = id
    button.className = 'sound-button'
    button.style.backgroundImage = `url(${bg})`

    const iconButton = document.createElement('img')
    iconButton.className = 'icon-button'
    iconButton.src = icon
    button.append(iconButton)
    return button
  }

  #handleClickSoundBtn (event) {
    const { target } = event
    const icon = target.firstChild || target
    const buttonId = target.closest('button')?.dataset.buttonId
    if (!buttonId) {
      return
    }
    const item = assetsData.find((item) => item.id === buttonId)

    if (this.#soundPlayId !== item.id) {
      this.#body.style.backgroundImage = `url(${item.bg})`
      this.#soundPlayId = item.id
      this.#soundElement.src = item.sound
      this.#soundElement.play()
      icon.src = item.icon
      return
    }
    if (this.#soundElement.paused) {
      this.#soundElement.play()
      icon.src = item.icon
    } else {
      this.#soundElement.pause()
      icon.src = item.pause
    }
  }

  render () {
    const mainTitle = document.createElement('h1')
    mainTitle.className = 'title'
    mainTitle.textContent = 'Weather sounds'

    const container = document.createElement('div')
    container.className = 'container'

    assetsData.forEach(({ id, bg, icon }) => {
      const button = this.#createSoundButtons(id, bg, icon)
      container.append(button)
    })
    this.#soundsBlock.append(mainTitle, container)
    container.addEventListener('click', this.#handleClickSoundBtn.bind(this))
    this.#body.append(this.#soundsBlock)
  }
}
