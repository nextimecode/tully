import { NextResponse } from 'next/server'

export async function GET() {
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

  return NextResponse.json(blogPosts)
}
