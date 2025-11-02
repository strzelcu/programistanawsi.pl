interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'Programista na wsi',
    description: `Kanał YouTube, na którym dzielę się zmaganiami, jakie niesie ze sobą (wiejskie) życie. Traktuję kanał jako formę terapii – proces ten wspomaga uwalnianie myśli, co jest kluczowe, by stworzyć w głowie przestrzeń na nowe.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://www.youtube.com/@programista-na-wsi',
  },
  {
    title: 'Spirala nienawiści',
    description: `"Spirala nienawiści" to pomysł na książkę, który powstał w mojej głowie w wyniku wielu nieoczekiwanych zdarzeń w moim życiu.`,
    imgSrc: '/static/images/book/logo.png',
    href: '/tags/spirala-nienawisci',
  },
  {
    title: 'Wypożyczalnia sprzętu ogrodniczego i budowlanego',
    description: `Aby nie marnować zakupionego sprzętu potrzebnego w domu i ogrodzie, postanowiłem go wypożyczać.`,
    imgSrc: '/static/images/rental/garden-rental.jpeg',
    href: '/rental',
  },
]

export default projectsData
