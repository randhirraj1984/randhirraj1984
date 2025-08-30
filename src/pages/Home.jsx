import HeroSection from '../components/HeroSection'
import TodaysDeals from '../components/TodaysDeals'
import TopStores from '../components/TopStores'
import TopCoupons from '../components/TopCoupons'
import TopRestaurants from '../components/TopRestaurants'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TodaysDeals />
      <TopStores />
      <TopCoupons />
      <TopRestaurants />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Why choose us?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          We deliver fast, secure and scalable solutions—custom websites, online stores, apps and SEO that drive measurable results.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {['Performance', 'Security', 'Support'].map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-lg font-semibold">{t}</div>
              <p className="text-gray-600 mt-2 text-sm">Best practices, modern stack, and ongoing optimization.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
