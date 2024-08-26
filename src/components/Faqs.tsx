import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Hva er nais?',
      answer:
        'nais er en kraftig applikasjonsplattform som hjelper deg med å distribuere og administrere applikasjonene dine enkelt.',
    },
    {
      question: 'Hvordan håndterer nais skalering?',
      answer:
        'nais er designet for å håndtere skalering uten problemer. Den støtter automatisk skalering basert på etterspørsel og gir funksjoner som horisontal pod-autoskalering.',
    },
    {
      question: 'Kan jeg bruke nais for både frontend- og backend-applikasjoner?',
      answer:
        'Absolutt! nais støtter både frontend- og backend-applikasjoner. Den gir sømløs integrasjon med populære rammeverk og biblioteker.',
    },
  ],
  [
    {
      question: 'Er nais sikker?',
      answer:
        'Ja, nais prioriterer sikkerhet. Den gir innebygde sikkerhetsfunksjoner som autentisering, autorisasjon og kryptering for å sikre sikkerheten til applikasjonene og dataene dine.',
    },
    {
      question: 'Støtter nais konteinerisering?',
      answer:
        'Ja, nais støtter fullstendig konteinerisering. Den benytter seg av konteinerteknologier som Docker og Kubernetes for å gi et skalerbart og bærbart miljø for applikasjonene dine.',
    },
    {
      question: 'Hvordan kan jeg overvåke applikasjonene mine på nais?',
      answer:
        'nais tilbyr omfattende overvåkingsfunksjoner. Den integrerer med populære overvåkingsverktøy som Prometheus og Grafana for å gi sanntidsinnsikt i ytelsen og helsen til applikasjonene dine.',
    },
  ], [
    {
      question: 'Kan jeg distribuere applikasjonene mine til flere miljøer med nais?', answer:
        'Absolutt! nais støtter distribusjon til flere miljøer. Du kan enkelt distribuere applikasjonene dine til forskjellige miljøer som utvikling, staging og produksjon med minimal konfigurasjon.',
    },
    {
      question: 'Er nais egnet for mikrotjenestearkitektur?',
      answer:
        'Ja, nais er godt egnet for mikrotjenestearkitektur. Den gir funksjoner som tjenesteoppdagelse, lastbalansering og distribuert sporing for å hjelpe deg med å bygge og distribuere mikrotjenestebaserte applikasjoner enkelt.',
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Ofte stilte spørsmål
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Hvis du ikke finner det du leter etter, kan du sende en e-post til vårt supportteam, og hvis du er heldig, vil noen svare deg.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
