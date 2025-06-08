import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProblemStatement from '../components/ProblemStatement'
import Solution from '../components/Solution'
import MarketOpportunity from '../components/MarketOpportunity'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <MarketOpportunity />
      <Footer />
    </main>
  )
}

