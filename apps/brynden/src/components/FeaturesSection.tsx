import Link from 'next/link'

const DocumentationIcon = () => (
  <svg
    className="shrink-0 size-5"
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const CommunitySupportIcon = () => (
  <svg
    className="shrink-0 size-5"
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
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
  </svg>
)

const AffordableIcon = () => (
  <svg
    className="shrink-0 size-5"
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
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
  </svg>
)

export const FeaturesSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            Ferramentas colaborativas para criar uma melhor experiência do
            usuário
          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
            Ajudamos empresas a transformar ideias em realidade no mundo
            digital, projetando e implementando as ferramentas tecnológicas que
            elas precisam para vencer.
          </p>
          <p className="mt-5">
            <Link
              href="#"
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            >
              Entre em contato com o time de vendas para saber mais
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                {feature.icon}
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {feature.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Documentação líder no setor',
    description:
      'Nossa documentação e bibliotecas de clientes extensas contêm tudo o que uma empresa precisa para construir uma integração personalizada em uma fração do tempo.',
    icon: <DocumentationIcon />
  },
  {
    title: 'Suporte da comunidade de desenvolvedores',
    description:
      'Contribuímos ativamente para projetos de código aberto—retribuindo à comunidade através do desenvolvimento, correções e patrocínios.',
    icon: <CommunitySupportIcon />
  },
  {
    title: 'Simples e acessível',
    description:
      'De cartões de embarque a ingressos de cinema, praticamente não há nada que você não possa armazenar com o Preline.',
    icon: <AffordableIcon />
  }
]
