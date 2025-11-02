export interface RentalThing {
  title: string
  description: string
  imgSrc?: string
  techData?: string[]
  rentalPrice: number
  deposit: number
  href?: string
}

const thingData: RentalThing[] = [
  {
    title: 'Betoniarka Skiva SB-100',
    description: `Wypożycz betoniarkę zamiast mieszać beton łokciem :D`,
    imgSrc: '/static/images/rental/betoniarka.png',
    techData: [
      'Pojemność całkowita: 100l',
      'Pojemność robocza: 80l',
      'Moc: 550W',
      'Napięcie sieci: 230V',
      'Wieniec i zębatka: żeliwo',
      'Możliwość szybkiego demontażu bębna',
      'Obroty bębna: 30 obr/min',
      'Waga: 44kg',
    ],
    rentalPrice: 50,
    deposit: 400,
    href: 'https://skiva.pl/index.php/nasze-produkty/betoniarki/',
  },
]

export default thingData
