import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export interface Post {
  title: string
  slug: string
  description: string
  imageUrl: string
  author: string
  avatarUrl: string
  date: string
  content: string
}

async function getPosts() {
  // const res = await fetch(`${baseUrl}/api/blog`, {
  //   cache: 'force-cache'
  // })
  const res = await fetch(`${baseUrl}/api/blog`)
  const posts: Post[] = await res.json()
  if (!posts) notFound()
  return posts
}

export async function BlogSection() {
  const posts = await getPosts()

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
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
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
          </Link>
        ))}
      </div>
      {/* End Grid */}
    </div>
  )
}
