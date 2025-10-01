interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Programista na wsi',
    description: `Kanał na youtube, dzięki któremu robię porządek w głowie. Ten kanał to proces uwalniania się od natłoku myśli i robienia miejsca na nowe.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://www.youtube.com/@programista-na-wsi',
  },
]

export default projectsData
