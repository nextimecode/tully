import { ShieldCheck, Eye, Target } from 'lucide-react'

export const howItWorks = {
  title: 'Sobre a Nossa Clínica',
  description:
    'Conheça os valores que guiam nosso atendimento e garantem qualidade e confiança em cada serviço.',
  steps: [
    {
      title: 'Valores',
      description:
        'Prezamos pela ética profissional, excelência no atendimento e aprimoramento contínuo da nossa equipe para oferecer o melhor aos nossos pacientes.'
    },
    {
      title: 'Visão',
      description:
        'Ser referência em odontologia de qualidade, proporcionando soluções completas de saúde bucal, desde cuidados preventivos até reabilitações complexas com implantes.'
    },
    {
      title: 'Missão',
      description:
        'Promover uma odontologia de excelência, com profissionais qualificados e comprometidos, sempre pautados pela ética, respeito e inovação em cada tratamento.'
    }
  ]
}

export function HowItWorks() {
  return (
    <section id="about">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{howItWorks.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 mt-12">
          {iconBlocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center rounded-xl"
            >
              <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                {block.icon}
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {howItWorks.steps[index].title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {howItWorks.steps[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const iconBlocks = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-secondary" />
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-600 dark:text-secondary" />
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600 dark:text-secondary" />
  }
]
