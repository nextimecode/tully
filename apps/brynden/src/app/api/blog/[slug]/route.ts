import { NextResponse } from 'next/server'

import { blogPosts } from '../blog-posts'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug
  const post = blogPosts.find(post => post.slug === slug)
  if (!post) return new Response(null, { status: 404 })
  return NextResponse.json(post)
}
