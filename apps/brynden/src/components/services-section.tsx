import Image from 'next/image'

type ServiceCardProps = {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  href
}: ServiceCardProps) {
  return (
    <div className="bg-white group block rounded-xl overflow-hidden focus:outline-none">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative overflow-hidden w-full sm:w-56 h-44">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            {description}
          </p>
          {/* <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
            Saiba mais
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const mainContent = {
    title: 'Nossos Serviços',
    description:
      'Conheça as especialidades que oferecemos para cuidar da sua saúde bucal.'
  }

  const services = [
    {
      title: 'Periodontia',
      description:
        'Cuidado especializado na prevenção e tratamento de doenças gengivais, promovendo saúde bucal e estética.',
      imageUrl:
        'https://images.unsplash.com/photo-1574892986284-ec7b6181bf04?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Dentística',
      description:
        'Realce do sorriso com restaurações estéticas, tanto diretas quanto indiretas, para dentes danificados.',
      imageUrl:
        'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Endodontia',
      description:
        'Especialidade focada no tratamento e retratamento de canais radiculares, preservando dentes comprometidos.',
      imageUrl:
        'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Prótese',
      description:
        'Reabilitação oral com próteses sobre dentes naturais e implantes, restaurando função e estética.',
      imageUrl:
        'https://images.unsplash.com/photo-1543430720-fa600c67e423?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Disfunções Articulares (DTM)',
      description:
        'Tratamento especializado para disfunções temporomandibulares, aliviando dores e melhorando a função mandibular.',
      imageUrl:
        'https://images.unsplash.com/photo-1618517047922-d18a5a36c109?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Implantodontia',
      description:
        'Implantes dentários para substituição de dentes ausentes, proporcionando funcionalidade e estética duradoura.',
      imageUrl:
        'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    },
    {
      title: 'Estética',
      description:
        'Tratamentos estéticos como lentes de contato dental e clareamento para um sorriso mais bonito e saudável.',
      imageUrl:
        'https://images.unsplash.com/photo-1619634496831-881dbe7b8eb0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '#'
    }
  ]

  return (
    <div className="bg-primary" id="services">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-white font-bold lg:text-4xl dark:text-white">
            {mainContent.title}
          </h2>
          <p className="mt-3 text-gray-200 dark:text-neutral-400">
            {mainContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
