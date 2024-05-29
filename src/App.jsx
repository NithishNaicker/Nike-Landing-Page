import  {Hero,PopularProducts,Services,SpecialOffers,SuperQuality,Footer,
  Subscribe,CustomerReviews,Nav} from "./sections/index"

const App=()=>(

  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
       <PopularProducts/>
    </section>
    <section className="padding">
       <SuperQuality/>
    </section>
    <section className="padding-x py-10">
       <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding">
      <CustomerReviews/>
    </section>
    <section className="padding">
      <Subscribe/>
    </section>
    <section className="">
      <Footer/>
    </section>

  </main>
)

export default App;