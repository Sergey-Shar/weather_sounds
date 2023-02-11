import cloudRain from '././icons/cloud-rain.svg'
import cloudSnow from '././icons/cloud-snow.svg'
import sun from '././icons/sun.svg'
const { default: rainSound } = await import('././sounds/rain.mp3')
const { default: summerSound } = await import('././sounds/summer.mp3')
const { default: winterSound } = await import('././sounds/winter.mp3')

export default [
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
