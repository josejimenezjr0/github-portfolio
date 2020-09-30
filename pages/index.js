import Head from 'next/head'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Head className="text-white">
        <link rel="shortcut icon" href="/img/favicon.svg" />
      </Head>
      <div id="page-top" className="antialiased text-gray-900">
        <Navbar />
        <div className="text-white text-center uppercase py-20 bg-header bg-center bg-cover" >
          <p className="text-4xl font-bold">Jose Jimenez Jr.</p>
          <hr className="mx-auto"/>
          <p className="text-lg tracking-wide my-3 font-medium">Web Developer</p>
        </div>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default Home

