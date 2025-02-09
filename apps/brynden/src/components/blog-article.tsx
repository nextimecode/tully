import Image from 'next/image'

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

export function BlogArticle({ title, description, imageUrl, content }: Post) {
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        <div className="space-y-5 md:space-y-8">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            {description}
          </p>
          <Image
            className="w-full object-cover rounded-xl"
            src={imageUrl}
            alt={title}
            width={560}
            height={315}
          />
          <div
            className="text-lg text-gray-800 dark:text-neutral-200 space-y-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}
