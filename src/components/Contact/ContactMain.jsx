import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Recipe from "./ContactComponents/Recipe";
import Subscription from "../UsableComponents/Subscription";
import Contact from "./ContactComponents/Contact";

const ContactMain = () => {
  return (
    <>
      <Header />
      <Contact />
      <Subscription />
      <Recipe />
      <Footer />
    </>
  );
};

export default ContactMain;
