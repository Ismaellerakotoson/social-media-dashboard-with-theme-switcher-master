import dataCard from '../data/dataCard'
import iconDown from '../assets/images/icon-down.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconYoutube from '../assets/images/icon-youtube.svg'

const platformConfig = {
  Facebook:  { icon: iconFacebook,  border: "border-facebook" },
  Twitter:   { icon: iconTwitter,   border: "border-twitter" },
  Instagram: { icon: iconInstagram, border: "border-t-4 border-image-instagram" },
  YouTube:   { icon: iconYoutube,   border: "border-youtube" },
}

function SocialCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {dataCard.map((card, index) => {
        const config = platformConfig[card.platform]
        return (
          <div
            key={index}
            className={`relative pt-8 pb-6 px-6 rounded-lg text-center
              bg-light-card dark:bg-dark-card dark:text-white
              border-t-4 ${config.border}
              cursor-pointer hover:brightness-90 transition`}
          >
            {/* Icon + username */}
            <div className='flex items-center justify-center gap-2 mb-6'>
              <img src={config.icon} alt={card.platform} className='w-5 h-5' />
              <span className='text-sm font-bold text-light-text dark:text-dark-text'>
                {card.username}
              </span>
            </div>

            {/* Followers */}
            <p className='text-5xl font-bold text-light-title dark:text-white mb-5'>
              {card.followers >= 10000
                ? `${Math.floor(card.followers / 1000)}k`
                : card.followers.toLocaleString()}
            </p>

            {/* Label */}
            <p className='text-xs tracking-widest mt-1 text-light-text dark:text-dark-text mb-10'>
              {card.label}
            </p>

            {/* Variation */}
            <div className={`flex items-center justify-center gap-1 mt-4 text-sm font-bold
              ${card.view < 0 ? "text-red-500" : "text-green-500"}`}>
              <img
                src={card.view < 0 ? iconDown : iconUp}
                alt={card.view < 0 ? 'down' : 'up'}
                className='w-2'
              />
              <span>{Math.abs(card.view)} Today</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SocialCard