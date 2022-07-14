import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import Recipe from "./recipe3";
import Static from "../Home/static";
import Contact from "./contact";

const ContactMain = () => {
    return (
      <>
      <Navbar />
       <Contact/>
       <Static />
       <Recipe />
       <Footer />
      </>
    );
  };
  
  export default ContactMain;
  