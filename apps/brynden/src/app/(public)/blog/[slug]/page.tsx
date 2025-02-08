import { notFound } from 'next/navigation'

import { BlogArticle } from '@/components/blog-article'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

interface Post {
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
  const res = await fetch(`${baseUrl}/api/blog/${slug}`)
  const post: Post = await res.json()
  if (!post) notFound()
  return post
}

export async function generateStaticParams() {
  const posts = await fetch(`${baseUrl}/api/blog`, {
    cache: 'force-cache'
  }).then(res => res.json())

  return posts.map((post: Post) => ({
    slug: String(post.slug)
  }))
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

  return <BlogArticle post={post} />
}
