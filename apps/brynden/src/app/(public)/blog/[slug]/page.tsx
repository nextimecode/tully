export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'

import { BlogArticle } from '@/components/blog-article'

import { api } from '@/data/api'

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

async function getPost(slug: string) {
  const response = await api(`/blog/${slug}`, {
    cache: 'force-cache'
  })
  if (!response.ok) notFound()
  const post: Post = await response.json()
  if (!post) notFound()
  return post
}

export async function generateStaticParams() {
  try {
    const response = await api(`/blog`, {
      cache: 'force-cache'
    })
    if (!response.ok) notFound()

    const posts: Post[] = await response.json()

    return posts.map((post: Post) => ({
      params: {
        slug: post.slug
      }
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return {
    title: post.title
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return <BlogArticle {...post} />
}
