import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GalleryServices from "./components/GalleryServices";
import Pricing from "./components/Pricing";
import CustomersReviews from "./components/CustomersReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <GalleryServices />
      <Pricing />
      <CustomersReviews />
      <Contact />
      <Footer />
    </>
  );
};
