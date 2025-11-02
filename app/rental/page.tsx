import { genPageMetadata } from 'app/seo'
import rentalData from '@/data/rentalData'
import RentalCard from '@/components/RentalCard'

export const metadata = genPageMetadata({ title: 'Wypożyczalnia' })

export default function Rental() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Nie kupuj, wypożyczaj!
          </h1>
          <p className="bold mb-10 ml-2 text-2xl">
            Garden & Rental - Wypożyczalnia sprzętu budowlanego i ogrodniczego
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Jesteśmy idealnym partnerem dla wszystkich działkowców-amatorów i majsterkowiczów,
            którzy chcą, by ich projekty, zarówno te małe, jak i te większe, przebiegały sprawnie i
            bezproblemowo. Jeśli nie masz pieniędzy na fachowca, ale masz czas i chęć, wypożycz
            sprzęt i zrób to sam.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Obecnie nie dowozimy sprzętu do klienta. Odbiór i zwrot sprzętu we własnym zakresie.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Napisz lub zadzwoń: <a href="tel:+48502436700">502 436 700</a>
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {rentalData.map((d) => (
              <RentalCard
                key={d.title}
                title={d.title}
                description={d.description}
                techData={d.techData}
                rentalPrice={d.rentalPrice}
                deposit={d.deposit}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
