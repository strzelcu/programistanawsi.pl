import Image from './Image'
import Link from './Link'
import { RentalThing } from '@/data/rentalData'

const RentalCard = ({
  title,
  description,
  imgSrc,
  techData,
  rentalPrice,
  deposit,
  href,
}: RentalThing) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center"
              width={544}
              height={544}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 md:w-36 lg:h-70 lg:w-70"
            width={544}
            height={544}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {techData && techData.length > 0 && (
          <ul className="mb-3 list-disc">
            {techData.map((tech, index) => (
              <li className="prose ml-8 max-w-none text-gray-500 dark:text-gray-400" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        )}
        {rentalPrice && (
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            Cena wynajmu: {rentalPrice} zł/24h
          </p>
        )}
        {deposit && (
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            Kaucja zwrotna: {deposit} zł
          </p>
        )}
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Zobacz &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default RentalCard
