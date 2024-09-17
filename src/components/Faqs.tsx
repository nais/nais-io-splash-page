import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'NAIS tilbys også som en tjeneste for andre statlige forvaltningsorgan?',
      answer:
        'I tillegg til at plattformen tilbys som åpen kildekode, er det også mulig for andre statlige virksomheter å ta i bruk den skybaserte delen av Nais som en tjeneste. Praktisk løses dette ved at man utnytter standardarkitekturen i skytjenesntene, ved at det opprettes en egen tenant for hver organisasjon som bruker NAIS. De forskjellige organisasjonene får dermed ikke tilgang til hverandres applikasjoner og data. De underliggenende skytjenestene/plattformkomponentene konfigureres gjennom bruk av NAIS, men driftes og forvaltes direkte av den underliggende leverandøren av plattformtjenester. De underliggende plattformtjenestene, levert av Google, Aiven og NAIS deles av alle. I tillegg til plattformtjenestene tilbyr NAIS standardkonfigurasjon for å ta disse i bruk. Denne kopieres ut til hver virksomhets infrastruktur hos skyleverandørene.'
    },
  ], [
    {
      question: 'Hvem kan ta i bruk NAIS som en tjeneste?',
      answer:
        'Det er kun ordinære forvaltningsorgan i staten, som ikke driver økonomisk virksomhet, som kan benytte tjenesten. Annen bruk kan komme i konflikt med Statsstøtteregelverket. Hvis virksomheten din er privat, kommunal eller er et statsforetak, helseforetak eller lignende dere fortsatt bruke åpen kildekode fra NAIS, men NAV har da ikke anledning til å dele NAIS som en tjeneste.'
    },
    {
      question: 'Hva inngår i tjenesten?',
      answer: 'Tjenesten inkluderer drift og forvaltning av NAIS-plattformen, samt support og beredskap. NAIS-plattformen er en samling av skytjenester som gjør det enkelt for utviklere å bygge, deploye og drifte applikasjoner. Plattformen er basert på åpen kildekode og er utviklet av NAV. NAIS-plattformen er bygget på en rekke skytjenester fra Google, Aiven og NAIS.'
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
  ],
]

export function Faqs() {
  return (
    <section
      id="naas"
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
            Nais as a Service (NaaS)
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            NaaS er en skybasert tjeneste som tilbyr NAIS-plattformen til andre statlige forvaltningsorgan. Dette er den samme gode plattformen som NAV bruker for å utvikle og drifte applikasjoner for dine produktteam men driftet og forvaltet av oss.
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
                    <p className="mt-4 text-base text-slate-700">{faq.answer}</p>
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
