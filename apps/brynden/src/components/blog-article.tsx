import Image from 'next/image'
import Link from 'next/link'

interface BlogArticleProps {
  post: {
    title: string
    description: string
    imageUrl: string
    author: string
    avatarUrl: string
    date: string
  }
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div className="shrink-0">
              <Image
                className="size-12 rounded-full"
                src={post.avatarUrl}
                alt={`Avatar de ${post.author}`}
                width={48}
                height={48}
              />
            </div>
            <div className="grow">
              <div className="flex justify-between items-center gap-x-2">
                <div>
                  <span className="font-semibold text-gray-800 dark:text-neutral-200 cursor-pointer">
                    {post.author}
                  </span>

                  <ul className="text-xs text-gray-500 dark:text-neutral-500">
                    <li className="inline-block pe-6">{post.date}</li>
                  </ul>
                </div>
                <button className="py-1.5 px-2.5 text-sm font-medium rounded-lg border bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-800 dark:text-white">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 md:space-y-8">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            {post.title}
          </h2>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            {post.description}
          </p>
          <Image
            className="w-full object-cover rounded-xl"
            src={post.imageUrl}
            alt={post.title}
            width={560}
            height={315}
          />
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            {post.description}
          </p>
        </div>
        <div className="mt-4">
          {['Plan', 'Web development', 'Free', 'Team'].map(tag => (
            <Link
              key={tag}
              href="#"
              className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
