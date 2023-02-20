import { setValueFromInput } from '../utils/index'
import { colors } from '../constants/index'
import assetsData from '../../assets/index'
import ISoundButtons from '../../types/ISoundButtons'
const { AUDIO_SPEAKER_FILL } = colors

export class AudioPlayer {
	private soundElement: HTMLAudioElement
	private volumeController: HTMLInputElement
	private soundPlayId: string
	private boxButtons: HTMLDivElement
	private buttons: NodeListOf<HTMLButtonElement> | null
	private audioLoud: HTMLElement
	private audioMed: HTMLElement
	private audioSpeaker: HTMLElement

	constructor() {
		this.boxButtons = document.querySelector('.box-buttons')!
		this.volumeController = document.querySelector('.volume-controller')!
		this.soundElement = new Audio()
		this.soundPlayId = ''
		this.buttons = null
		this.audioLoud = document.getElementById('audio-loud')!
		this.audioMed = document.getElementById('audio-med')!
		this.audioSpeaker = document.getElementById('audio-speaker')!
	}

	private handleClickSoundBtn(event: Event): void {
		const target = event.target as HTMLElement
		this.buttons?.forEach((button) => button.classList.remove('active'))

		const buttonId = target.closest('button')?.dataset.buttonId
		if (!buttonId) {
			return
		}

		const item = assetsData.find((item) => item.id === buttonId)!
		if (this.soundPlayId !== item?.id) {
			target.classList.add('active')
			this.soundPlayId = item?.id
			this.soundElement.src = item.sound
			this.soundElement.loop = true
			this.soundElement.play()
			return
		}

		if (this.soundElement.paused) {
			this.soundElement.play()
		} else {
			this.soundElement.pause()
		}
	}

	private handleInputVolume(event: Event): void {
		const target = event.target as HTMLInputElement
		const currentTarget = event.currentTarget as HTMLInputElement

		target?.style.setProperty('--val', target?.value)
		this.soundElement.volume = setValueFromInput(+currentTarget?.value)

		if (this.soundElement.volume > 0.75) {
			this.audioLoud.setAttribute('style','opacity: 1')
			this.audioMed.setAttribute('style','opacity: 1')
		} else if (this.soundElement.volume < 0.75) {
			this.audioLoud.setAttribute('style','opacity: 0')
			if (this.soundElement.volume === 0) {
				this.audioMed.setAttribute('style','opacity: 0')
				this.audioSpeaker.setAttribute('style','opacity: 0.4')
			}
		}
		if (this.soundElement.volume > 0.1) {
			this.audioMed.setAttribute('style','opacity: 1')
			this.audioSpeaker.setAttribute('style',`fill:${AUDIO_SPEAKER_FILL}`)
		}
	}

	private createSoundButtons(data: ISoundButtons): void {
		const button = document.createElement('button')
		button.type = 'button'
		button.dataset.buttonId = data.id
		button.className = 'sound-button'

		const iconButton = document.createElement('img')
		iconButton.className = 'icon-button'
		iconButton.src = data.icon
		button.append(iconButton)
		this.boxButtons.appendChild(button)
	}

	render(): void {
		this.soundElement.volume = setValueFromInput()
		assetsData.forEach(this.createSoundButtons.bind(this))
		this.boxButtons.addEventListener('click', this.handleClickSoundBtn.bind(this))
		this.volumeController.addEventListener(
			'input',
			this.handleInputVolume.bind(this)
		)
		this.buttons = this.boxButtons.querySelectorAll('button')
	}
}
