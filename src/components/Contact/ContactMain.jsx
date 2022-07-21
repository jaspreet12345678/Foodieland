import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Recipe from "./ContactComponents/Recipe";
import Static from "../UsableComponents/Static";
import Contact from "./ContactComponents/Contact";

const ContactMain = () => {
  return (
    <>
      <Header />
      <Contact />
      <Static />
      <Recipe />
      <Footer />
    </>
  );
};

export default ContactMain;
