interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Programista na wsi',
    description: `Kanał YouTube, dzięki któremu robię porządek w głowie. Ten kanał to proces uwalniania się od natłoku myśli i robienia miejsca na nowe.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://www.youtube.com/@programista-na-wsi',
  },
  {
    title: 'Spirala nienawiści',
    description: `"Spirala nienawiści" to pomysł na książkę, który powstał w mojej głowie w wyniku wielu nieoczekiwanych zdarzeń w moim życiu.`,
    imgSrc: '/static/images/book/logo.png',
    href: '/tags/spirala-nienawisci',
  },
]

export default projectsData
