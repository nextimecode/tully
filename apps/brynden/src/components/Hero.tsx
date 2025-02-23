'use client'

import Image from 'next/image'

const slides = [
  {
    title: 'ImplaLents',
    subtitle: 'Seu sorriso ainda melhor',
    image: '/assets/logo.svg'
  },
  {
    title: 'Sorrisos Saudáveis',
    subtitle: 'Cuidando do seu sorriso com tecnologia e carinho',
    image: '/assets/slide1.jpg'
  },
  {
    title: 'Tratamentos Personalizados',
    subtitle: 'Do clareamento à ortodontia, tudo para o seu bem-estar',
    image: '/assets/slide2.jpg'
  },
  {
    title: 'Confiança e Cuidado',
    subtitle: 'Sua saúde bucal em boas mãos',
    image: '/assets/slide3.jpg'
  }
]

export const Hero = () => {
  return (
    <div className="px-4 lg:px-6">
      <div
        className="relative"
        data-hs-carousel='{"loadingClasses": "opacity-0", "infinite": true, "isAutoPlay": true, "interval": 5000}'
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="hs-carousel-slide relative h-[30rem] md:h-[calc(100vh-106px)]"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:py-10 bg-black/50 rounded-bl-2xl">
                  <span className="block text-white">{slide.title}</span>
                  <span className="block text-white text-xl md:text-3xl">
                    {slide.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
