import { SoundsBlock } from './sounds.block'

export class App {
  #soundsBlock
  constructor () {
    this.#soundsBlock = new SoundsBlock()
  }

  run () {
    this.#soundsBlock.render()
  }
}
