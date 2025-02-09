import Link from 'next/link'

import { UserCheck, HeartHandshake, Users } from 'lucide-react'

const ExpertiseIcon = () => <UserCheck className="shrink-0 size-5" />

const HumanizedCareIcon = () => <HeartHandshake className="shrink-0 size-5" />

const TalentSearchIcon = () => <Users className="shrink-0 size-5" />

const mainContent = {
  title: 'A história da Implalents',
  description:
    'A Implalents nasceu com o propósito de oferecer um atendimento odontológico especializado, conduzido por profissionais que, além de dentistas, são os próprios proprietários da clínica. Em um cenário onde franquias lideradas por empresários não dentistas crescem nas grandes cidades, transformando pacientes em números e priorizando o lucro em detrimento da qualidade, nos destacamos por nossa abordagem ética e personalizada. Esse modelo de mercado resulta em alta rotatividade de profissionais e compromete a continuidade dos tratamentos, muitas vezes não executados pelo mesmo dentista que realizou o planejamento inicial. Na Implalents, cada colaborador é selecionado por seu currículo de excelência e, acima de tudo, pela paixão pelo atendimento humanizado. Nosso modelo não é de franquias, mas de sociedade, valorizando a parceria e o compromisso em encontrar novos talentos que compartilhem nossa filosofia de cuidado e excelência.',
  linkText: 'Entre em contato para agendar sua consulta',
  linkHref:
    'https://api.whatsapp.com/send?phone=5519981128098&text=Ol%C3%A1,%20ImplaLents!%0AGostaria%20de%20agendar%20uma%20consulta.'
}

const features = [
  {
    title: 'Profissionais especializados',
    description:
      'Todos nossos dentistas possuem currículo de excelência e são escolhidos por sua paixão pelo atendimento humanizado.',
    icon: <ExpertiseIcon />
  },
  {
    title: 'Atendimento humanizado',
    description:
      'Tratamos cada paciente de forma única, garantindo que o mesmo profissional acompanhe todo o processo de tratamento.',
    icon: <HumanizedCareIcon />
  },
  {
    title: 'Filosofia de sociedade',
    description:
      'Não trabalhamos com franquias. Buscamos talentos para compartilhar nossa filosofia de cuidado e excelência.',
    icon: <TalentSearchIcon />
  }
]

export const FeaturesSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            {mainContent.title}
          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
            {mainContent.description}
          </p>
          <p className="mt-5">
            <Link
              href={mainContent.linkHref}
              className="transition-all duration-300 hover:bg-primary-600 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-primary text-white disabled:opacity-50 disabled:pointer-events-none"
              target="_blank"
            >
              {mainContent.linkText}
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
