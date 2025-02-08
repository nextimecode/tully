import { NextResponse } from 'next/server'

import { blogPosts } from './blog-posts'

export async function GET() {
  return NextResponse.json(blogPosts)
}
