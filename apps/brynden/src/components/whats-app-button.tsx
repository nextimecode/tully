import Link from 'next/link'

export const WhatsAppButton = () => {
  const nextSocialNetwork =
    'https://api.whatsapp.com/send?phone=5519981128098&text=Ol%C3%A1%2C+vi+o+contato+de+voc%C3%AAs+no+site%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+servi%C3%A7os'

  return (
    <div className="fixed bottom-5 right-5 w-15 h-15 z-50">
      <Link
        href={nextSocialNetwork}
        target="_blank"
        aria-label="Agende sua consulta pelo WhatsApp"
        className="block"
      >
        <NextWhatsIcon />
      </Link>
    </div>
  )
}

export const NextWhatsIcon = ({
  color = 'text-green-500'
}: {
  color?: string
}) => {
  return (
    <svg
      className={`w-15 h-15 ${color}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.3035 11C19.9932 11 11.6066 19.5225 11.6066 30C11.6066 33.6902 12.6334 37.2266 14.5895 40.3017L11.7471 46.6607C11.4878 47.2428 11.585 47.9347 11.9957 48.4179C12.3091 48.7913 12.763 49 13.2386 49C13.3791 49 13.5304 48.978 13.6709 48.9451L21.4955 46.7595C24.1973 48.2312 27.2234 49 30.3035 49C40.6138 49 49.0004 40.4775 49.0004 30C49.0004 19.5225 40.6138 11 30.3035 11ZM30.3035 45.6723C27.5692 45.6723 24.889 44.9364 22.533 43.5416C22.2844 43.3879 21.9926 43.311 21.7116 43.311C21.5711 43.311 21.4198 43.3329 21.2793 43.3659L16.1674 44.7936L17.9506 40.8069C18.1884 40.2688 18.1343 39.6318 17.7885 39.1486C15.8864 36.4688 14.8813 33.2948 14.8813 29.989C14.8813 21.3457 21.7981 14.3058 30.3143 14.3058C38.8198 14.3058 45.7473 21.3347 45.7473 29.989C45.7365 38.6434 38.809 45.6723 30.3035 45.6723Z"
        fill="#17171B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.4901 32.8447C36.712 32.3724 35.6853 31.8343 34.7667 32.2187C34.0642 32.5152 33.6103 33.6354 33.1455 34.2175C32.9078 34.514 32.6268 34.558 32.2701 34.4152C29.6115 33.3389 27.5797 31.5377 26.1099 29.0557C25.8613 28.6713 25.9045 28.3638 26.2071 28.0123C26.6502 27.4852 27.2014 26.8811 27.3203 26.1673C27.4392 25.4534 27.115 24.6187 26.8232 23.9817C26.4557 23.169 26.0342 22.0158 25.2345 21.5546C24.4996 21.1372 23.5269 21.3679 22.8676 21.906C21.7328 22.8395 21.1925 24.3112 21.2033 25.7609C21.2033 26.1782 21.2573 26.5846 21.3546 26.9909C21.5815 27.9464 22.0247 28.847 22.511 29.7037C22.8784 30.3406 23.2891 30.9667 23.7214 31.5707C25.1372 33.5366 26.9096 35.2389 28.9522 36.5129C29.9789 37.1499 31.0813 37.71 32.2161 38.0944C33.4914 38.5227 34.637 38.973 36.0203 38.7094C37.4685 38.4348 38.8951 37.5233 39.4679 36.1065C39.6408 35.6892 39.7273 35.2169 39.63 34.7776C39.4355 33.8331 38.2142 33.284 37.4901 32.8447Z"
        fill="#17171B"
      />
    </svg>
  )
}
