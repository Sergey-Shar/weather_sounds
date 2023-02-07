import rainyBg from '././bgImage/rainy-bg.jpg'
import summerBg from '././bgImage/summer-bg.jpg'
import winterBg from '././bgImage/winter-bg.jpg'
import cloudRain from '././icons/cloud-rain.svg'
import cloudSnow from '././icons/cloud-snow.svg'
import pause from '././icons/pause.svg'
import sun from '././icons/sun.svg'
import rainSound from '././sounds/rain.mp3'
import summerSound from '././sounds/summer.mp3'
import winterSound from '././sounds/winter.mp3'

// export {
//   rainyBg,
//   summerBg,
//   winterBg,
//   cloudRain,
//   cloudSnow,
//   pause,
//   sun,
//   rainSound,
//   summerSound,
//   winterSound
// }
export default [
  {
    id: self.crypto.randomUUID(),
    bg: summerBg,
    icon: sun,
    pause,
    sound: summerSound
  },
  {
    id: self.crypto.randomUUID(),
    bg: rainyBg,
    icon: cloudRain,
    pause,
    sound: rainSound
  },
  {
    id: self.crypto.randomUUID(),
    bg: winterBg,
    icon: cloudSnow,
    pause,
    sound: winterSound
  }
]
