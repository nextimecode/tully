import Image from 'next/image'
import Link from 'next/link'

export function BlogSection() {
  const blogPosts = [
    {
      title: 'A importância da limpeza dental regular',
      slug: 'importancia-da-limpeza-dental-regular',
      description:
        'Descubra por que a limpeza dental profissional é essencial para a saúde bucal e como ela pode prevenir problemas futuros.',
      imageUrl:
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
      author: 'Dr. Ana Paula Souza',
      avatarUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      date: '2023-01-01'
    },
    {
      title: 'Como escolher a escova de dentes ideal?',
      slug: 'como-escolher-a-escova-de-dentes-ideal',
      description:
        'Saiba quais fatores considerar ao escolher sua escova de dentes e como isso pode impactar na sua saúde bucal.',
      imageUrl:
        'https://images.unsplash.com/photo-1573883430382-8c9a46b82c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
      author: 'Dr. João Carlos Mendes',
      avatarUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      date: '2023-01-01'
    },
    {
      title: 'Os benefícios do clareamento dental',
      slug: 'beneficios-do-clareamento-dental',
      description:
        'Entenda como o clareamento dental pode transformar seu sorriso e aumentar sua autoconfiança.',
      imageUrl:
        'https://images.unsplash.com/photo-1598214886806-c89fdbdbb2fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
      author: 'Dra. Fernanda Lima',
      avatarUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      date: '2023-01-01'
    }
  ]

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Nosso Blog
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Dicas e informações para manter sua saúde bucal em dia.
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href="#"
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          >
            <div className="aspect-w-16 aspect-h-11 relative w-full h-0 pb-[68.75%]">
              <Image
                src={post.imageUrl}
                alt="Imagem do Blog"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {post.title}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                {post.description}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <Image
                src={post.avatarUrl}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                  Por {post.author}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* End Grid */}

      {/* Read More Button */}
      <div className="mt-12 text-center">
        <Link
          href="#"
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          Leia mais
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
        </Link>
      </div>
      {/* End Read More Button */}
    </div>
  )
}
