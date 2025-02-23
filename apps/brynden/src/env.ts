import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const normalizeCommitRef = (commitRef: string) => {
  return commitRef.replace(/\//g, '-')
}

// Normaliza o nome da branch
const normalizedCommitRef = normalizeCommitRef(
  process.env.VERCEL_GIT_COMMIT_REF || ''
)

// Criação da URL de preview baseada no commit ref
const vercelPreviewUrl = process.env.VERCEL_GIT_COMMIT_REF
  ? `https://name-git-${normalizedCommitRef}-nextimes-projects.vercel.app`
  : ''

// Função para substituir o nome do projeto na URL
const replaceProjectName = (url: string, projectName: string) => {
  const replacedUrl = url.replace('name', projectName)
  return replacedUrl
}

// Configura a URL base antes da criação do ambiente
const getBaseUrl = () => {
  const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
  const previewUrl =
    process.env.NEXT_PUBLIC_VERCEL_PREVIEW_URL || vercelPreviewUrl

  if (isPreview && previewUrl) {
    return {
      bryndenUrl: replaceProjectName(previewUrl, 'brynden')
    }
  }

  return {
    bryndenUrl: ''
  }
}

// Pega as URLs antes da configuração do ambiente
const { bryndenUrl } = getBaseUrl()

// Criação do ambiente com as variáveis corretas
export const env = createEnv({
  server: {
    VERCEL_GIT_COMMIT_REF: z.string(),
    VERCEL_PREVIEW_URL: z.string()
  },

  client: {
    NEXT_PUBLIC_VERCEL_ENV: z.string(),
    NEXT_PUBLIC_VERCEL_PREVIEW_URL: z.string(),
    NEXT_PUBLIC_BRYNDEN_URL: z.string()
  },

  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV || 'preview',
    NEXT_PUBLIC_VERCEL_PREVIEW_URL:
      process.env.NEXT_PUBLIC_VERCEL_PREVIEW_URL || vercelPreviewUrl,
    NEXT_PUBLIC_BRYNDEN_URL: process.env.NEXT_PUBLIC_BRYNDEN_URL || bryndenUrl,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF || '',
    VERCEL_PREVIEW_URL: vercelPreviewUrl
  }
})
