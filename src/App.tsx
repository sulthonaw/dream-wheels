import AboutUs from "./sections/about-us/AboutUs";
import Catalog from "./sections/catalog/Catalog";
import CTA from "./sections/cta/CTA";
import Footer from "./sections/footer/Footer";
// import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import Testimonials from "./sections/testimonials/Testimonials";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <AboutUs />
      <Catalog />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
