import PortfolioCard from '../components/PortfolioCard'

const portfolioInfo = [
  {
    imageURL: 'img/portfolio/fosterpet.jpg',
    imageAlt: 'place holder text for image',
    beds: 3,
    baths: 2,
    title: "fosterPET",
    priceInCents: 190000,
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 3
  },
  {
    imageURL: 'img/portfolio/gamingqueue.jpg',
    imageAlt: 'place holder text for image',
    beds: 3,
    baths: 2,
    title: "Gaming Queue",
    priceInCents: 17000,
    formattedPrice: "$170.00",
    reviewCount: 99,
    rating: 4
  },
  {
    imageURL: 'img/portfolio/all4g.jpg',
    imageAlt: 'place holder text for image',
    beds: 3,
    baths: 2,
    title: "All 4G",
    priceInCents: 1550000,
    formattedPrice: "$15,500.00",
    reviewCount: 66,
    rating: 5
  },
]
const Portfolio = () => {

  const portfolios = portfolioInfo.map( (portfolio, ind) => (
    <PortfolioCard details={ portfolio } key={ind}/>
  ))

  return (
    <div id="portfolio" className="bg-gray-300 p-8 flex flex-wrap items-center justify-center">
      { portfolios }
    </div>
  )
}

export default Portfolio