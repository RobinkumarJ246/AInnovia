import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProblemStatement from '../components/ProblemStatement'
import Solution from '../components/Solution'
import MarketOpportunity from '../components/MarketOpportunity'
import NewsLetter from '../components/NewsLetter'
import AIchat from '../components/AIchat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <MarketOpportunity />
      <NewsLetter />
      <Footer />
      <AIchat position={{ bottom: 10, right: 20 }} />
    </main>
  )
}

