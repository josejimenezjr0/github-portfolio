import PortfolioCard from './PortfolioCard'
import { portfolioInfo } from '../public/staticInfo'

const Portfolio = () => {

  const portfolios = portfolioInfo.map( (project, ind) => (
    <PortfolioCard project={ project } key={ind}/>
  ))

  return (
    <div id="portfolio" className="bg-gray-300 p-8 flex-col flex-wrap items-center justify-center">
      <div>
        <p className="text-4xl font-bold text-center">Portfolio</p>
        <hr className="mx-auto"/>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        { portfolios }
      </div>
    </div>
  )
}

export default Portfolio