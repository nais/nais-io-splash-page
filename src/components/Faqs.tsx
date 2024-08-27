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
    {
      question: 'Hvordan kan jeg overvåke applikasjonene mine på nais?',
      answer:
        'nais tilbyr omfattende overvåkingsfunksjoner. Den integrerer med populære overvåkingsverktøy som Prometheus og Grafana for å gi sanntidsinnsikt i ytelsen og helsen til applikasjonene dine.',
    },
  ], [
    {
      question: 'NAIS tilbys også som en tjeneste for andre statlige forvaltningsorgan?',
      answer:
        'I tillegg til at plattformen tilbys som åpen kildekode, er det også mulig for andre statlige virksomheter å ta i bruk den skybaserte delen av Nais som en tjeneste. Praktisk løses dette ved at man utnytter standardarkitekturen i skytjenesntene, ved at det opprettes en egen tenant for hver organisasjon som bruker NAIS. De forskjellige organisasjonene får dermed ikke tilgang til hverandres applikasjoner og data. De underliggenende skytjenestene/plattformkomponentene konfigureres gjennom bruk av NAIS, men driftes og forvaltes direkte av den underliggende leverandøren av plattformtjenester. De underliggende plattformtjenestene, levert av Google, Aiven og NAIS deles av alle. I tillegg til plattformtjenestene tilbyr NAIS standardkonfigurasjon for å ta disse i bruk. Denne kopieres ut til hver virksomhets infrastruktur hos skyleverandørene.'
    },
    {
      question: 'Hvem kan ta i bruk NAIS som en tjeneste?',
      answer:
        'Det er kun ordinære forvaltningsorgan i staten, som ikke driver økonomisk virksomhet, som kan benytte tjenesten. Annen bruk kan komme i konflikt med Statsstøtteregelverket. Hvis virksomheten din er privat, kommunal eller er et statsforetak, helseforetak eller lignende dere fortsatt bruke åpen kildekode fra NAIS, men NAV har da ikke anledning til å dele NAIS som en tjeneste.'
    },
  ], [
    {
      question: 'Hva koster det?',
      answer:
        'NAV skal ikke tjene penger på dette, og kostnader for drift og forvaltning hos NAV fordeles etter selvkostprinsippet. Kostnadene for de underliggende skytjenestene fordeles etter forbruk, uten påslag.'
    },
    {
      question: 'Hva er tjenestenivået som tilbys?',
      answer:
        'Tjenesten tilbys etter «best effort» prinsippet. Det innebærer at det ikke etableres SLA som er vanlig mellom kommersielle virksomheter. Økonomiske sanksjoner mellom virksomheter med samme eier gir ikke så mye mening, så eventuelle tvister må løses i minnelighet. Alle brukere av tjenesten har likeverdig tilgang til support og 24/7 beredskap. Det etableres et brukerforum der erfaringer og forslag til forbedring av funksjonalitet kan deles.'
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
            Her finner du svar på noen av de vanligste spørsmålene om nais, plattformen og tjenesten.
            Hvis du ikke finner svaret du leter etter, kan du kontakte oss for mer informasjon.
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
