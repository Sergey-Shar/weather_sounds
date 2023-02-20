import cloudRain from '../assets/icons/cloud-rain.svg'
import cloudSnow from '../assets/icons/cloud-snow.svg'
import sun from '../assets/icons/sun.svg'
import ISoundButtons from '../types/ISoundButtons'
const { default: rainSound } = await import('../assets/sounds/rain.mp3')
const { default: summerSound } = await import('../assets/sounds/summer.mp3')
const { default: winterSound } = await import('../assets/sounds/winter.mp3')

 const soundButtonsData:ISoundButtons[] = [
  {
    id: self.crypto.randomUUID(),
    icon: sun,
    sound: summerSound
  },
  {
    id: self.crypto.randomUUID(),
    icon: cloudRain,
    sound: rainSound
  },
  {
    id: self.crypto.randomUUID(),
    icon: cloudSnow,
    sound: winterSound
  }
]

export default soundButtonsData
